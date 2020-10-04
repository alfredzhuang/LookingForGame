import React from 'react'
import "./Phasmophobia.css"
import NavbarUser from "../../navbar/NavbarUser"
import { Link } from 'react-router-dom';

function Phasmophobia(prop) {
    let {
        gameGroup,
        userData        
    } = prop;
    return (
        <div className="Phasmophobia">
            <div className="section">
                <NavbarUser userData = {userData}/>
                <div className="Phasmophobia-inner">
                    <h2>Phasmophobia Groups</h2>
                    <div className="Phasmophobia-content">
                        <div className="Phasmophobia-flex-container">
                            {gameGroup.map((x) => (
                                <div className="Phasmophobia-group-card" key={x.discord}>
                                    <img className="Phasmophobia-img" src={x.url} alt="group"/>
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

export default Phasmophobia
