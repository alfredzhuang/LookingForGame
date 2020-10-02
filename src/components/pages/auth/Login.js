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

    function handleEmail(e) {
      setEmail(e.target.value);
    }

    function handlePassword(e) {
      setPassword(e.target.value);
    }

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
                              
                              /**ref={inputRef}
                              key="login-email-key" */
                              placeholder="Enter your email" 
                              id= "login-email" 
                              className="input" 
                              type="text"
                              autoFocus 
                              required 
                              value={email}
                              /**onClick={setInputFocus} */
                              onChange={handleEmail}>
                            </input>
                            <p className = "error">{emailError}</p>
                        </div>
                    </div>
                        <div className="login-last">
                            <div className="login-input-container password">
                                <label className="login-label" htmlFor="login-password">Password</label>
                                <input 
                                  /** ref={inputRef}
                                  key="login-password-key" */
                                  placeholder="Enter your password" 
                                  id= "login-password" className="input" 
                                  type="password" 
                                  required 
                                  value={password} 
                                  /** onClick={setInputFocus}*/
                                  onChange={handlePassword}>
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
