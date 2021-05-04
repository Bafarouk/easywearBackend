import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { queryApi } from "../../utils/queryApi";
import { fetchEvents } from "../../redux/slices/eventSlice";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { addPost } from "../../redux/slices/postSlice";
import { UserContext } from "../../contexts/userContext";
import jwtDecode from "jwt-decode";

const mapStateToProps = (state) => ({
  events: state.eventSlice.events,
  recent_events: state.eventSlice.recentEvents,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
});

const AddPostForm = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState({ visible: false, message: "" });
  const [previewSource, setPreviewSource] = useState("");
  const [loader, setLoader] = useState(false);
  const [connectedUSer, setConnectedUser] = useState();
  const jwtToken = localStorage.getItem("jwt");
  const [event, setEvent] = useState(null);

  const yupObject = Yup.object().shape({
    title: Yup.string().required().max(30),
    description: Yup.string().required().max(255),
  });

  useEffect(() => {
    if (jwtToken) {
      // Set auth token header auth
      setConnectedUser(jwtDecode(jwtToken)); // Decode token and get user info and exp
      props.fetchEvents();
      const event = props.events.find(
        (event) => event._id === props.match.params.id
      );
      setEvent(event);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      user_id: "",
      event_id: "",
    },
    validationSchema: yupObject,
    onSubmit: async (values) => {
      console.log("Clicked");
      values.image_url = previewSource;
      values.user_id = connectedUSer._id;
      values.event_id = event._id;
      setLoader(true);
      const [res, err] = await queryApi("post", values, "POST");
      setLoader(false);
      if (err) {
        setError({
          visible: true,
          message: JSON.stringify(err.errors, null, 2),
        });
      } else {
        dispatch(addPost(res));
        history.push("/user/profile");
      }
    },
  });

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource(reader.result);
    };
  };
  return (
    <>
      <div className='AddPostForm login-page section-b-space mt-5'>
        <div className='col-lg-6'>
          <h3>Share a new Post to {event?.eventName}</h3>
          <div className='theme-card'>
            <form className='theme-form' onSubmit={formik.handleSubmit}>
              <div className='form-group'>
                <label htmlFor='title'>Title</label>
                <input
                  type='text'
                  className='form-control'
                  name='title'
                  id='title'
                  placeholder='Title'
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
                {formik.errors.title && formik.touched.title && (
                  <span>{formik.errors.title}</span>
                )}
              </div>

              <div className='form-group'>
                <label htmlFor='description'>description</label>
                <textarea
                  type='text'
                  className='form-control'
                  id='description'
                  name='description'
                  placeholder='description'
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
                {formik.errors.description && formik.touched.description && (
                  <span>{formik.errors.description}</span>
                )}
              </div>
              <div className='form-group'>
                <label htmlFor='image'>image</label>
                <input
                  type='file'
                  className='form-control'
                  name='image_url'
                  id='image_url'
                  placeholder='Image'
                  onChange={(event) => {
                    formik.setFieldValue("image_url", event.target.files[0]);
                    previewFile(event.target.files[0]);
                  }}
                />
              </div>

              <button
                disabled={formik.isSubmitting}
                type='submit'
                className='btn btn-solid'
              >
                {!loader ? (
                  "Share Post"
                ) : (
                  <div>
                    <span
                      className='spinner-border spinner-border-sm'
                      role='status'
                      aria-hidden='true'
                    />
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

//export default AddPostForm;
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddPostForm)
);
