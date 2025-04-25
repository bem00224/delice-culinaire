import React from 'react'
import Title from './Title'
import Image from './Image'
import CarnetButton from './CarnetButton'
import Ingredients from './Ingredients'
import Instructions from './Instructions'

export default function RecipeDetailsLayout({recipe,basePath}) {
    if(!recipe) {
        return <div>Détails de la recette introuvables 🥲</div>
    }
  return (
    <div className="category-details-recipe">
        <Title title={recipe.title}/>
        <div className='category-details-bottom'>
            <Image imageSource={recipe.imageSource} title={recipe.title} cookingTime={recipe.cookingTime} preparationTime={recipe.preparationTime} />
            <div className='category-details-bottom-description'>
                <CarnetButton  recipe={{...recipe, basePath}}/>
                <div className='category-details-section'>
                    <Ingredients recipe={recipe}/>
                    <Instructions recipe={recipe}/>
                </div>
            </div>
        </div>
    </div>
  )
}
