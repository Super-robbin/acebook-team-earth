import React from "react";
import { Link } from "react-router-dom";
import '../../styles/container/container.css';
import '../../styles/buttons/buttons.css';


const Homepage = () => {
    return (
        <section className="container">
            <header className="container-panel container-panel_right">
                <h1 className="container__title">WELCOME TO ACEBOOK</h1>
                    <div className="button__container">
                        <Link to={"/signup"}><button className="button ghost">SignUp</button></Link>
                        <Link to={"/login"}><button className="button ghost">Login</button></Link>
                    </div>
            </header>
            <section className="container-panel container-panel_left"></section>
        </section>
    )
}

export default Homepage