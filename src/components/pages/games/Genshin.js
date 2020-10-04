import React from 'react'
import "./Genshin.css"
import NavbarUser from "../../navbar/NavbarUser"
import { Link } from 'react-router-dom';

function Genshin(prop) {

    let {
        joinGroupGenshin,
        gameGroup,
        userData
    } = prop;

    return (
        <div className="Genshin">
            <div className="section">
                <NavbarUser userData = {userData}/>
                <div className="Genshin-inner">
                    <h2>Genshin Impact Groups</h2>
                    <div className="Genshin-content">
                        <div className="Genshin-flex-container">
                            {gameGroup.map((x) => (
                                <div className="Genshin-group-card" key={x.discord}>
                                    <img className="Genshin-img" src={x.url} alt="group"/>
                                    <div className="group-card-description">
                                        <h4>{x.name}</h4>
                                        <div className="group-card-description-game">
                                            <p>{x.game}</p>
                                        </div>
                                        <p className="group-card-description-p">{x.description}</p>
                                        <div className="group-card-description-join">
                                            <p onClick = {() => {joinGroupGenshin(x.id);}}>Join Group</p>
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

export default Genshin
