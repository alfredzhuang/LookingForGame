import React from 'react';
import Navbar from "../navbar/Navbar";
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <header>
                <Navbar />
            </header>
            <div className="home-container">
                <div className="home-image">
                    <h2>product image goes here</h2>
                </div>
            </div>
        </div>
    )
}

export default Home
