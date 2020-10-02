import React from 'react'
import Navbar from "../navbar/Navbar";
import "./Login.css"

function Login() {
    return (
        <div className="login">
            <Navbar />
            <div className="login-container">
                <div className="inner">
                    <h2>Login Page</h2>
                </div>
            </div>
        </div>
    )
}

export default Login
