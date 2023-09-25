import React, { useState } from "react";

const PostForm = ({ token }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch( '/posts', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ message: message})
      }) 
      if (response.status !== 201) {
      } else {
        let data = await response.json();
        window.localStorage.setItem("token", data.token);
        // window.location.reload();
        
      } 
      
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Enter your message here.."
          id="message"
          type="text"
          value={message}
          onChange={handleMessageChange}
        />
        <input role="create-button" id="submit" type="submit" value="Create" />
      </div>
    </form>
  );
};

export default PostForm;
