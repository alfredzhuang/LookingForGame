import React from 'react'
import Navbar from "../../navbar/Navbar";
import "./Signup.css"

function Signup() {
    return (
        <div className="signup">
            <Navbar />
            <div className="content">
                <div className="signup-container">
                    <div className="signup-header">
                        <h2>Join LFG today</h2>
                    </div>
                    <div className="signup-form">
                        <div>
                            <div className="signup-input-container username">
                                <label className="signup-label" for="signup-username">Username</label>
                                <input placeholder="Enter your Username" id= "signup-username" className="input" type="text"></input>
                            </div>
                        </div>
                        <div>
                            <div className="signup-input-container email">
                                <label className="signup-label" for="signup-email">Email</label>
                                <input placeholder="Enter your email" id= "signup-email" className="input" type="text"></input>
                            </div>
                        </div>
                            <div className="signup-last">
                                <div className="signup-input-container password">
                                    <label className="signup-label" for="signup-password">Password</label>
                                    <input placeholder="Enter your password" id= "signup-password" className="input" type="text"></input>
                                </div>
                            </div>
                        <div>
                            <button className="signup-button">
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