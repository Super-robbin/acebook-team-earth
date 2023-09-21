import React from 'react';

const CommentForm = () => {
    return (
        <>
            <form> 
                <textarea name="comment" form="commentform" placeholder="Comment here..."></textarea>
                <button>Add Comment</button>
            </form>
        </>
    )
}

export default CommentForm;