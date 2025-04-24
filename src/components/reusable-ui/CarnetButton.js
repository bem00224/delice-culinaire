import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import '../../styles/carnetButton.css'

export default function CarnetButton() {
  const [ isSaved, setIsSaved] = useState(false)
  return (
    <div className='carnet-details-btn-content'>
        <button className='carnet-details-btn'>
            <CiHeart className='icon-heart'/> 
            { isSaved ? "Sauvegardée":"Mon carnet"}
        </button>
    </div>
  )
}
