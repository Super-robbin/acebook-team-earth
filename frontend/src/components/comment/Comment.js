import React from 'react';

const Comment = ({ comment }) => {
    return (
        <>
            <div key={ comment._id }>
                <p>{comment.comment}</p>
            </div>
        </>
    )
}

export default Comment;