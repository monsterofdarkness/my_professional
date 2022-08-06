import "./FooterStyle.css"
import {FaFacebook, FaGithub, FaHome, FaInstagram, FaMailBulk, FaPhone} from "react-icons/fa"
import React from 'react'

function footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}></FaHome>
                    <div>
                        <p>District 3,</p>
                        <p>Ho Chi Minh city.</p>
                    </div>
                </div>

                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color : "#fff", marginRight: "2rem"}}></FaPhone>
                    +84968956545
                    </h4>
                </div>

                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color : "#fff", marginRight: "2rem"}}></FaMailBulk>
                    ninhvanphongfp@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>About me</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod dolore quibusdam voluptates natus perferendis, praesentium distinctio quos fugiat dolor voluptate reprehenderit veniam minima ad maiores iusto, voluptatem ipsa dicta?</p>
                <div className="social">
                <FaFacebook size={20} style={{color : "#fff", marginRight: "2rem"}}></FaFacebook>
                <FaInstagram size={20} style={{color : "#fff", marginRight: "2rem"}}></FaInstagram>
                <FaGithub size={20} style={{color : "#fff", marginRight: "2rem"}}></FaGithub>
                </div>
                </div>
        </div>

    </div>
  )
}

export default footer