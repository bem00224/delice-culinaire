import React from 'react'
import { useParams } from 'react-router-dom';
import { fakeData } from '../../../data/fakeData';
import RecipeDetailsLayout from '../../reusable-ui/RecipeDetailsLayout';

export default function NewsDetails() {
    const { slug } = useParams();
    // Trouver l'élément correspondant
    const news = fakeData.News.find((item) => item.slug === decodeURIComponent(slug));
  return (
    <RecipeDetailsLayout recipe={news} basePath="news" />
  )
}
