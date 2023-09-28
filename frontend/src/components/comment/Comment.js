import React from "react";
import defaultProfilePic from "../../images/default_profile_pic.jpg";
import '../../styles/card/card.css';

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
            <div className="comment__section" key={ comment._id }>
                <div className="card__container">
                    <img
                        className="card__img comment_img"
                        alt="user pic"
                        src={
                            comment.user.picture ? comment.user.picture : defaultProfilePic
                          }
                          />
                    <div className="card__user-info">
                        <p className="card__text_name comment_text">{comment.user.username}</p>
                        <p className="card__text_time" >{commentedAtFormatted}</p>
                    </div>
                </div>
                <p className="comment__content">{comment.content}</p>
            </div>
        </>
    )
}