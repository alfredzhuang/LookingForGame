import React from 'react'
import NavbarUser from "../navbar/NavbarUser";
import "./Browse.css"
import { Link } from 'react-router-dom';

function Browse(prop) {
    
    let {
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
                                    <img className="flex-img" src="/images/Among Us.jpg" alt="hello"/>
                                </div>
                            </Link>
                            <Link to="/AmongUs">
                                <h3>Among Us</h3>
                            </Link>
                        </div>
                        <div className="flex-container">
                            <Link to="/GenshinImpact">
                                <div className="flex-fill">
                                    <img className="flex-img" src="/images/Genshin Impact.jpg" alt="hello"/>
                                </div>
                            </Link>
                            <Link to="/GenshinImpact">
                                <h3>Genshin Impact</h3>
                            </Link>
                        </div>
                        <div className="flex-container">
                            <Link to="/Minecraft">
                                <div className="flex-fill">
                                    <img className="flex-img" src="/images/Minecraft.jpg" alt="hello"/>
                                </div>
                            </Link>
                            <Link to="/Minecraft">
                                <h3>Minecraft</h3>
                            </Link>
                        </div>
                        <div className="flex-container">
                            <Link to="/Phasmophobia">
                                <div className="flex-fill">
                                    <img className="flex-img" src="/images/Phasmophobia.jpg" alt="hello"/>
                                </div>
                            </Link>
                            <Link to="/Phasmophobia">
                                <h3>Phasmophobia</h3>
                            </Link>
                        </div>
                        <div className="flex-container">
                            <Link to="/Smash">
                                <div className="flex-fill">
                                    <img className="flex-img" src="/images/Smash.jpg" alt="hello"/>
                                </div>
                            </Link>
                            <Link to="/Smash">
                                <h3>Super Smash Bros: Ulti...</h3>
                            </Link>
                        </div>
                        <div className="flex-container">
                            <Link to="/Valorant">
                                <div className="flex-fill">
                                    <img className="flex-img" src="/images/Valorant.jpg" alt="hello"/>
                                </div>
                            </Link>
                            <Link to="/Valorant">
                                <h3>Valorant</h3>
                            </Link>
                        </div>
                        <div className="flex-container">
                            <Link to="/LeagueofLegends">
                                <div className="flex-fill">
                                    <img className="flex-img flex-league" src="/images/spiritblossom.jpg" alt="hello"/>
                                </div>
                            </Link>
                            <Link to="/LeagueofLegends">
                                <h3>League of Legends</h3>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Browse