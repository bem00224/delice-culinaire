import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import '../../styles/title.css'

export default function Title({ title }) {
  return (
    <div className='category-details-recipe-content'>
        <div className='content-titleBar'>
            <h2 className="details-title">{title}</h2>
        </div>
        <Link to={"/"} className='arrow-links'>
            <FaArrowLeft className='arrow-icon' />
        </Link>
    </div>
  )
}
