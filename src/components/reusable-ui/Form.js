import React, { useState } from 'react'
import '../../styles/form.css'

export default function Form() {
    const [searchValue, setSearchValue] = useState('');
  return (
    <form className='formulaire'>
        <div className='formulaire-content'>
            <input 
                type='search' 
                id='search_input' 
                placeholder='Je cherche une recette, un ingrédient...' 
                className='input-search' 
                value={searchValue} 
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </div>
        <div className='btn-search'></div>
    </form>
  )
}
