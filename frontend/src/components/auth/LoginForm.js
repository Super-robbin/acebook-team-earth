import React, { useState } from 'react';
import { Link } from "react-router-dom";
import lock from '../../images/lock-03.svg';
import email_icon from '../../images/email.svg';


const LogInForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch( '/tokens', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password })
    })

    if(response.status !== 201) {
      console.log("yay")
      navigate('/login')
    } else {
      console.log("oop")
      let data = await response.json()
      window.localStorage.setItem("token", data.token)
      navigate('/posts');
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }


    return (
      <>
        <section className="container">
          <div className="container-panel container-panel_left">
            <form className="form" onSubmit={handleSubmit}>
              <h3 className="title">Log In</h3>
              <div className="form__input-box">
                <img className="form__icon" src={email_icon} />
                <input className="form__input" placeholder='Email' id="email" type='text' value={ email } onChange={handleEmailChange} />
              </div>
              <div className="form__input-box">
                <img className="form__icon" src={lock} />
              <input className="form__input" placeholder='Password' id="password" type='password' value={ password } onChange={handlePasswordChange} />
              </div>
              {/* <input role='submit-button' id='submit' type="submit" value="Submit" /> */}
              <button className="form__button form__ghost" id='submit' type="submit">Log In

              </button>
            </form>
          </div>
          <div className="container-panel container-panel_right">
            <h3 className="title">Welcome Back!</h3>
            <p className="greeting-text">To keep connected with us please login with your personal info</p>
            <p>Create an account or log in to Acebook.</p>
            <Link className='button ghost' to={"/signup"}>SignUp</Link>
          </div>
        </section>
      </>
    );
}

export default LogInForm;
