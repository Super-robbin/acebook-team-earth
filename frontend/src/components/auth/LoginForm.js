import React, { useState } from 'react';
import { Link } from "react-router-dom";
import lock from '../../images/lock-03.svg';
import '../../styles/container/container.css'
import email_icon from '../../images/email.svg';
import eye_opened from '../../images/View.svg';
import eye_closed from '../../images/View_hide.svg';


const LogInForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch( `${process.env.REACT_APP_API_URL}/tokens`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password })
    })

    if(response.status !== 201) {
      console.log("yay");
      let newError = 'This user does not exist.'
      setError(newError);
    } else {
      console.log("oop")
      let data = await response.json()
      window.localStorage.setItem("token", data.token)
      navigate('/posts');
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    if (event.target.value === "")
    setError("")
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    if (event.target.value === "")
    setError("")
  }

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  const hasErrors = () => {
    return email.trim() === '' || password.trim() === '';
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
              <input className="form__input" placeholder='Password' id="password" type={showPassword ? "text" : "password"} value={ password } onChange={handlePasswordChange} />
              <img className="button__toggle" src={showPassword ? eye_opened : eye_closed} onClick={togglePassword}/>
              </div>
              <button className={`form__button form__ghost ${hasErrors() ? 'disabled__auth' : ''}`} id='submit' type="submit">Log In</button>
              <div className="error-auth__container">{error ? (<div className="error-auth">
                  <p className="error-auth__message">{error}</p>
                </div>) : null}</div>
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
