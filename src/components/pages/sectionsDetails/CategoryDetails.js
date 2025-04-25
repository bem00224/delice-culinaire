import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { fakeData } from '../../../data/fakeData'
import '../../../styles/categoryDetails.css'

export default function CategoryDetails() {
    const { slug } = useParams()

    const category = fakeData.Category.find(cat => cat.slug === slug )

    if(!category) {
        return <div className='not-found'>Catégorie introuvable 😢</div>
    }

    const recettes = category.recettes || [];
  
  return (
    <div className="category-details">
        <div className='category-description'>
            <h2 className="category-details-title">Recettes : {category.title} </h2>
            <p className="category-details-count">{recettes.length} recette(s) trouvée(s) </p>
        </div>
        <div className="recette-list">
            {recettes.length===0 ? ( <p>Pas de recette disponible pour cette categorie.</p> ) : (
                recettes.map(({slug,title,imageSource}) => (
                    <div key={slug} className="recette-carde">
                        <Link to={`/recipe-detail/${encodeURIComponent(slug)}`}>
                            <div className='recette-image-content'>
                                <img className="recette-image" src={imageSource} alt={title} loading="lazy" />
                            </div>
                        </Link>
                        <h3 className="recette-title">{title}</h3>
                    </div>
                ) )
            ) }
        </div>
    </div>
  )
}
