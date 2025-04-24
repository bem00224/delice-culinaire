import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { fakeData } from '../../../data/fakeData'
import '../../../styles/categoryDetailsRecipe.css'
import { FaArrowLeft } from 'react-icons/fa'

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
        <div className='category-details-recipe-content'>
            <div className='content-titleBar'>
                <h2 className="details-title">{recipe.title}</h2>
            </div>
            <Link to={"/"} className='arrow-link'>
                <FaArrowLeft className='arrow-icon' />
            </Link>
        </div>
        <div className='category-details-recipe-bottom'>
            <div className='category-details-recipe-bottom-image'>
                <img src={recipe.imageSource} alt={recipe.title} className="details-image" />
            </div>
        </div>
    </div>
  )
}
