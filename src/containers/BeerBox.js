import React from "react";
import BeerList from "../components/BeerList";
import UserBeers from "../components/UserBeers";


const BeerBox = ()=>{

    return (
        <div>
          <h1>brewdog</h1>
          <BeerList/>
          <UserBeers/>
           
        </div>
    )

}

export default BeerBox

