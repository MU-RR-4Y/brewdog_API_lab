import React from "react";
import BeerList from "../components/BeerList";
import Dropdown from "../components/Dropdown";
import UserBeers from "../components/UserBeers";
import { useEffect, useState } from "react";


const BeerBox = ()=>{

const [beers,setBeers] = useState([])

useEffect(()=>{
    getBeers();
},[])

const getBeers = function (){
    const request = fetch('https://api.punkapi.com/v2/beers')
    .then(response=>response.json())
    .then (data => setBeers(data))
      
}



    return (
        <div>
          <h1>brewdog</h1>
          <BeerList beers ={beers}/>
          <UserBeers/>
          <Dropdown/>
           
        </div>
    )

}

export default BeerBox

