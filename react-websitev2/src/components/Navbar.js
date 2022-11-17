import React, {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import {IoLogoGameControllerB} from 'react-icons/io'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Button } from './Button'
import { IconContext } from 'react-icons/lib'

function Navbar() {
    // this checks to see if user has click the links
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    // checks if user has clicked the menu
    const closeMenu = () => setClick(false)

    const showButton = () =>{
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])
    window.addEventListener('resize', showButton)

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    RetroGames
                    <IoLogoGameControllerB className="navbar-icon" 
                    onClick={closeMenu}
                    />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <NavLink to='/' className={({ isActive }) => 'nav-links' + (isActive ? " activated" : "")}>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/games' className={({ isActive }) => 'nav-links' + (isActive ? " activated" : "")}>
                            Games
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/contact' className={({ isActive }) => 'nav-links' + (isActive ? " activated" : "")}>
                            Contact
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about' className={({ isActive }) => 'nav-links' + (isActive ? " activated" : "")}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar