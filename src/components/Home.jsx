import React from 'react'
import HeroSlider from './HeroSlider'
import Overview from './Overview'
import Projects from './Project'

const Home = () => {
  return (
    <div>
        <HeroSlider/>
        <Overview/>
        <Projects/>
    </div>
  )
}

export default Home