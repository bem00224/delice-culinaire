import React, { createContext, useState, useEffect, useContext } from 'react';

const SavedRecipesContext = createContext();

export const SavedRecipesProvider = ({ children }) => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  // Charger depuis localStorage au démarrage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    setSavedRecipes(saved);
  }, []);

  // Fonction pour sauvegarder une recette
  const saveRecipe = (recipe) => {
    const alreadyExists = savedRecipes.some(r => r.slug === recipe.slug);
    if (!alreadyExists) {
      const updatedRecipes = [...savedRecipes, recipe];
      setSavedRecipes(updatedRecipes);
      localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
    }
  };

  // Fonction pour supprimer une recette
  const removeRecipe = (slug) => {
    const updatedRecipes = savedRecipes.filter(recipe => recipe.slug !== slug);
    setSavedRecipes(updatedRecipes);
    localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
  };

  return (
    <SavedRecipesContext.Provider value={{ savedRecipes, saveRecipe, removeRecipe }}>
      {children}
    </SavedRecipesContext.Provider>
  );
};

export const useSavedRecipes = () => useContext(SavedRecipesContext);
