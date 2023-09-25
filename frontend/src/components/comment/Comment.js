import React from 'react';

const Comment = ({ comment }) => {
    return (
        <>
            <div key={ comment._id }>
                <p>{comment.content}</p>
            </div>
        </>
    )
}

export default Comment;