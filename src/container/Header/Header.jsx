import React from 'react'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Header.css'

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Curated cuisine, unforgettable evenings' />
      <h1 className='app__header-h1'>Fine Dining Crafted for Memorable Nights</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        Experience seasonal ingredients, signature cocktails, and warm
        hospitality in a refined atmosphere designed for celebrations, date
        nights, and private events.
      </p>
      <a href='#menu' className='custom__button'>
        Explore Menu
      </a>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img' />
    </div>
  </div>
)

export default Header
