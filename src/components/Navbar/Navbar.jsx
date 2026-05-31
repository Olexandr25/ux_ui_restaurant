import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images'
import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='app logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <a href='#home'>Home</a>
        </li>
        <li className='p__opensans'>
          <a href='#about'>About</a>
        </li>
        <li className='p__opensans'>
          <a href='#menu'>Menu</a>
        </li>
        <li className='p__opensans'>
          <a href='#awards'>Awards</a>
        </li>
        <li className='p__opensans'>
          <a href='#testimonials'>Reviews</a>
        </li>
        <li className='p__opensans'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>
          Log In / Register
        </a>
        <div />
        <a href='#contact' className='p__opensans'>
          Book Table
        </a>
      </div>

      <div className='app__navbar-smallscreen'>
        <button
          type='button'
          className='app__navbar-menu-button'
          aria-label='Open menu'
          aria-expanded={toggleMenu}
          aria-controls='mobile-nav-links'
          onClick={() => setToggleMenu(true)}>
          <GiHamburgerMenu color='#fff' fontSize={27} />
        </button>

        {toggleMenu ? (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <button
              type='button'
              className='app__navbar-menu-button overlay__close'
              aria-label='Close menu'
              onClick={() => setToggleMenu(false)}>
              <MdOutlineRestaurantMenu fontSize={27} className='overlay__close-icon' />
            </button>

            <ul className='app__navbar-smallscreen_links' id='mobile-nav-links'>
              <li className='p__opensans'>
                <a href='#home' onClick={() => setToggleMenu(false)}>Home</a>
              </li>
              <li className='p__opensans'>
                <a href='#about' onClick={() => setToggleMenu(false)}>About</a>
              </li>
              <li className='p__opensans'>
                <a href='#menu' onClick={() => setToggleMenu(false)}>Menu</a>
              </li>
              <li className='p__opensans'>
                <a href='#awards' onClick={() => setToggleMenu(false)}>Awards</a>
              </li>
              <li className='p__opensans'>
                <a href='#testimonials' onClick={() => setToggleMenu(false)}>Reviews</a>
              </li>
              <li className='p__opensans'>
                <a href='#contact' onClick={() => setToggleMenu(false)}>Contact</a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  )
}

export default Navbar
