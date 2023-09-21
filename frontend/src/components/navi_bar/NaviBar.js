import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
     <header>
        <div className="logo" >
            Company 
        </div>
        <div className="display-button">

            <Link className='nav-button' to={"/"}>Home</Link>
            <Link className='nav-button' to={"/posts"}>Posts</Link>
            <Link className='nav-button' to={"/signup"}>SignUp</Link>
            <Link className='nav-button' to={"/login"}>Login</Link>

            
        </div>
      </header>
    )
}

export default Navbar