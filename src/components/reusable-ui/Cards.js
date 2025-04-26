import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/cards.css'
import { CiHeart } from 'react-icons/ci';
import { toast } from 'react-toastify';

export default function Cards({to, image, title, withHeart, basePath, slug}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleSaveRecipe = (e) => {
    e.preventDefault(); // ⚠️ Pour éviter que le clic redirige
    const saved = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    const alreadyExists = saved.some(recipe => recipe.slug === slug);
    if (!alreadyExists) {
      const newRecipe = { slug, title, imageSource: image, basePath };
      localStorage.setItem("savedRecipes", JSON.stringify([...saved, newRecipe]));
      toast.success("Recette enregistrée !");
    } else {
      toast.info("Recette déjà enregistrée !");
    }
  };

  return (
    <>
      <Link to={to} className='card-link' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className='card-container'>
            { withHeart && isHovered && (
              <button className='heart-container' onClick={handleSaveRecipe}> <CiHeart className='heart-icon'/> </button>
            ) }
              {image && <img src={image} alt={title} className='card-img' />}
              <h3 className='card-title'>{title}</h3>
          </div>
      </Link>
    </>
  )
}
