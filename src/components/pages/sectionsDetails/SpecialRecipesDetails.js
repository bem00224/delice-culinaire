import React from 'react'
import { fakeData } from '../../../data/fakeData';
import { useParams } from 'react-router-dom';
import RecipeDetailsLayout from '../../reusable-ui/RecipeDetailsLayout';

export default function SpecialRecipesDetails() {
    const { slug } = useParams();

  // Trouver l'élément correspondant
  const specialRecipes = fakeData.SpecialRecipes.find((item) => item.slug === decodeURIComponent(slug));
  return (
    <RecipeDetailsLayout recipe={specialRecipes} basePath="special-recipes" />
  )
}
