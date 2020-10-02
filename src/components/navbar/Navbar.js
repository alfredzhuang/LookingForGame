import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <nav className="navbar-container">
                <div className="navbar-logo">
                    <h1>LFG</h1>
                </div>
                <div className="navbar-links">
                    <ul>
                        <li className="signin-button"><p>Sign Up</p></li>
                        <li className="login-button"><p>Log In</p></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
