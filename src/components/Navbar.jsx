import './NavbarStyle.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Header'>
        <Link to='/'>Portfolio</Link>

        <ul>
            <li><Link to = '/'>Home</Link></li>
            <li><Link to = '/project'>Project</Link></li>
            <li><Link to = '/about'>About</Link></li>
            <li><Link to = '/contact'>Contact</Link></li>
            <li><Link to = '/more'>More</Link></li>

        </ul>
    </div>
  )
}

export default Navbar