import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../styles/container/container.css';
import lock from '../../images/lock-03.svg';
import email_icon from '../../images/email.svg';
import eye_opened from '../../images/View.svg';
import eye_closed from '../../images/View_hide.svg';


const SignUpForm = ({ navigate }) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch( '/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username, email: email, password: password})
    })
      .then(response => {
        if(response.status === 201) {
          navigate('/login')
        } else {
          return response.json()
        }
      }).then((data) => {
        console.log(data.message)
        setErrors({ ...errors, signUp: data.message });
      
      })
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
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

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  const validateEmail = (email) => {
    const errors = [];
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      errors.push('Please enter a valid email address. Ex: example@mail.com');
    }
    if (email.trim() === '') {
      // Remove error message if the input is empty or contains only whitespace
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
  

    return (
      <>
        <section className="container">
          <div className="container-panel container-panel_left">
            <form className="form" onSubmit={handleSubmit}>
              <h3 className="title">Sign Up</h3>
              <div className="form__input-box">
              <input className="form__input" placeholder="Username" id="username" type='text' value={ username } onChange={handleUsernameChange} /> 
              </div>
              <div className="form__input-box">
                <img className="form__icon" src={email_icon} />
                <input className="form__input" placeholder="Email" id="email" type='text' value={ email } onChange={handleEmailChange} />
              </div>
              <div className="error__container">
                {errors.email ? (<p className="error_message">
                    {errors.email}
                  </p>) : null}
              </div>
              <div className="form__input-box">
                <img className="form__icon" src={lock} />
                <input className="form__input" placeholder="Password" id="password" type={showPassword ? "text" : "password"} value={ password } onChange={handlePasswordChange} />
                <img className="button__toggle" src={showPassword ? eye_opened : eye_closed} onClick={togglePassword}/>
              </div>
              <div className="error__container">
                {errors.password ? (<p className="error_message">
                    {errors.password}
                  </p>) : null}
                  {errors.signUp ? (<p className="error_message">
                    {errors.signUp}
                  </p>) : null}
              </div>
            <button className="form__button form__ghost" id='submit' type="submit">Sign Up
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
