import React from 'react'
import HeroSlider from './HeroSlider'
import Overview from './Overview'
import Projects from './Project'
import HeroSection from "./HeroSection";
import Stats from './Stats';
import ConnectSection from './ConnectSection';
const Home = () => {
  return (
    <div>
        {/* <HeroSlider/> */}
        <HeroSection/>
        <Overview/>
        <Stats/>
        <HeroSlider/>
        <Projects/>
        <ConnectSection/>
    </div>
  )
}

export default Home