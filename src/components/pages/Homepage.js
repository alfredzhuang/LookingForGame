import React from 'react'
import NavbarUser from "../navbar/NavbarUser";
import "./Homepage.css";
import { Link } from 'react-router-dom';

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
                                    <Link to="/group">
                                        <div className="flex-fill">
                                            <img 
                                                className="homepage-img"
                                                src={x.url} 
                                                alt="group"/>
                                        </div>
                                    </Link>
                                    <Link to="/group">
                                        <h3>{x.name}</h3>
                                    </Link>
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


{/* <div className="homepage">
            <div className="section">
                <NavbarUser userData = {userData}/>
                <div className="homepage-inner">
                    <h2>Your Groups</h2>
                    <div className="homepage-content">
                        <div className="homepage-container">
                            {groupData.map((x) => (
                                <div key={x.discord} className="group-card">
                                    <Link to="/group">
                                        <div className="flex-fill">
                                            <img 
                                                className="homepage-img"
                                                src={x.url} 
                                                alt="group"/>
                                        </div>
                                    </Link>
                                    <Link to="/group">
                                        <h3>{x.name}</h3>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>  */}