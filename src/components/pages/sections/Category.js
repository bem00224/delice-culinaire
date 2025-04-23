import React, { useState } from 'react'
import '../../../styles/category.css'
import { fakeData } from '../../../data/fakeData'
import { Link } from 'react-router-dom'

export default function Category() {
  let category = fakeData.Category;
  console.log(category)
  return (
    <div className='category'>
      {
        category.map(({id,slug,title,imageSource}) => (
          <Link key={id} to={`/category/${encodeURIComponent(slug)}`}>
            <div className='category-container'>
              <div className='category-detail'>
                <img className='category-image' src={imageSource} alt={title} />
                <h2 className='category-title'>{title}</h2>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}
