import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../styles/mesRecettes.css'

export default function MesRecettes() {
    const [savedRecipes, setSavedRecipes] = useState([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('savedRecipes')) || [];
        setSavedRecipes(saved)
      }, [])
  return (
    <div className='recette-global'>
        <h2>{savedRecipes.length === 0 ? "" : "Mes Recettes"}</h2>
        <div className="recettes-container">
            {
                savedRecipes.length === 0 ? (
                    <div className='recettes-container-detail fade-in-up'>
                        <div className="recettes-container-top">
                            <p>Vous n'avez aucune recette enregistrée.</p>
                            <p>Naviguez à travers le site et enregistrez vos recettes préférées! 😊</p>
                            <Link to={"/"}>Retourner sur la page d'accueil</Link>
                        </div>
                    </div>
                ) : (
                    savedRecipes.map((recipe) => (
                        <div className="recette-card" key={recipe.id}>
                            <div className='recette-card-description'>
                                <Link to={`/${recipe.basePath}/${recipe.slug}`} className='description-link'>
                                    <div className='recette-card-description-image'>
                                        <img src={recipe.imageSource} alt={recipe.title} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ) )
                )
            }
        </div>
    </div>
  )
}
