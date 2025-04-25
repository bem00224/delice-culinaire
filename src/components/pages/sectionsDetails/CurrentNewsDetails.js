import React from 'react'
import { useParams } from 'react-router-dom';
import { fakeData } from '../../../data/fakeData';
import Title from '../../reusable-ui/Title';
import Image from '../../reusable-ui/Image';
import CarnetButton from '../../reusable-ui/CarnetButton';
import Ingredients from '../../reusable-ui/Ingredients';
import Instructions from '../../reusable-ui/Instructions';

export default function CurrentNewsDetails() {
    const { slug } = useParams();
    // Trouver l'élément correspondant
    const currentItem = fakeData.CurrentNews.find((item) => item.slug === decodeURIComponent(slug));
    if (!currentItem) { return <p className="not-found">Recette introuvable 🥲.</p>; }
  return (
    <div className="category-details-recipe">
        <Title title={currentItem.title}/>
        <div className='category-details-bottom'>
            <Image imageSource={currentItem.imageSource} title={currentItem.title} preparationTime={currentItem.preparationTime} cookingTime={currentItem.cookingTime} />
            <div className='category-details-bottom-description'>
                <CarnetButton recipe={{...currentItem, basePath: 'current-news'}}/>
                <div className='category-details-section'>
                    <Ingredients recipe={currentItem}/>
                    <Instructions recipe={currentItem}/>
                </div>
            </div>
        </div>
    </div>
  )
}
