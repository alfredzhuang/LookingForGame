import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"


function NavbarUser() {
    return (
    <div className="navbar">
        <nav className="navbar-container">
            <div className="navbar-logo">
                <Link to="/homepage"><h1>LFG</h1></Link>
            </div>
            <div className="navbar-links">
                <ul>
                    <Link to="/browse">
                        <li className="navbar-link-item">
                            <p>Browse</p>
                        </li>
                    </Link>
                    <Link to="/explore">
                        <li className="navbar-link-item">
                            <p>Explore</p>
                        </li>
                    </Link>
                    <Link to="/create">
                        <li className="navbar-link-item">
                            <p>Create Group</p>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default NavbarUser
