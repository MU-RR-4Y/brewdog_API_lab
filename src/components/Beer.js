import React from "react";
import Ingredients from "./ingredients";

const Beer = ({beer})=>{

    const toggleHidden = function (){
        let info =document.getElementById(beer.id);
        if(info.style.display === 'none'){
            info.style.display = 'block';
            }
        else{
                info.style.display ='none';
            }
    }

    return(
    <div className='beer'>
           <img src={beer['image_url']} alt="" /> 
            <h2>{beer['name']}</h2>
            <p><i>{beer['tagline']}</i></p>
            <p>First brewed: {beer['first_brewed']}</p>

            <button onClick={toggleHidden}>More Info</button>
            <div id= {beer.id} className='moreinfo'>
            <h4>Description</h4>
            <p>{beer['description']}</p>
            <h4>Ingredients</h4>
            <p><Ingredients beer = {beer}/></p>
            </div>
            
    </div>
    )

} 

export default Beer