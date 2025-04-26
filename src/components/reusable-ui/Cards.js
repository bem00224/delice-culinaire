import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/cards.css';
import { CiHeart } from 'react-icons/ci';
import { toast } from 'react-toastify';
import { useSavedRecipes } from '../../context/SavedRecipesContext';

export default function Cards({ to, image, title, basePath, slug, withHeart = false }) {
  const { saveRecipe, savedRecipes } = useSavedRecipes();
  const [isHovered, setIsHovered] = useState(false);

  const isSaved = savedRecipes.some(recipe => recipe.slug === slug);

  const handleSaveRecipe = (e) => {
    e.preventDefault();

    if (!isSaved) {
      saveRecipe({ slug, title, imageSource: image, basePath });
      toast.success("Recette enregistrée !");
    } else {
      toast.info("Recette déjà enregistrée !");
    }
  };

  return (
    <Link
      to={to}
      className="card-link"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-container">
        {withHeart && isHovered && (
          <>
            {!isSaved ? (
              <button className="heart-container" onClick={handleSaveRecipe}>
                <CiHeart className="heart-icon" />
              </button>
            ) : (
              <div className="heart-container saved">
                <CiHeart className="heart-icon saved" />
              </div>
            )}
          </>
        )}
        {image && <img src={image} alt={title} className="card-img" />}
        <h3 className="card-title">{title}</h3>
      </div>
    </Link>
  );
}
