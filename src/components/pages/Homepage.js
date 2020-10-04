import React from 'react'
import NavbarUser from "../navbar/NavbarUser";
import "./Homepage.css";
import { Link } from 'react-router-dom';
import Group from './Group';

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
                        <div className="homepage-flex-container">
                            {groupData.map((x) => (
                                <div key={x.discord} className="group-card">
                                    <div className="flex-fill">
                                        <img 
                                            className="homepage-img"
                                            src={x.url} 
                                            alt="group"/>
                                    </div>
                                    <h3>{x.name}</h3>
                                    <div className="inviteLink" >
                                        <a target="_blank" rel="noopener noreferrer" href={x.discord}>
                                            <h3>Get Invite Link</h3>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default homepage;