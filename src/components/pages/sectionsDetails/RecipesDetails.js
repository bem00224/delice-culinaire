import React from 'react'
import RecipeDetailsLayout from '../../reusable-ui/RecipeDetailsLayout'
import { useParams } from 'react-router-dom';
import { fakeData } from '../../../data/fakeData';

export default function RecipesDetails() {
    const { slug } = useParams();

    // Trouver l'élément correspondant
      const recipes = fakeData.Recipes.find((item) => item.slug === decodeURIComponent(slug));
  return (
    <RecipeDetailsLayout recipe={recipes} basePath="recipes"/>
  )
}
