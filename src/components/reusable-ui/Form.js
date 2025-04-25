import React, { useState } from 'react'
import '../../styles/form.css'
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { fakeData } from '../../data/fakeData';
import { toast } from 'react-toastify';

export default function Form() {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const lowerSearch = searchValue.trim().toLowerCase();

        if (!lowerSearch) return;

        let foundRecipe = null;

        // Cherche dans chaque catégorie
        fakeData.Category.some(category => {
            const match = category.recettes?.find(recette =>
                recette.title.toLowerCase().includes(lowerSearch)
            );
            if (match) {
                foundRecipe = { ...match, categoryTitle: category.title };
                return true;
            }
            return false;
        });

        if (foundRecipe) {
            navigate(`/recipe-detail/${foundRecipe.slug}`);

        } else {
            toast.error("Recette introuvable !");
            setSearchValue("")
        }
    };
  return (
    <form className='formulaire' onSubmit={handleSubmit}>
        <div className='formulaire-content'>
            <input 
                type='search' 
                id='search_input' 
                placeholder='Je cherche une recette, un ingrédient...' 
                className='input-search' 
                value={searchValue} 
                onChange={(e) => setSearchValue(e.target.value)}
                aria-label='Recherche de recette'
            />
            <div className='icon-wrapper'>
                <FaSearch className='search-icon' />
            </div>
        </div>
        <div className='btn-search'>
            <button type='submit' className='button-search'>Rechercher</button>
        </div>
    </form>
  )
}
