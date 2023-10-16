'use client'
import React from 'react'
import Canvas from './Canvas/Canvas'
import DragableBox from './Dragable'
import ParentComponent from './Parent'

const MainPage = () => {
  return (
    <div>
        <ParentComponent />
        <Canvas className="canvas"/>
        <DragableBox />
    </div>
  )
}

export default MainPage
