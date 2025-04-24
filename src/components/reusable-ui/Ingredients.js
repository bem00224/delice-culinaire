import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";
import "../../styles/ingredients.css"

export default function Ingredients({recipe}) {
    //state
    const [peopleCount, setPeopleCount] = useState(6) // Valeur par défaut
    const baseCount = 6; // Nombre de personnes de référence
    //comportements
    const handleDecrement = () => {
        if(peopleCount > 1 ) {
          setPeopleCount( prev => prev - 1)
        }
    }
    const handleIncrement = () => {
        setPeopleCount(prev => prev + 1)
    }
    // Calculer les quantités en fonction du nombre de personnes
    const getAdjustedQuantity = (quantity) => {
        return ((quantity * peopleCount ) /baseCount.toFixed(2) )
    }
  return (
    <div className='category-details-ingredient'>
        <h3 className='details-section-title'>Ingrédients</h3>
        <div className='details-section-nbre'>
            <button className='details-section-moin' onClick={handleDecrement}><FaMinus/></button>
            <div className='details-section-personne'>
                <span>{peopleCount}</span>
                <span>personnes</span>
            </div>
            <button className='details-section-plus' onClick={handleIncrement}><FaPlus/></button>
        </div>
        <div className="details-section">
            <ul>
                {
                    recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>
                            {ingredient.name}
                            {ingredient.quantity && ` : ${getAdjustedQuantity(ingredient.quantity)} ${ingredient.unit || ''}`}
                        </li>
                    ) )
                }
            </ul>
        </div>
    </div>
  )
}
