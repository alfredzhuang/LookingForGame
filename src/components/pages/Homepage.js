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
                </div>
            </div>
        </div>
    )
}

export default homepage
