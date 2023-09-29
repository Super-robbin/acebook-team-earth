import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../styles/container/container.css';
import lock from '../../images/lock-03.svg';
import email_icon from '../../images/email.svg';
import eye_opened from '../../images/View.svg';
import eye_closed from '../../images/View_hide.svg';
import userPic from '../../images/User.svg';
import profilePic from '../../images/Img_box.svg'

const SignUpForm = ({ navigate }) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch( '/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, email: email, password: password, picture: picture })
    })
      .then(response => {
        if(response.status === 201) {
          navigate('/login')
        } else {
          setErrors(errors)
          return response.json()
        }
      }).then((data) => {
        let errorMessage = data.message;
        setErrors({ ...errors, signUp: errorMessage });
      
      })
  }

  const handleUsernameChange = (event) => {
    const newUsername = event.target.value;
    const usernameErrors = validateUsername(newUsername);
    setErrors({ ...errors, username: usernameErrors });
    setUsername(newUsername);
  }

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    const emailErrors = validateEmail(newEmail);
    setErrors({ ...errors, email: emailErrors });
    setEmail(newEmail);
  }

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    const passwordErrors = validatePassword(newPassword);
    setErrors({ ...errors, password: passwordErrors });
    setPassword(newPassword);
  }

  const handlePictureChange = (event) => {
    setPicture(event.target.value);
  }

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  const validateUsername = (username) => {
    const errors = [];
    if (username.length < 2) {
      errors.push('Username should has at least 2 characters')
    }
    return errors
  }

  const validateEmail = (email) => {
    const errors = [];
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      errors.push('Please enter a valid email address. Ex: example@email.com');
    }
    if (email.trim() === '') {
      errors.length = 0;
    }
    return errors;
  };
  
  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 10) {
      errors.push('Minimum 10 characters; ');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('1 uppercase letter; ');
    }
    if (!/[!@#$%^&*]/.test(password)) {
      errors.push('1 special character; ');
    }
    if (!/\d/.test(password)) {
      errors.push('1 number; ');
    }
    return errors;
  };

  const hasErrors = () => {
    return (
      Object.values(errors).some((error) => Array.isArray(error) && error.length > 0)
    );
  };
  
    return (
      <>
        <section className="container">
          <div className="container-panel container-panel_left">
            <form className="form" onSubmit={handleSubmit}>
              <h3 className="title">Sign Up</h3>
              <div className="form__input-box">
                <img className="form__icon" src={userPic} alt="user_icon" />
                <input className="form__input" placeholder="Username" id="username" type='text' value={ username } onChange={handleUsernameChange} /> 
              </div>
              <div className="error__container">
                {errors.username ? (
                      <p className="error_message">
                        {errors.username}
                      </p>) : null}
              </div>
              <div className="form__input-box">
                <img className="form__icon" src={email_icon} alt="email_icon" />
                <input className="form__input" placeholder="Email" id="email" type='text' value={ email } onChange={handleEmailChange} />
              </div>
              <div className="error__container">
                {errors.email ? (
                    <p className="error_message">
                      {errors.email}
                    </p>) : null}
              </div>
              <div className="form__input-box">
                <img className="form__icon" src={lock} alt="lock-icon" />
                <input className="form__input" placeholder="Password" id="password" type={showPassword ? "text" : "password"} value={ password } onChange={handlePasswordChange} />
                <img alt="show-password-icon" className="button__toggle" src={showPassword ? eye_opened : eye_closed} onClick={togglePassword}/>
              </div>
              <div className="error__container">
                {errors.password ? (
                    <p className="error_message">
                      {errors.password}
                    </p>) : null}
              </div>
              <div className="form__input-box">
                <img className="form__icon" src={profilePic} alt="img_icon" />
                <input className="form__input" placeholder="Picture URL" id="picture" type='text' value={ picture } onChange={handlePictureChange} /> 
              </div>
            <button disabled={hasErrors()} className={`form__button form__ghost ${hasErrors() ? 'disabled__auth' : ''}`} id='submit' type="submit">Sign Up
            </button>
            <div className="error-auth__container">
              {errors.signUp ? (
                  <span className="error-auth">
                    <p className="error-auth__message">
                      {errors.signUp}
                    </p>
                  </span>) : null}
            </div>
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
