import React from 'react'
import "./Among.css"
import NavbarUser from "../../navbar/NavbarUser"
import { Link } from 'react-router-dom';

function Among(prop) {
    let {
        gameGroup,
        userData
    } = prop;

    return (
        <div className="AmongUs">
            <div className="section">
                <NavbarUser userData = {userData}/>
                <div className="AmongUs-inner">
                    <h2>Among Us Groups</h2>
                    <div className="AmongUs-content">
                        <div className="AmongUs-flex-container">
                            {gameGroup.map((x) => (
                                <div className="AmongUs-group-card" key={x.discord}>
                                    <img className="AmongUs-img" src={x.url} alt="group"/>
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

export default Among


{/* <div className="AmongUs">
{gameGroup.map((x) => (
<div key = {x.discord}>
    <h2>{x.name}</h2>
    <p>{x.description}</p>
    <img src={x.url} alt="group" width="100" height="100"/>
</div>
))}
</div> */}