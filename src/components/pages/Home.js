import React from 'react'
import Category from './sections/Category'
import '../../styles/home.css'
import Banner from './sections/Banner'

export default function Home() {
  return (
    <div className='home'>
        <Banner/>
        <Category/>
    </div>
  )
}
