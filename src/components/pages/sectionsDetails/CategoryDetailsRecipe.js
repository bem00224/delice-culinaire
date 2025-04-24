import React from 'react'
import { useParams } from 'react-router-dom'
import { fakeData } from '../../../data/fakeData'

export default function CategoryDetailsRecipe() {
    const { slug } = useParams()
    //on cherche d'abord la catégory qui contient cette recette
    const category = fakeData.Category.find((cat) => cat.recettes.some(rec => rec.slug === slug))

    if(!category) {
        return <div>Recette non trouvée 🥲</div>
    }
    

    const recipe = category.recettes.find((rec) => rec.slug === slug)
    console.log('recipe', recipe);
    if(!recipe) {
        return <div>Détails de la recette introuvables ❌</div>
    }
    
    
  return (
    <div className="currentnews-details">
        <div>
            <div className='content-titleBar'>
                <h2 className="details-title">{recipe.title}</h2>
            </div>
        </div>
    </div>
  )
}
