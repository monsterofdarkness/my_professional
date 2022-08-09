import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
    <Navbar></Navbar>
    <HeroImg2 heading="CONTACT" text="Let's have a chat."></HeroImg2>
    <Form></Form>
    <Footer></Footer>
    </div>
    
  )
}

export default Contact