import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <nav className="navbar-container">
                <div className="navbar-logo">
                <Link to="/"><h1>LFG</h1></Link>
                </div>
                <div className="navbar-links">
                    <ul>
                        <Link to="/signup">
                            <li className="signin-button">
                                <p>Sign Up</p>
                            </li>
                        </Link>
                        <Link to="/login">
                            <li className="login-button">
                                <p>Log In</p>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
