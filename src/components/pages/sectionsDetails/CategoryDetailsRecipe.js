import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { fakeData } from '../../../data/fakeData'
import '../../../styles/categoryDetailsRecipe.css'
import { FaArrowLeft } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import { PiCookingPot } from 'react-icons/pi'
import { CiHeart } from 'react-icons/ci'
import { FaMinus, FaPlus } from "react-icons/fa";

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
        <div className='category-details-bottom'>
            <div className='category-details-recipe-bottom'>
                <div className='category-details-recipe-bottom-image'>
                    <img src={recipe.imageSource} alt={recipe.title} className="details-image" />
                </div>
                <div className="details-info">
                    <p className='details-info-global'>
                        <IoMdTime className='details-info-icon' />
                        <span className='details-info-text'> Préparation : {recipe.preparationTime} min </span>
                    </p>
                    <p className='details-info-global'>
                        <PiCookingPot className='details-info-icon'/> 
                        <span className='details-info-text'>Cuisson : {recipe.cookingTime} min </span>
                    </p>
                </div>
            </div>
            <div className='category-details-bottom-description'>
                <div className='carnet-details-btn-content'>
                    <button className='carnet-details-btn'>
                        <CiHeart className='icon-heart'/> Mon carnet
                    </button>
                </div>
                <div className='category-details-section'>
                    <div className='category-details-ingredient'>
                        <h3 className='details-section-title'>Ingrédients</h3>
                        <div className='details-section-nbre'>
                            <button className='details-section-moin'><FaMinus/></button>
                            <div className='details-section-personne'><span>personnes</span></div>
                            <button className='details-section-plus'><FaPlus/></button>
                        </div>
                        <div className="details-section">
                            <ul>
                                {
                                    recipe.ingredients.map((ingredient, index) => (
                                        <li key={index}>
                                            {ingredient.name}
                                            {ingredient.quantity}
                                        </li>
                                    ) )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='category-details-instructions'>
                        <h3 className='details-section-title'>Instructions</h3>
                        <div className="details-section">
                            <ol>
                                {recipe.instructions.map((step, index)=> (
                                    <li key={index}>{step}</li>
                                )) }
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
