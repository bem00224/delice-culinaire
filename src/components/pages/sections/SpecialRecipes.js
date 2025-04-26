import React from 'react'
import Menu from '../Menu'
import { fakeData } from '../../../data/fakeData'

export default function SpecialRecipes() {
  return (
    <Menu title="Recettes Anti-Gaspillage" data={fakeData.SpecialRecipes} basePath='special-recipes' />
  )
}
