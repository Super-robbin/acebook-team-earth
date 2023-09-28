import React from "react";
import defaultProfilePic from "../../images/default_profile_pic.jpg";

const Comment = ({ comment }) => {
  const commentedAt = new Date(comment.createdAt);
  const commentedAtFormatted = commentedAt.toLocaleString([], {
    day: "2-digit",
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <div key={comment._id}>
        <div className="card__container">
          <img
            className="card__img"
            alt="user pic"
            src={
              comment.user.picture ? comment.user.picture : defaultProfilePic
            }
          ></img>
        </div>
        <div className="card__user-info">
          <p className="card__text_name">{comment.user.username}</p>
          <p className="card__text_time">{commentedAtFormatted}</p>
        </div>
        <p>{comment.content}</p>
      </div>
    </>
  );
};

export default Comment;
