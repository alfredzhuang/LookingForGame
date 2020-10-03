import React from 'react'
import Navbar from "../../navbar/Navbar";
import "./Signup.css"

let Signup = (props) => {

    let {
        changeFile,
        username,
        setUserName,
        email,
        setEmail,
        password,
        setPassword,
        signUp, 
        emailError,
        passwordError
    } = props;

    return (
        <div className="signup">
            <Navbar />
            <div className="home-container">
                <div className="flex-fill">
                    <div className="home-image">
                        <img className="background-img" src="images/LFGbackground.png" alt="hello" />
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="signup-container">
                    <div className="signup-header">
                        <h2>Join LFG today</h2>
                    </div>
                    <div className="signup-form">
                        <div>
                            <div className="signup-input-container username">
                                <label 
                                    className="signup-label" 
                                    htmlFor="signup-username"
                                >Username</label>
                                <input 
                                    placeholder="Enter your Username" 
                                    id= "signup-username" 
                                    className="input" 
                                    type="text" 
                                    required 
                                    value={username} 
                                    onChange={(e) => setUserName(e.target.value)}></input>
                            </div>
                        </div> 
                        <div>
                            <div className="signup-input-container email">
                                <label 
                                    className="signup-label" 
                                    htmlFor="signup-email">
                                    Email</label>
                                <input 
                                    placeholder="Enter your email" 
                                    id= "signup-email" 
                                    className="input" 
                                    type="text" 
                                    required 
                                    value = {email} onChange={(e) => setEmail(e.target.value)}></input>
                                <p className = "error">{emailError}</p>
                            </div>
                        </div>
                            <div className="signup-last">
                                <div className="signup-input-container password">
                                    <label 
                                        className="signup-label" 
                                        htmlFor="signup-password">Password</label>
                                    <input 
                                        placeholder="Enter your password" 
                                        id= "signup-password" 
                                        className="input" 
                                        type="password" 
                                        required 
                                        value = {password} 
                                        onChange={(e) => setPassword(e.target.value)}></input>
                                    <p className = "error">{passwordError}</p>
                                </div>
                            </div>
                        <div>
                            <input type = "file" onChange = {changeFile}/>
                        </div>
                        <div>
                            <button onClick= {signUp} className="signup-button">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;