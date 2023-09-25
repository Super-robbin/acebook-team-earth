import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../styles/container/container.css';
import lock from '../../images/lock-03.svg';
import email_icon from '../../images/email.svg';


const SignUpForm = ({ navigate }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch( '/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password})
    })
      .then(response => {
        if(response.status === 201) {
          navigate('/login')
        } else {
          navigate('/signup')
        }
      })
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
              <h3 className="title">Sign Up</h3>
              <div className="form__input-box">
                <img className="form__icon" src={email_icon} />
                <input className="form__input" placeholder="Email" id="email" type='text' value={ email } onChange={handleEmailChange} />
              </div>
              <div className="form__input-box">
                <img className="form__icon" src={lock} />
                <input className="form__input" placeholder="Password" id="password" type='password' value={ password } onChange={handlePasswordChange} />
              </div>
            <button className="form__button form__ghost" id='submit' type="submit">Sign Up
              {/* <input id='submit' type="submit" value="Submit" /> */}
            </button>
          </form>
          </div>
          <div className="container-panel container-panel_right">
            <h3 className="title">Hello, Friend!</h3>
            <p className="greeting-text">Enter your personal details and start journey with us</p>
            <p>Already have an account? </p>
            <Link className='button ghost' to={"/login"}>Log In</Link>
          </div>
        </section>
      </>
    );
}

export default SignUpForm;
