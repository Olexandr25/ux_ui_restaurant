import React from 'react'

import { SubHeading } from '../../components'
import { images } from '../../constants'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>
        Book Your Experience
      </h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <p
          className='p__cormorant'
          style={{ color: '#DCCA87', margin: '2rem 0' }}>
          Opening Hours
        </p>
        <p className='p__opensans'>Mon - Thu: 5:30 pm - 11:00 pm</p>
        <p className='p__opensans'>Fri - Sun: 5:00 pm - 12:00 am</p>
      </div>
      <a
        href='https://maps.google.com/?q=Lane+Ends+Bungalow+Whatcroft+Hall+Lane+Rudheath+CW9+7SG'
        target='_blank'
        rel='noreferrer'
        className='custom__button'
        style={{ marginTop: '2rem' }}>
        Visit Us
      </a>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findUs' />
    </div>
  </div>
)

export default FindUs
