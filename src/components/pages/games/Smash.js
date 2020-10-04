import React from 'react'
import "./Smash.css"

function Smash(prop) {
    let {
        gameGroup
    } = prop;
    return (
        <div>
            {gameGroup.map((x) => (
            <div key = {x.discord}>
                <h2>{x.name}</h2>
                <p>{x.description}</p>
                <img src={x.url} alt="group" width="100" height="100"/>
            </div>
            ))}
        </div>
    )
}

export default Smash
