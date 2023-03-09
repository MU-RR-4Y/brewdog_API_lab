import React from "react";

const Ingredients = ({beer})=>{

const malt = Object.values(beer.ingredients['malt']).map((ingredients)=>{
    return ingredients.name
  
})
const hops = Object.values(beer.ingredients['hops']).map((ingredients)=>{
    return ingredients.name
})
const yeast = beer.ingredients["yeast"]
let ingredientList = malt.concat(hops, yeast)
const ingredientSet= new Set(ingredientList)
const IngredientArray = Array.from(ingredientSet)

const finalIngredientArray = IngredientArray.map((ingredient)=>{
    return <li>{ingredient}</li>
})





    return (
        <div>
            {finalIngredientArray}
        </div>
    )
}

export default Ingredients