import './App.css';
import LoginForm from '../auth/LoginForm'
import SignUpForm from '../user/SignUpForm'
import React, { useState } from 'react';
import Feed from '../feed/Feed'
import Navbar from '../navi_bar/NaviBar'
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from '../homepage/Homepage';

const App = () => {
    return (<>

    <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/posts'  element={<Feed navigate={ useNavigate() }/>}/>
          <Route path='/login'  element={<LoginForm  navigate={ useNavigate() }/>}/>
          <Route path='/signup' element={<SignUpForm navigate={ useNavigate() }/>}/>
        </Routes>
      </>
    );
}

export default App;
