import React, { useEffect, useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import '../../styles/carnetButton.css'
import { toast } from 'react-toastify';

export default function CarnetButton({ recipe }) {
  const [ isSaved, setIsSaved] = useState(false)

  //comportements
  useEffect(() => {
    if (!recipe || !recipe.slug) return;

    const saved = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    const exists = saved.find(item => item.slug === recipe.slug);
    if (exists) {
        setIsSaved(true);
    }
}, [recipe]);

const handleSave = () => {
    if (!recipe || !recipe.slug) {
        toast.error("Impossible de sauvegarder cette recette.");
        return;
    }

    const saved = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    const exists = saved.find(item => item.slug === recipe.slug);

    if (exists) {
        toast.info("Cette recette est déjà sauvegardée !");
    } else {
        const updated = [...saved, recipe];
        localStorage.setItem("savedRecipes", JSON.stringify(updated));
        setIsSaved(true);
        toast.success("Recette sauvegardée !");
    }
};
//affichage
  return (
    <div className='carnet-details-btn-content'>
        <button className='carnet-details-btn' onClick={handleSave}>
            <CiHeart className='icon-heart'/> 
            { isSaved ? "Sauvegardée":"Mon carnet"}
        </button>
    </div>
  )
}
