import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../styles/mesRecettes.css'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';

export default function MesRecettes() {
    const [savedRecipes, setSavedRecipes] = useState([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('savedRecipes')) || [];
        setSavedRecipes(saved)
      }, [])

      const handleDelete = (slug) => {
        const filtered = savedRecipes.filter(recipe => recipe.slug !== slug)
        localStorage.setItem('savedRecipes', JSON.stringify(filtered))
        setSavedRecipes(filtered)
        toast.success("Recette supprimée !")
    }
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
                        <div className="recette-card" key={recipe.slug}>
                            <div className='recette-card-description'>
                                <Link to={`/${recipe.basePath}/${recipe.slug}`} className='description-link'>
                                    <div className='recette-card-description-image'>
                                        <img src={recipe.imageSource} alt={recipe.title} loading="lazy"/>
                                    </div>
                                </Link>
                                <div className='recette-card-detail'>
                                    <h3>{recipe.title}</h3>
                                    <button className='recette-card-detail-text' onClick={() => handleDelete(recipe.slug)}>
                                        <RiDeleteBin6Line className='details-link' />
                                        <span >Supprimer</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) )
                )
            }
        </div>
    </div>
  )
}
