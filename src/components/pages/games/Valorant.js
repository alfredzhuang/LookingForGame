import React from 'react'
import "./Valorant.css"
import NavbarUser from "../../navbar/NavbarUser"
import { Link } from 'react-router-dom';
function Valorant(prop) {
    let {
        gameGroup,
        userData        
    } = prop;
    return (
        <div className="Valorant">
            <div className="section">
                <NavbarUser userData = {userData}/>
                <div className="Valorant-inner">
                    <h2>Valorant</h2>
                    <div className="Valorant-content">
                        <div className="Valorant-flex-container">
                            {gameGroup.map((x) => (
                                <div className="Valorant-group-card" key={x.discord}>
                                    <img className="Valorant-img" src={x.url} alt="group"/>
                                    <div className="group-card-description">
                                        <h4>{x.name}</h4>
                                        <div className="group-card-description-game">
                                            <p>{x.game}</p>
                                        </div>
                                        <p className="group-card-description-p">{x.description}</p>
                                        <div className="group-card-description-join">
                                            <p>Join Group</p>
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

export default Valorant
