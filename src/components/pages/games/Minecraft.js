import React from 'react'
import "./Minecraft.css"
import NavbarUser from "../../navbar/NavbarUser"
import { Link } from 'react-router-dom';

function Minecraft(prop) {
    let {
        joinGroupMinecraft,
        gameGroup,
        userData        
    } = prop;
    return (
        <div className="Minecraft">
            <div className="section">
                <NavbarUser userData = {userData}/>
                <div className="Minecraft-inner">
                    <h2>Minecraft Groups</h2>
                    <div className="Minecraft-content">
                        <div className="Minecraft-flex-container">
                            {gameGroup.map((x) => (
                                <div className="Minecraft-group-card" key={x.discord}>
                                    <img className="Minecraft-img" src={x.url} alt="group"/>
                                    <div className="group-card-description">
                                        <h4>{x.name}</h4>
                                        <div className="group-card-description-game">
                                            <p>{x.game}</p>
                                        </div>
                                        <p className="group-card-description-p">{x.description}</p>
                                        <div className="group-card-description-join">
                                            <p onClick = {() => {joinGroupMinecraft(x.id);}}>Join Group</p>
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

export default Minecraft
