import React, { useEffect, useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import '../../styles/carnetButton.css';
import { toast } from 'react-toastify';
import { useSavedRecipes } from '../../context/SavedRecipesContext';

export default function CarnetButton({ recipe }) {
  const { savedRecipes, saveRecipe } = useSavedRecipes();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (recipe && recipe.slug) {
      const exists = savedRecipes.some(item => item.slug === recipe.slug);
      setIsSaved(exists);
    }
  }, [recipe, savedRecipes]);

  const handleSave = () => {
    if (!isSaved) {
      saveRecipe({
        slug: recipe.slug,
        title: recipe.title,
        imageSource: recipe.imageSource,
        basePath: recipe.basePath
      });
      toast.success("Recette enregistrée !");
    } else {
      toast.info("Recette déjà enregistrée !");
    }
  };

  return (
    <div className="carnet-details-btn-content">
      <button className="carnet-details-btn" onClick={handleSave} disabled={isSaved}>
        <CiHeart className="icon-heart" />
        {isSaved ? "Déjà sauvegardée" : "Mon carnet"}
      </button>
    </div>
  );
}
