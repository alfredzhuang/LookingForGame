import React from 'react'
import NavbarUser from "../navbar/NavbarUser";
import "./Homepage.css"

function homepage() {
    return (
        <div className="homepage">
            <div className="section">
                <NavbarUser />
                <div className="homepage-inner">
                    <h2>Your Groups</h2>
                    <div className="homepage-content">
                        <div className="flex-container">
                            <div className="flex-fill">
                                <img className="flex-img" src="/images/spiritblossom.jpg" alt="hello"/>
                            </div>
                            <h3>League of Legends</h3>
                        </div>
                        <div className="flex-container">
                            <div className="flex-fill">
                                <img className="flex-img" src="/images/spiritblossom.jpg" alt="hello"/>
                            </div>
                            <h3>League of Legends</h3>
                        </div>
                        <div className="flex-container">
                            <div className="flex-fill">
                                <img className="flex-img" src="/images/spiritblossom.jpg" alt="hello"/>
                            </div>
                            <h3>League of Legends</h3>
                        </div>
                        <div className="flex-container">
                            <div className="flex-fill">
                                <img className="flex-img" src="/images/spiritblossom.jpg" alt="hello"/>
                            </div>
                            <h3>League of Legends</h3>
                        </div>
                        <div className="flex-container">
                            <div className="flex-fill">
                                <img className="flex-img" src="/images/spiritblossom.jpg" alt="hello"/>
                            </div>
                            <h3>League of Legends</h3>
                        </div>
                        <div className="flex-container">
                            <div className="flex-fill">
                                <img className="flex-img" src="/images/spiritblossom.jpg" alt="hello"/>
                            </div>
                            <h3>League of Legends</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default homepage
