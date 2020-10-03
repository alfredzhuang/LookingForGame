import React from 'react'
import NavbarUser from "../navbar/NavbarUser";
import "./Create.css"

function create() {
    return (
        <div className="create">
         	<div className="section">
             <NavbarUser />
             <div className="content">
             <div className="create-container">
                 <div className="create-header">
                     <h2>Create a Group</h2>
                 </div>
                 <div className="create-form">
                     <div>
                         <div className="create-input-container group-name">
                             <label 
														 	className="create-label" 
															 htmlFor="create-group-name">Group Name</label>
                             <input 
														 	placeholder="Enter your Group Name" 
															 id= "create-group-name" 
															 className="input" 
															 type="text" 
															 required></input>
                         </div>
                     </div> 
										 <div>
                         <div className="create-input-container choose-game">
												 <label for="game">Choose a Game:</label>
															<select name="game" id="game">
																<option value="LeagueofLegends">League of Legends</option>
																<option value="AmongUs">Among Us</option>
																<option value="Minecraft">Minecraft</option>
																<option value="Genshin">Genshin Impact</option>
																<option value="Smash">Smash</option>
																<option value="Valorant">Valorant</option>
																<option value="Phasmophobia">Phasmophobia</option>
															</select>
                        </div>
                     </div>
                     <div>
                         <div className="create-input-container discord-link">
                             <label 
														 	className="create-label"
															  htmlFor="create-discord-link">Messaging Invite Link</label>
                             <input 
														 	placeholder="Enter your invite link (i.e. Discord)"
															id= "create-discord-link" 
															className="input" 
															type="text" 
															required></input>
                         </div>
                     </div>
                         <div className="create-last">
                             <div className="create-input-container Description">
                                 <label 
																 	className="create-label" 
																	 htmlFor="create-Description">Description</label>
                                 <input 
																 	placeholder="Enter your Group Description" 
																	 id= "create-Description" 
																	 className="input" 
																	 type="text" 
																	 required></input>
                             </div>
                         </div>
                     <div>
                         <button className="create-button">
                             Sign Up
                         </button>
                     </div>
                 </div>
             </div>
         </div>
         </div>
     </div>
    )
}

export default create
