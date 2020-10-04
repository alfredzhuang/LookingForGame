import React from 'react'
import "./Smash.css"
import NavbarUser from "../../navbar/NavbarUser"
import { Link } from 'react-router-dom';

function Smash(prop) {
    let {
        joinGroupSmash,
        gameGroup,
        userData        
    } = prop;
    return (
        <div className="Smash">
            <div className="section">
                <NavbarUser userData = {userData}/>
                <div className="Smash-inner">
                    <h2>Super Smash Bros: Ultimate</h2>
                    <div className="Smash-content">
                        <div className="Smash-flex-container">
                            {gameGroup.map((x) => (
                                <div className="Smash-group-card" key={x.discord}>
                                    <img className="Smash-img" src={x.url} alt="group"/>
                                    <div className="group-card-description">
                                        <h4>{x.name}</h4>
                                        <div className="group-card-description-game">
                                            <p>{x.game}</p>
                                        </div>
                                        <p className="group-card-description-p">{x.description}</p>
                                        <div className="group-card-description-join">
                                            <p onClick = {() => {joinGroupSmash(x.id);}}>Join Group</p>
                                        </div>
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

export default Smash
