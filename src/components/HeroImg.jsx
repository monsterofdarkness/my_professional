import './HeroImgStyle.css'
import IntroImg from '../assets/img/intro-bg.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mark'>
            <img className='intro-img' src={IntroImg} alt="IntroImg" />
        </div>
        <div className='content'>
            <p>Welcome to my professional!</p>
            <h1>Front-end Devenloper.</h1>
            <div>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg