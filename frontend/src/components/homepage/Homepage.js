import React from "react";
import { Link } from "react-router-dom";


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