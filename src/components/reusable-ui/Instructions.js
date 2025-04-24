import React from 'react'

export default function Instructions({recipe}) {
  return (
    <div className='category-details-instructions'>
        <h3 className='details-section-title'>Instructions</h3>
        <div className="details-section">
            <ol>
                {recipe.instructions.map((step, index)=> (
                    <li key={index}>{step}</li>
                )) }
            </ol>
        </div>
    </div>
  )
}
