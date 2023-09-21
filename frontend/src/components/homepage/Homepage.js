import React from "react";
import Navbar from "../navi_bar/NaviBar";
import { Link, useLocation } from "react-router-dom";


const Homepage = () => {
    return (
        <header>
            <div className="display-button">
                <Link className='nav-button' to={"/signup"}>SignUp</Link>
                <Link className='nav-button' to={"/login"}>Login</Link> 
            </div>
            <h1>ACEBOOK</h1>
        </header>
    )
}

export default Homepage