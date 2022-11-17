import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import {IoLogoGameControllerB} from 'react-icons/io'

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>ABOUT</h2>
            <Link to='/about'>How it started</Link>
            <Link to='/about'>Team</Link>
            <Link to='/about'>Results</Link>
          </div>
          <div class='footer-link-items'>
            <h2>CONTACT</h2>
            <Link to='/contact'>Email</Link>
            <Link to='/contact'>Support</Link>
            <Link to='/contact'>777-777-7777</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>LEGAL</h2>
            <Link>Terms & Conditions</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms of use</Link>
          </div>
        </div>
      </div>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              RetroGames
              <IoLogoGameControllerB className="navbar-icon" />
            </Link>
          </div>
          <small class='website-rights'>RetroGames © 2022</small>
        </div>
    </div>
  )
}

export default Footer