/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { formatDate } from "../../helpers/dateConvert";
import {
  deletePost,
  setErrors,
  selectPosts,
  selectPost,
} from "../../redux/slices/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { queryApi } from "../../utils/queryApi";
import { useFormik } from "formik";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import * as Yup from "yup";
import {
  addClaim,
  fetchClaimByClaimUrl,
  selectClaims,
} from "../../redux/slices/claimSlice";
import jwtDecode from "jwt-decode";

const Posts = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loader, setLoader] = useState(false);
  const [claims, err] = useSelector(selectClaims);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  let user;
  const jwtToken = localStorage.getItem("jwt");
  console.log(jwtToken);
  if (jwtToken) {
    // Set auth token header auth
    user = jwtDecode(jwtToken); // Decode token and get user info and exp
    console.log(user);
  }

  const updatePost = (post) => {
    dispatch(selectPost(post));
    history.replace("/event/updatePost/" + post._id);
  };
  const deletePostEvent = async (id) => {
    setLoader(true);
    const [res, err] = await queryApi("post/" + id, {}, "DELETE");
    setLoader(false);
    if (err) {
      dispatch(setErrors(err));
      console.log(err);
    } else {
      dispatch(deletePost(id));
      history.push("/user/profile/posts");
    }
  };

  const getPostEvent = (post) => {
    dispatch(selectPost(post));
    history.replace("/event/post/" + post._id);
  };

  const yupSchema = Yup.object({
    description: Yup.string(),
  });

  const fetchClaimByClaimUrl = async (claim_url) => {
    const [res, error] = await queryApi(
      "claim/findAllByClaimUrl/test/" + claim_url,
      {},
      "GET"
    );
    return res;
  };

  const openConfirmation = async (post) => {
    const res = await fetchClaimByClaimUrl(post._id);

    if (window.confirm("Are you sure of Your claim ?") === true) {
      if (res.length !== 0) {
        alert("You already claimed this Post !! check Your Claims");
        history.push("/user/profile/claims");
      } else {
        handleShow();
        //formik.handleSubmit();
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      description: "I didn't Like this post !!",
    },
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      setShowLoader(true);
      values.type = "post";

      values.image_url = props.post.image_url;
      values.state = 1;
      values.user_id = user._id;
      values.claim_url = props.post._id;
      console.log(values);
      const [res, err] = await queryApi("claim/addClaim", values, "POST");
      if (err) {
        setShowLoader(false);
        setError({
          visible: true,
          message: JSON.stringify(err.errors, null, 2),
        });
      } else {
        dispatch(addClaim(res));
        alert("Claim added with success .. wait for adminstrator confirmation");
        history.push("/user/profile/claims");
      }
    },
  });

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Claim to this post </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Container>
              <Row>
                <Image src={props.post.image_url} fluid />
              </Row>
            </Container>

            <Form.Group controlId='formGriddescription'>
              <Form.Label>Mention a reason :</Form.Label>
              <Form.Control
                type='text'
                name='description'
                id='description'
                minLength='5'
                DefaultValue="I didn't Like this post !!"
                onChange={formik.handleChange}
              />
            </Form.Group>

            <Button
              variant='primary'
              disabled={formik.isSubmitting}
              type='submit'
            >
              Add Claim !
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      <div className='col-xl-3 col-md-6 col-grid-box'>
        <div className='product-box'>

          <form onSubmit={formik.handleSubmit}>
            <div className="img-wrapper">
              <div className="front">
                <a
                  href="fake"
                  className="bg-size blur-up lazyloaded"
                  style={{
                    backgroundImage: `url(${props.post.image_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    display: "block",
                  }}
                >
                  <img
                    src={props.post.image_url}
                    className="img-fluid blur-up lazyload bg-img"
                    alt="imgha"
                    style={{ display: "none" }}
                  />
                </a>
              </div>
              <div className="cart-info cart-wrap">
                <a
                  title="See more info"
                  onClick={() => getPostEvent(props.post)}
                >
                  <i className="fa fa-info" aria-hidden="true" />
                </a>
                <a
                  title="Delete Post From event"
                  onClick={() => deletePostEvent(props.post._id)}
                >

                  {!loader ? (
                    <i className='fa fa-trash' aria-hidden='true' />
                  ) : (
                    <div>
                      <span
                        className='spinner-border spinner-border-sm'
                        role='status'
                        aria-hidden='true'
                      />
                    </div>
                  )}

                </a>
                <a
                  title="Update Post From event"
                  onClick={() => updatePost(props.post)}
                >
                  <i className="fa fa-edit" aria-hidden="true" />
                </a>

                <a
                  title="Claim about a Post"
                  onClick={() => {
                    openConfirmation(props.post);
                  }}
                >
                  <i className="fa fa-cog fa-fw" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="product-detail">
              <div>
                <small>comments ({props.commentCount})</small>

                <a href="product-page(no-sidebar).html">
                  <h6>Posted in {props.post.event_id}</h6>
                  <small>{formatDate(props.post.date_creation)}</small>
                </a>
                <p>{props.post.description}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Posts;
