import "./FormStyle.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <h1>CONTACT ME!</h1>
            <label>Your Name</label>
            <input type="text"></input>

            <label>Email</label>
            <input type="email"></input>

            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here!"></textarea>

            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form