import React from 'react';
import Navbar from "../navbar/Navbar";
import "./Home.css";


function Home() {
    return (
        <div className="home">
            <header>
                <Navbar />
            </header>
            <div className="home-container">
                <div className="home-image">
                    <img src="images/LFGbackground.png"/>
                </div>
            </div>
        </div>
    )
}

export default Home
