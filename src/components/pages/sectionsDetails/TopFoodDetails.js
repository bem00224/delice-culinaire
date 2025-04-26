import React from 'react'
import { useParams } from 'react-router-dom';
import RecipeDetailsLayout from '../../reusable-ui/RecipeDetailsLayout';
import { fakeData } from '../../../data/fakeData';

export default function TopFoodDetails() {
    const { slug } = useParams();
    // Trouver l'élément correspondant
    const topFood = fakeData.TopFood.find((item) => item.slug === decodeURIComponent(slug));
  return (
    <RecipeDetailsLayout recipe={topFood} basePath="top-food" />
  )
}
