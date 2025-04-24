import React from 'react'
import { useParams } from 'react-router-dom'
import { fakeData } from '../../../data/fakeData'
import '../../../styles/categoryDetailsRecipe.css'
import Title from '../../reusable-ui/Title'
import Image from '../../reusable-ui/Image'
import CarnetButton from '../../reusable-ui/CarnetButton'
import Ingredients from '../../reusable-ui/Ingredients';
import Instructions from '../../reusable-ui/Instructions';

export default function CategoryDetailsRecipe() {
    const { slug } = useParams()
    //on cherche d'abord la catégory qui contient cette recette
    const category = fakeData.Category.find((cat) => cat.recettes.some(rec => rec.slug === slug))

    if(!category) {
        return <div>Recette non trouvée 🥲</div>
    }
    

    const recipe = category.recettes.find((rec) => rec.slug === slug)
    if(!recipe) {
        return <div>Détails de la recette introuvables ❌</div>
    }
    
    
  return (
    <div className="category-details-recipe">
        <Title title={recipe.title}/>
        <div className='category-details-bottom'>
            <Image imageSource={recipe.imageSource} title={recipe.title} cookingTime={recipe.cookingTime} preparationTime={recipe.preparationTime} />
            <div className='category-details-bottom-description'>
                <CarnetButton  />
                <div className='category-details-section'>
                    <Ingredients recipe={recipe}/>
                    <Instructions recipe={recipe}/>
                </div>
            </div>
        </div>
    </div>
  )
}
