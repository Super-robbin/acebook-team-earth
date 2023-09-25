import React, { useState } from 'react';

const CommentForm = ({token, post}) => {
    const [content, setContent] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        let response = await fetch('/comments', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ content: content, post_id: post._id })
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
        setContent(e.target.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit}> 
                <textarea value={content} onChange={handleCommentChange} name="content" form="commentform" placeholder="Comment here..."></textarea>
                <button>Add Comment</button>
            </form>
        </>
    )
}

export default CommentForm;