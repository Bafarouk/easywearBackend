import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPost,
  selectPosts,
  selectSelectedPosts,
  setErrors,
} from "./../../redux/slices/postSlice";
import { formatDate } from "../../helpers/dateConvert";
import { useHistory } from "react-router";
import { queryApi } from "../../utils/queryApi";
import CommentForm from "../Comment/commentForm";
import {
  fetchPostComments,
  selectComments,
} from "../../redux/slices/commentSlice";
import PostComments from "../Comment/PostComments";
import { ReactionBarSelector } from "@charkour/react-reactions";
import {
  addReaction,
  fetchPostReaction,
  selectReactions,
} from "../../redux/slices/reactionSlice";
import Reactions from "../Reactions/reactions";
import jwtDecode from "jwt-decode";
import UserToReact from "../Reactions/userToReact";

const PostDetails = (props) => {
  const [post, setPost] = useState({});
  const [author, setAuthor] = useState({});
  const [comments, err] = useSelector(selectComments);
  const [reactions, errors] = useSelector(selectReactions);
  const [connectedUSer, setConnectedUser] = useState();
  const jwtToken = localStorage.getItem("jwt");
  const posts = useSelector(selectSelectedPosts);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (jwtToken) {
      // Set auth token header auth
      setConnectedUser(jwtDecode(jwtToken)); // Decode token and get user info and exp
    }
    async function fetchPost() {
      const [res, err] = await queryApi(
        "post/" + props.match.params.id,
        {},
        "GET"
      );
      setPost(res);
    }

    fetchPost();
    dispatch(fetchPostComments(props.match.params.id));
    dispatch(fetchPostReaction(props.match.params.id));
    //fetchUser(posttest.user_id);
  }, [dispatch]);

  async function fetchUser(userId) {
    const [res, err] = await queryApi("user/getById/" + userId, {}, "GET");
    console.log(res);
  }

  return (
    <>
      <div className='breadcrumb-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6'>
              <div className='page-title'>
                <h2>blog details</h2>
              </div>
            </div>
            <div className='col-sm-6'>
              <nav aria-label='breadcrumb' className='theme-breadcrumb'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <a href='index.html'>Home / event / post details</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <section className='blog-detail-page section-b-space ratio2_3'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 blog-detail'>
              <h3>{post.title}</h3>
              <ul className='post-social'>
                <li>{formatDate(post.date_creation)}</li>
                <li>
                  Posted By : {author?.first_name} {author?.last_name}
                </li>
                <li>
                  <i className='fa fa-heart' /> {reactions.length} Hits
                </li>
                <li>
                  <i className='fa fa-comments' /> {comments.length} Comment
                </li>
              </ul>
            </div>
          </div>
          <div className='row section-b-space blog-advance'>
            <div className='col-lg-6'>
              <div
                className='bg-size blur-up lazyloaded'
                style={{
                  backgroundImage: `url(${post.image_url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  display: "block",
                }}
              >
                <img
                  src={post.image_url}
                  className='img-fluid blur-up lazyload bg-img'
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div
              className='col-lg-6'
              style={{
                display: "flex",
                alignContent: "end",
                "flex-direction": "column",
              }}
            >
              <p>
                {post.description} Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Fermentum leo vel orci porta non pulvinar.
                Viverra adipiscing at in tellus. Lobortis mattis aliquam
                faucibus purus in massa tempor nec feugiat. Ultricies mi eget
                mauris pharetra et ultrices neque. Vel elit scelerisque mauris
                pellentesque pulvinar pellentesque habitant. Sit amet cursus sit
                amet dictum sit amet. Sit amet nisl suscipit adipiscing
                bibendum. At volutpat diam ut venenatis tellus in metus
                vulputate eu. Id volutpat lacus laoreet non. Tortor condimentum
                lacinia quis vel eros. Facilisi nullam vehicula ipsum a arcu
                cursus. Risus ultricies tristique nulla aliquet enim tortor at
                auctor. Eget magna fermentum iaculis eu non diam. Sit amet
                dictum sit amet. Elit pellentesque habitant morbi tristique
                senectus. Molestie a iaculis at erat pellentesque adipiscing
                commodo elit. Magna etiam tempor orci eu lobortis elementum
                nibh.
              </p>
              <Reactions />
            </div>
            <UserToReact post={post} />
          </div>

          <div className='row section-b-space'>
            <div className='col-sm-12'>
              {comments?.map((item) => {
                return <PostComments comment={item} key={item._id} />;
              })}
            </div>
          </div>
          <div className='row blog-contact'>
            <div className='col-sm-12'>
              <h2>Leave Your Comment</h2>
              <CommentForm postId={post._id} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostDetails;
