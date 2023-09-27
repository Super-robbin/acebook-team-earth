import React, { useState } from 'react';
import '../../styles/post_form/post_form.css';
import send from '../../images/send.svg';
import '../../styles/buttons/buttons.css';

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
            <form className="comment_form" onSubmit={handleSubmit}> 
                <textarea
                    maxLength="100"
                    className="post_form__textarea"
                    cols="30" rows="2"
                    value={content}
                    onChange={handleCommentChange}
                    name="content" form="commentform"
                    placeholder="Reply..." />
                <button disabled={!content} className={`button__send button__send_comment ${!content ? 'disabled' : ''}`} role="create-button" id="submit" type="submit"><img src={send} alt="airplane-icon" /></button>
            </form>
        </>
    )
}

export default CommentForm;