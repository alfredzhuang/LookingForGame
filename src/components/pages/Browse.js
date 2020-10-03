import React from 'react'
import NavbarUser from "../navbar/NavbarUser";
import "./Browse.css"

function Browse(prop) {
    
    let {
        userData
    } = prop;

    return (
        <div className="browse">
            <div className="section">
            <NavbarUser userData = {userData}/>
                <h2>Browse</h2>
            </div>
        </div>
    )
}

export default Browse