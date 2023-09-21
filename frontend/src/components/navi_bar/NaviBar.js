import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    
    const location = useLocation();
    console.log(location.pathname)
    const shouldDisplayLink = () => {
        if (location.path === "/" ){
                return ( 
                    <div className="display-button">
                    <Link className='nav-button' to={"/signup"}>SignUp</Link>
                    <Link className='nav-button' to={"/login"}>Login</Link> 
                    </div>
                )
        }
    }
}

export default Navbar;