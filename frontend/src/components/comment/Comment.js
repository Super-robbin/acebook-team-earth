import React from 'react';
import '../../styles/card/card.css';

const Comment = ({ comment }) => {
    return (
        <>
            <div className="comment__section" key={ comment._id }>
                <div className="card__container">
                    <img className="card__img comment_img" alt="user pic" />
                    <div className="card__user-info">
                        <p className="card__text_name comment_text">name</p>
                        <p className="card__text_time" >time</p>
                    </div>
                </div>
                <p className="comment__content">{comment.content}</p>
            </div>
        </>
    )
}

export default Comment;