import React from 'react'
import '../../../styles/category.css'
import { fakeData } from '../../../data/fakeData'
import { Link } from 'react-router-dom'

export default function Category() {
  let category = fakeData.Category;
  
  return (
    <div className='category'>
      {
        category.map(({slug,title,imageSource}) => (
          <Link key={slug} to={`/category/${encodeURIComponent(slug)}`}>
            <div className='category-container'>
              <div className='category-detail'>
                <img className='category-image' src={imageSource} alt={title} loading="lazy"/>
                <h2 className='category-title'>{title}</h2>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}
