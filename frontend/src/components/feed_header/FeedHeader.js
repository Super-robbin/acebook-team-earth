import React from 'react';
import '../../styles/buttons/buttons.css';
import '../../styles/container/container.css';
import logout_icon from '../../images/logout.svg';

const FeedHeader = ({ user, logout }) => {
    return (
        <>
            <header className="header__feed">
                <h1>ACEBOOK</h1>
                <div className="user__info">
                    <img className="user__img" src={user.picture} alt="user pic" />
                    <p>{user.username}</p>
                    <button className="button__log-out" onClick={logout}>
                        <img className="sign" src={logout_icon} alt="logout-icon" />
                        <div className="text">Log out</div>
                    </button>
                </div>
            </header>
        </>
    )
}

export default FeedHeader;