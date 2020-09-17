import React from 'react';



const Recipe = ({title,image,calories,healthLabels,ingredients})=>{
    let i=0;
    return(
        <div>
            <h1>
                {title}
            </h1>
            <h6>
              Calories:{calories}</h6>
            <h6> 
            Health-Labels:{healthLabels}
            </h6>
            <img src={image} alt="Chicken" />
             <h5>Ingredients</h5>
            <ul>
                {ingredients.map(ingredient =>(
                    <li key={i++}>
                        {ingredient.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Recipe;