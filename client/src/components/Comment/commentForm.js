import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../redux/slices/commentSlice";
import { setErrors } from "../../redux/slices/postSlice";
import { queryApi } from "../../utils/queryApi";
import { useHistory } from "react-router";
import jwtDecode from "jwt-decode";

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const [userWhoPosted, setUserWhoPosted] = useState(null);
  const [connectedUSer, setConnectedUser] = useState();
  const jwtToken = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwtToken) {
      // Set auth token header auth
      setConnectedUser(jwtDecode(jwtToken)); // Decode token and get user info and exp
    }
  }, []);
  const [formContent, setFormContent] = useState({
    description: "",
  });
  const handleChange = (content) => {
    setFormContent({
      description: content,
      post_id: postId,
      user_id: connectedUSer._id,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const [res, err] = await queryApi("comment", formContent, "POST");
    if (err) {
      setErrors({
        visible: true,
        message: JSON.stringify(err.errors, null, 2),
      });
    } else {
      dispatch(addComment(res));
    }
  };

  return (
    <form className='theme-form' onSubmit={(e) => handleSubmit(e)}>
      <div className='form-row'>
        <div className='col-md-12'>
          <label htmlFor='exampleFormControlTextarea1'>Comment</label>
          <textarea
            className='form-control'
            placeholder='Write Your Comment'
            id='exampleFormControlTextarea1'
            rows={6}
            onChange={(e) => handleChange(e.target.value)}
            defaultValue={""}
          />
        </div>
        <div className='col-md-12'>
          <button className='btn btn-solid' type='submit'>
            Post Comment
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
