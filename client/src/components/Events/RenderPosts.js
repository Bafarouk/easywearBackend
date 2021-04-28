import React from "react";
import { NavLink } from "react-router-dom";

const RenderPosts = ({ post }) => {
  return (
    <div class='row blog-media'>
      <div class='col-xl-6'>
        <div class='blog-left'>
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
      </div>
      <div class='col-xl-6'>
        <div class='blog-right'>
          <div>
            <h6>
              {" "}
              Posting Date :{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(post.date_creation)))}
            </h6>
            <h4>
              <NavLink to={"/event/post/" + post._id}> {post.title}</NavLink>
            </h4>
            <ul class='post-social'>
              <li>Posted By : Admin Admin</li>
            </ul>
            <p>{post.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderPosts;
