import React from 'react'
import Navbar from "../../navbar/Navbar";
import { Link } from 'react-router-dom';
import "./Login.css"

function Login() {
    return (
        <div className="login">
            <Navbar />
            <div className="content">
                <div className="login-container">
                    <div className="login-header">
                        <h2>Login to LFG</h2>
                    </div>
                    <div className="login-form">
                        <div>
                            <div className="login-input-container email">
                                <label className="login-label" for="login-email">Email</label>
                                <input placeholder="Enter your email" id= "login-email" className="input" type="text"></input>
                            </div>
                        </div>
                            <div className="login-last">
                                <div className="login-input-container password">
                                    <label className="login-label" for="login-password">Password</label>
                                    <input placeholder="Enter your password" id= "login-password" className="input" type="text"></input>
                                </div>
                            </div>
                        <div>
                            <button className="login-button">
                                <Link to="/homepage">
                                    Login
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
