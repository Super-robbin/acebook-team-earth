import React, { useState } from 'react';

const CommentForm = ({token}) => {
    const [comment, setComment] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        let response = await fetch('/comments', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ comment: comment })
        })
        if (response.status !== 201) {
            console.log('bad request')
        } else {
            let data = await response.json();
            window.localStorage.setItem("token", data.token);
            window.location.reload()
        }
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit}> 
                <textarea value={comment} onChange={handleCommentChange} name="comment" form="commentform" placeholder="Comment here..."></textarea>
                <button>Add Comment</button>
            </form>
        </>
    )
}

export default CommentForm;