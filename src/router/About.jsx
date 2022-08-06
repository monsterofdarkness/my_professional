import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>      
    <Navbar></Navbar>
    <HeroImg2 heading="ABOUT" text="I'm a friendly Front-End Developer."></HeroImg2>
    <AboutContent></AboutContent>
    <Footer></Footer>
    </div>
  )
}

export default About