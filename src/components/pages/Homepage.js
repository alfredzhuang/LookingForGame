import React from 'react'
import NavbarUser from "../navbar/NavbarUser";
import "./Homepage.css"

function homepage(prop) {

    let {
        groupData,
        userData
    } = prop;

    return (
        <div className="homepage">
            <div className="section">
                <NavbarUser userData = {userData}/>
                <div className="homepage-inner">
                    <h2>Your Groups</h2>
                    <div className="homepage-content">
                        <div>
                            {groupData.map((x) => (
                                <div key = {x.discord}>
                                    <h2>{x.name}</h2>
                                    <p>{x.description}</p>
                                    <img src={x.url} alt="group" width="100" height="100"/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default homepage
