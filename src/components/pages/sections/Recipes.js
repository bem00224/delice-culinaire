import React from 'react'
import Menu from '../Menu'
import { fakeData } from '../../../data/fakeData'

export default function Recipes() {
  return (
    <Menu title="Recettes" data={fakeData.Recipes} basePath='/recipes'/>
  )
}
