import React from 'react'
import { IoMdTime } from 'react-icons/io'
import { PiCookingPot } from 'react-icons/pi'
import '../../styles/image.css'

export default function Image({ imageSource, title, preparationTime, cookingTime }) {
  return (
    <div className='category-details-recipe-bottom'>
        <div className='category-details-recipe-bottom-image'>
            <img src={imageSource} alt={title} className="details-image" loading="lazy"/>
        </div>
        <div className="details-info">
            <p className='details-info-global'>
                <IoMdTime className='details-info-icon' />
                <span className='details-info-text'> Préparation : {preparationTime} min </span>
            </p>
            <p className='details-info-global'>
                <PiCookingPot className='details-info-icon'/> 
                <span className='details-info-text'>Cuisson : {cookingTime} min </span>
            </p>
        </div>
    </div>
  )
}
