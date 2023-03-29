import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'></div>
      <div className='buttons'>
      <NavLink to='/' activeclassname='active' className="home" style={{color:"black"}}>Home</NavLink>
      <NavLink to='/form' activeclassname='active' className="form" style={{color:"black"}}>form</NavLink>
      <NavLink to='/about' activeclassname='active' className="aboutus" style={{color:"black"}}>About us</NavLink>
      <NavLink to='/contact' activeclassname='active' className="contactus" style={{color:"black"}}>Contact Us</NavLink>

      </div>
      <div className="robot">
      <div className='help'>
      </div>
      <p className='help-tag'>Need Help!!</p>
      </div>
    </div>
  )
}

export default Header
