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
                <div className="flex-fill">
                    <div className="home-image">
                        <img className="background-img" src="images/LFGbackground.png" alt="hello" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
