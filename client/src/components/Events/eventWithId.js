import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { fetchPostsEvent, listPosts } from "../../redux/slices/eventSlice";
import { queryApi } from "../../utils/queryApi";
import RenderPosts from "./RenderPosts";

const EventWithId = (props) => {
  const dispatch = useDispatch();
  const listPos = useSelector(listPosts);
  const history = useHistory();

  const ListePosts = listPos.map((post) => {
    console.log(post);
    return (
      <div key={post.id}>
        <RenderPosts post={post} />
        <br />
      </div>
    );
  });

  useEffect(() => {
    dispatch(fetchPostsEvent(props.match.params.eventId));
  }, []);

  return (
    <>
      <Link
        style={{ float: "right", marginRight: "2%" }}
        className='btn btn-solid'
        to={"/event/addPost/" + props.match.params.eventId}
      >
        Add new Post
      </Link>
      <section class='section-b-space blog-page ratio2_3'>
        <div class='container'>
          <div class='row'>
            <div class='col-12'>{ListePosts}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventWithId;
