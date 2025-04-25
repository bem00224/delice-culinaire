import React from 'react'
import { useParams } from 'react-router-dom';
import { fakeData } from '../../../data/fakeData';
import RecipeDetailsLayout from '../../reusable-ui/RecipeDetailsLayout';

export default function CurrentNewsDetails() {
    const { slug } = useParams();
    // Trouver l'élément correspondant
    const currentItem = fakeData.CurrentNews.find((item) => item.slug === decodeURIComponent(slug));
  return (
    <RecipeDetailsLayout recipe={currentItem} basePath="current-news"/>
  )
}
