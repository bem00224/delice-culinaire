import React from 'react'
import Menu from '../Menu'
import { fakeData } from '../../../data/fakeData'

export default function TopFood() {
  return (
    <Menu title="Top recettes" data={fakeData.TopFood} basePath='/top-food'/>
  )
}
