import React from 'react'

import { SubHeading } from '../../components'
import './Chef.css'
import { images } from '../../constants'

const Chef = () => (
  <div className='app__bg app__wrapper section__padding' id='chef'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote_image' />
          <p className='p__opensans'>
            Great food should feel personal, balanced, and unforgettable.
          </p>
        </div>
        <p className='p__opensans'>
          We partner with local producers, design menus around the season, and
          train every team member to deliver thoughtful service from the first
          welcome to the last course.
        </p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Executive Chef & Founder</p>
        <img src={images.sign} alt='sign_image' />
      </div>
    </div>
  </div>
)

export default Chef

