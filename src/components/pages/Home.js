import React from 'react'
import Category from './sections/Category'
import '../../styles/home.css'
import Banner from './sections/Banner'
import CurrentNews from './sections/CurrentNews'
import TopFood from './sections/TopFood'
import Recipes from './sections/Recipes'

export default function Home() {
  return (
    <div className='home'>
        <Banner/>
        <Category/>
        <CurrentNews/>
        <TopFood/>
        <Recipes/>
    </div>
  )
}
