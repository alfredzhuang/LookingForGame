import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
import firebase from "../../firebase"

function NavbarUser(prop) {

    let {
        userData
    } = prop;

    let logOut = () => {
        firebase.auth().signOut();
      }

    return (
    <div className="navbar-user">
        <nav className="navbar-container">
            <div className="navbar-logo">
                <Link to="/homepage">
                    <img src="images/logo.png" alt="lfg logo"/>
                </Link>
            </div>
            <div className="navbar-links">
                <div className="avatar">
                        <img src={userData.url} alt="profile" width="50" height="50"/>
                         <p>{userData.username}</p>
                    </div>
                <ul>
                    <Link to="/browse">
                        <li className="navbar-link-item">
                            <p>Browse</p>
                        </li>
                    </Link>
                    <Link to="/create">
                        <li className="navbar-link-item">
                            <p>Create Group</p>
                        </li>
                    </Link>
                    <Link to="/login">
                        <li onClick = {logOut} className="navbar-login-button">
                            <p>Log Out</p>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default NavbarUser
