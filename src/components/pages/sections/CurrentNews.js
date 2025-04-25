import React from 'react'
import Menu from '../Menu'
import { fakeData } from '../../../data/fakeData'

export default function CurrentNews() {
  return (
    <Menu title="En ce moment" data={fakeData.CurrentNews} basePath="/current-news"/>
  )
}
