import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import '../../styles/title.css'

export default function Title({ title }) {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1); // -1 veut dire "retour en arrière"
  };
  return (
    <div className='category-details-recipe-content'>
        <div className='content-titleBar'>
            <h2 className="details-title">{title}</h2>
        </div>
        <button onClick={handleGoBack} className='arrow-links'>
            <FaArrowLeft className='arrow-icon' />
        </button>
    </div>
  )
}
