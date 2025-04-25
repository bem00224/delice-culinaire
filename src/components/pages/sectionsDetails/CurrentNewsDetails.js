import React from 'react'
import { useParams } from 'react-router-dom';
import { fakeData } from '../../../data/fakeData';
import Title from '../../reusable-ui/Title';

export default function CurrentNewsDetails() {
    const { slug } = useParams();
    // Trouver l'élément correspondant
    const currentItem = fakeData.CurrentNews.find((item) => item.slug === decodeURIComponent(slug));
    if (!currentItem) { return <p className="not-found">Recette introuvable 🥲.</p>; }
  return (
    <div className="currentnews-details">
        <Title title={currentItem.title}/>
    </div>
  )
}
