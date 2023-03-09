import React from "react";
import Beer from "./Beer";

const BeerList = ({beers})=>{

const beerlist = beers.map((beer, index)=>{
   return <Beer key={beer['id']} beer={beer}/>

})

return(
    <div>
        <h1>beerlist</h1>
        <div className='beerList'>
        {beerlist}
        </div>
    </div>
 
)

} 
export default BeerList
