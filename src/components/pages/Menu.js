import React from 'react'
import Cards from '../reusable-ui/Cards'
import '../../styles/menu.css'

export default function Menu({ title,data , basePath='', withHeart}) {
  return (
    <div className='menu'>
        <div className='menu-title'>
            <h3 className="menu-title-global">{title}</h3>
        </div>
        <div className='menu-container'>
            <div className='menu-container-detail'>
                {data.map(({imageSource, title, slug}) => (
                    <Cards 
                        key={slug}
                        to={`${basePath}/${slug}`}
                        title={title}
                        image={imageSource}
                        withHeart={withHeart}
                    />
                ) )}
            </div>
        </div>
    </div>
  )
}
