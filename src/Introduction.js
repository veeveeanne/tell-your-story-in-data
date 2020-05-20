import React from 'react'

import WordTree from './WordTree'
import Timeline from './Timeline'

const Introduction = props => {
  return (
    <div>
      <h1>Hi there! My name is Vivian Wang</h1>
      <h3>I recently graduated from Launch Academy as a full stack developer</h3>
      <WordTree />
      <h3>I had my first introduction to software development in my previous roles</h3>
      <h3>as a small business owner and a legal project coordinator</h3>
      < Timeline />
    </div>
  )
}

export default Introduction
