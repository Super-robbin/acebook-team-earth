import React, { useState, useEffect } from 'react';
import CommentForm from '../comment/CommentForm';
import Comment from '../comment/Comment';

const Post = ({post, token, setToken}) => {
  // const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   if(token) {
  //     fetch("/comments", {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     })
  //       .then(response => response.json())
  //       .then(async data => {
  //         window.localStorage.setItem("token", data.token)
  //         setToken(window.localStorage.getItem("token"))
  //         setComments(data.comments);
  //       })
  //   }
  // }, [])

  return(
    <>
      <article data-cy="post" key={ post._id }>{ post.message }</article>
      <CommentForm token ={ token } post={ post }/>
      <div>
        {post.comments.map(
            (comment) => ( <Comment comment={ comment } key={ comment._id } /> )
        )}
      </div>
      <div>
      </div>
    </>
  )
}
export default Post;