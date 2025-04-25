import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/cards.css'

export default function Cards({to, image, title}) {
  return (
    <>
        <Link to={to} className='card-link'>
            <div className='card-container'>
                {image && <img src={image} alt={title} className='card-img' />}
                <h3 className='card-title'>{title}</h3>
            </div>
        </Link>
    </>
  )
}
