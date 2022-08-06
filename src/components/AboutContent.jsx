import "./AboutContentStyle.css"
import React from 'react'
import { Link } from 'react-router-dom'

import React1 from "../assets/img/react1.jpg"
import React2 from "../assets/img/react2.webp"


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>WHO AM I?</h1>
            <p>I'm a react front-end devenloper. I create responsive secure websites for my clients</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img className="img" src={React1} alt="true"></img>
                </div>

                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent