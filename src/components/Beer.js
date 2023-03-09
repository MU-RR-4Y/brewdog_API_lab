import React from "react";

const Beer = ({beer})=>{

    return(
    <div>
        <li>
            <h2>{beer['name']}</h2>
            <p>{beer['description']}</p>
            <img src={beer['image_url']} alt="" />

        
        
        </li>
    </div>
    )

} 

export default Beer