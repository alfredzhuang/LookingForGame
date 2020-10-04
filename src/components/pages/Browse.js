import React from 'react'
import NavbarUser from "../navbar/NavbarUser";
import "./Browse.css"
import { Link } from 'react-router-dom';

function Browse(prop) {
    
    let {
        getGameGroupMinecraft,
        getGameGroupSmash,
        getGameGroupLeague,
        getGameGroupPhasmophobia,
        getGameGroupValorant,
        getGameGroupAmongUs,
        getGameGroupGenshin,
        userData
    } = prop;

    return (
        <div className="browse">
            <div className="section">
                <NavbarUser userData = {userData}/>
                <div className="browse-inner">
                    <h2>Browse</h2>
                    <div className="browse-content">
                        <div className="flex-container">
                            <Link to="/AmongUs">
                                <div className="flex-fill">
                                    <img className="flex-img" src="/images/Among Us.jpg" alt="hello" onClick = {getGameGroupAmongUs}/>
                                </div>
                            </Link>
                            <Link to="/AmongUs">
                                <h3 onClick = {getGameGroupAmongUs}>Among Us</h3>
                            </Link>
                        </div>
                        <div className="flex-container">
                            <Link to="/GenshinImpact">
                                <div className="flex-fill">
                                    <img className="flex-img" src="/images/Genshin Impact.jpg" alt="hello" onClick = {getGameGroupGenshin}/>
                                </div>
                            </Link>
                            <Link to="/GenshinImpact">
                                <h3 onClick = {getGameGroupGenshin}>Genshin Impact</h3>
                            </Link>
                        </div>
                        <div className="flex-container">
                            <Link to="/Minecraft">
                                <div className="flex-fill">
                                    <img className="flex-img" src="/images/Minecraft.jpg" alt="hello" onClick = {getGameGroupMinecraft}/>
                                </div>
                            </Link>
                            <Link to="/Minecraft">
                                <h3 onClick = {getGameGroupMinecraft}>Minecraft</h3>
                            </Link>
                        </div>
                        <div className="flex-container">
                            <Link to="/Phasmophobia">
                                <div className="flex-fill">
                                    <img className="flex-img" src="/images/Phasmophobia.jpg" alt="hello" onClick = {getGameGroupPhasmophobia}/>
                                </div>
                            </Link>
                            <Link to="/Phasmophobia">
                                <h3 onClick = {getGameGroupPhasmophobia}>Phasmophobia</h3>
                            </Link>
                        </div>
                        <div className="flex-container">
                            <Link to="/Smash">
                                <div className="flex-fill">
                                    <img className="flex-img" src="/images/Smash.jpg" alt="hello" onClick = {getGameGroupSmash}/>
                                </div>
                            </Link>
                            <Link to="/Smash">
                                <h3 onClick = {getGameGroupSmash}>Super Smash Bros: Ulti...</h3>
                            </Link>
                        </div>
                        <div className="flex-container">
                            <Link to="/Valorant">
                                <div className="flex-fill">
                                    <img className="flex-img" src="/images/Valorant.jpg" alt="hello" onClick = {getGameGroupValorant}/>
                                </div>
                            </Link>
                            <Link to="/Valorant">
                                <h3 onClick = {getGameGroupValorant}>Valorant</h3>
                            </Link>
                        </div>
                        <div className="flex-container">
                            <Link to="/LeagueofLegends">
                                <div className="flex-fill">
                                    <img className="flex-img flex-league" src="/images/spiritblossom.jpg" alt="hello" onClick = {getGameGroupLeague}/>
                                </div>
                            </Link>
                            <Link to="/LeagueofLegends">
                                <h3 onClick = {getGameGroupLeague}>League of Legends</h3>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Browse