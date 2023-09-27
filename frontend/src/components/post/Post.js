import React, { useState } from 'react';
import CommentForm from '../comment/CommentForm';
import Comment from '../comment/Comment';
import '../../styles/card/card.css';
import heart from '../../images/heart-filled.svg';
import heartOut from '../../images/heart_outline.svg';
import bubble from '../../images/bubble.svg'
import defaultProfilePic from '../../images/default_profile_pic.jpg'

const Post = ({post, token, handleAddLike}) => {

  const [showComments, setShowComments] = useState(false);

  const postedAt = new Date(post.createdAt)
  const postedAtFormatted = postedAt.toLocaleString([], {day:'2-digit', month:'short', year: '2-digit' ,hour: '2-digit',minute:'2-digit'});

  function handleLikeClick() {
    handleAddLike(post)
  }

  const toggleComments = () => {
    setShowComments(!showComments);
    console.log(showComments)
  };

  return(
    <>
      <div className="card" data-cy="post" key={ post._id }>
        <div className="card__container">
          <img className="card__img" alt="user pic" src={post.user.picture ? post.user.picture : defaultProfilePic}></img>
          <div className="card__user-info">
            <p className="card__text_name">{post.user.username}</p>
            <p className="card__text_time" >{postedAtFormatted}</p>
          </div>
        </div>
        {post.image && <img src={`/images/${post.image}`} alt="post-img" width='100%'/>}
        <p className="card__text">{ post.message }</p>
        <div className="card__info">
          <img className="card__item" src={bubble} alt="comment-icon" onClick={toggleComments}/>
          <p className="card__item">{post.comments.length}</p>
          <img onClick={handleLikeClick} className="card__item" src={heartOut} alt="like-icon" />
          <p className="card__item">{post.likes.length}</p>
        </div>
      </div>
      {showComments ? (
        <>
          <CommentForm token={token} post={post} />
          <div>
            {post.comments.map((comment) => (
              <Comment comment={comment} key={comment._id} />
          ))}
        </div>
      </>
    ) : (
      <CommentForm token={token} post={post} />
    )}
    <div>
    </div>
  </>
  )
          };
  
export default Post;