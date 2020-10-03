import React from 'react'
import NavbarUser from "../navbar/NavbarUser";
import "./Homepage.css"

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
                            <h3>Super Smash Bros: Ultimate</h3>
                        </div>
                        <div className="flex-container">
                            <div className="flex-fill">
                                <img className="flex-img" src="/images/Valorant.jpg" alt="hello"/>
                            </div>
                            <h3>Valorant</h3>
                        <div className="flex-container">
                            <div className="flex-fill">
                                <img className="flex-img" src="/images/spiritblossom.jpg" alt="hello"/>
                            </div>
                            <h3>League of Legends</h3>
                        </div>
                            <div>
                                <h1>Groups</h1>
                                {groupData.map((x) => (
                                <div key = {x.discord}>
                                <h2>{x.name}</h2>
                        <p>{x.description}</p>
                        </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default homepage
