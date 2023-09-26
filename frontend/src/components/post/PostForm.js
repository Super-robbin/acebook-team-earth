import React, { useState } from "react";

const PostForm = ({ token }) => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  console.log(image);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (message.trim() === '') {
      return message;
    }

    const formData = new FormData (); 
    formData.append('message', message);
    formData.append('image', image);

    let response = await fetch( '/posts', {
        method: 'post',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData
      }) 
      if (response.status !== 201) {
      } else {
        let data = await response.json();
        window.localStorage.setItem("token", data.token);
        window.location.reload();
        
      } 
      
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <textarea
          placeholder="Enter your message here.."
          id="message"
          type="text"
          value={message}
          onChange={handleMessageChange}
        ></textarea>
        <input type="file" accept=".png, .jpg, .jpeg" name="image" onChange={handleImageChange}></input>
        <input role="create-button" id="submit" type="submit" value="Create" />
      </div>
    </form>
  );
};

export default PostForm;
