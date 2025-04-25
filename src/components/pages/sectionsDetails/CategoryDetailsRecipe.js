import React from 'react'
import { useParams } from 'react-router-dom'
import { fakeData } from '../../../data/fakeData'
import '../../../styles/categoryDetailsRecipe.css'
import RecipeDetailsLayout from '../../reusable-ui/RecipeDetailsLayout'

export default function CategoryDetailsRecipe() {
    const { slug } = useParams()
    //on cherche d'abord la catégory qui contient cette recette
    const category = fakeData.Category.find((cat) => cat.recettes.some(rec => rec.slug === slug))

    if(!category) {
        return <div className="not-found">Category non trouvée 🥲</div>
    }
    

    const recipe = category.recettes.find((rec) => rec.slug === slug)
    if(!recipe) {
        return <div>Détails de la recette introuvables ❌</div>
    }
    
    
  return (
    <RecipeDetailsLayout recipe={recipe}  basePath="recipe-detail"/>
  )
}
