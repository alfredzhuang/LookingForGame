import React from 'react'
import NavbarUser from "../navbar/NavbarUser";
import "./Browse.css"

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
                            <div className="flex-fill">
                                <img className="flex-img" src="/images/Among Us.jpg" alt="hello"/>
                            </div>
                            <h3>Among Us</h3>
                        </div>
                        <div className="flex-container">
                            <div className="flex-fill">
                                <img className="flex-img" src="/images/Genshin Impact.jpg" alt="hello"/>
                            </div>
                            <h3>Genshin Impact</h3>
                        </div>
                        <div className="flex-container">
                            <div className="flex-fill">
                                <img className="flex-img" src="/images/Minecraft.jpg" alt="hello"/>
                            </div>
                            <h3>Minecraft</h3>
                        </div>
                        <div className="flex-container">
                            <div className="flex-fill">
                                <img className="flex-img" src="/images/Phasmaphobia.jpg" alt="hello"/>
                            </div>
                            <h3>Phasmaphobia</h3>
                        </div>
                        <div className="flex-container">
                            <div className="flex-fill">
                                <img className="flex-img" src="/images/Smash.jpg" alt="hello"/>
                            </div>
                            <h3>Super Smash Bros: Ulti...</h3>
                        </div>
                        <div className="flex-container">
                            <div className="flex-fill">
                                <img className="flex-img" src="/images/Valorant.jpg" alt="hello"/>
                            </div>
                            <h3>Valorant</h3>
                        </div>
                        <div className="flex-container">
                            <div className="flex-fill">
                                <img className="flex-img" src="/images/spiritblossom.jpg" alt="hello"/>
                            </div>
                            <h3>League of Legends</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Browse