import React from 'react';
import NavbarUser from "../navbar/NavbarUser";
import "./FindGroup.css"

function FindGroup(prop) {
    let {
        userData
    } = prop;
    return (
        <div className="find">
            <div className="section">
            <NavbarUser userData = {userData}/>
                <h2>FindGroup</h2>
            </div>
        </div>
    )
}

export default FindGroup
