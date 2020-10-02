import React from 'react'
import Navbar from "../../navbar/Navbar";
import "./Login.css"

let Login = (props) => {

    let {
        email,
        setEmail,
        password,
        setPassword,
        signIn, 
        emailError,
        passwordError
    } = props;

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
                            <label className="login-label" htmlFor="login-email">Email</label>
                            <input 
                              placeholder="Enter your email" 
                              id= "login-email" 
                              className="input" 
                              type="text" 
                              required 
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}>
                            </input>
                            <p className = "error">{emailError}</p>
                        </div>
                    </div>
                        <div className="login-last">
                            <div className="login-input-container password">
                                <label className="login-label" htmlFor="login-password">Password</label>
                                <input 
                                  placeholder="Enter your password" 
                                  id= "login-password" className="input" 
                                  type="password" 
                                  required 
                                  value={password} 
                                  onChange={(e) => setPassword(e.target.value)}>
                                </input>
                                <p className = "error">{passwordError}</p>
                            </div>
                        </div>
                    <div>
                        <button onClick={signIn} className="login-button">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login
