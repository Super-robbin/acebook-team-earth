import React, { useState } from "react";
import '../../styles/post_form/post_form.css';
import '../../styles/buttons/buttons.css';
import send from '../../images/send.svg'
import fileImg from '../../images/Img_box_fill.svg'

const PostForm = ({ handleAddPost }) => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData (); 
    formData.append('message', message);
    formData.append('image', image);

    handleAddPost(formData);
    setMessage('')
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  }

  return (
    <section className="post_form">
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            className="post_form__textarea"
            name="Text1" cols="40" rows="5"
            placeholder="Enter your message here.."
            id="message"
            type="text"
            value={message}
            onChange={handleMessageChange}
          />
            <label className="button__label" htmlFor="fileUpload">
              <img className="button__img" src={fileImg} alt="choose file" />
              <input className="button__file" id="fileUpload" type="file" accept=".png, .jpg, .jpeg" name="image" onChange={handleImageChange} />
            </label>
          <button disabled={!message} className="button__send" role="create-button" id="submit" type="submit"><img src={send} alt="airplane-icon" /></button>
        </div>
      </form>
    </section>

  );
};

export default PostForm;
