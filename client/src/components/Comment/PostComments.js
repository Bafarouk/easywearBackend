import React from "react";
import { formatDate } from "../../helpers/dateConvert";

const PostComments = ({ comment }) => {
  return (
    <ul className='comment-section'>
      <li>
        <div className='media'>
          <img
            src='/assets/images/team/1.jpg'
            alt='Generic placeholder image'
          />
          <div className='media-body'>
            <h6>
              Mark Jecno <span>( {formatDate(comment.date_creation)} )</span>
            </h6>
            <p>{comment.description}</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default PostComments;
