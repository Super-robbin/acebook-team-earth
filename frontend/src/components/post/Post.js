import React from 'react';
import CommentForm from '../comment/CommentForm';
import Comment from '../comment/Comment';
import '../../styles/card/card.css';
import heart from '../../images/heart-filled.svg';
import heartOut from '../../images/heart_outline.svg';
import bubble from '../../images/bubble.svg';

const Post = ({post, token}) => {

  const postedAt = new Date(post.createdAt)
  const postedAtFormatted = postedAt.toLocaleString([], {day:'2-digit', month:'short', year: '2-digit' ,hour: '2-digit',minute:'2-digit'});

  return(
    <>
      <div className="card" data-cy="post" key={ post._id }>
        <div className="card__container">
          <img className="card__img" alt="user pic"/>
          <div className="card__user-info">
            <p className="card__text_name">user name</p>
            <p className="card__text_time" >{postedAtFormatted}</p>
          </div>
        </div>
        <p className="card__text">{ post.message }</p>
        <div className="card__info">
          <img className="card__item" src={bubble} alt="comment-icon" />
          <p className="card__item">0</p>
          <img className="card__item" src={heartOut} alt="like-icon" />
          <p className="card__item"> 0</p>
        </div>
      </div>

      <CommentForm token ={ token } post={ post }/>
      <div>
        {post.comments.map(
            (comment) => (
            <Comment comment={ comment } key={ comment._id } />)
          )}
      </div>
      <div>
      </div>
    </>
  )
}
export default Post;