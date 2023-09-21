import React from 'react';
import CommentForm from '../comment/CommentForm';

const Post = ({post}) => {
  return(
    <>
      <article data-cy="post" key={ post._id }>{ post.message }</article>
      <CommentForm/>
    </>
  )
}
export default Post;