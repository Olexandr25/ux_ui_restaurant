import React, { useRef } from 'react'
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Gallery.css'

const imagesGallery = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
]

const Gallery = () => {
  const scrollRef = useRef(null)

  const scroll = direction => {
    const { current } = scrollRef

    if (!current) {
      return
    }

    const delta = Math.round(current.clientWidth * 0.7)

    if (direction === 'left') {
      current.scrollBy({ left: -delta, behavior: 'smooth' })
    } else {
      current.scrollBy({ left: delta, behavior: 'smooth' })
    }
  }

  return (
    <div className='app__gallery flex__center' id='gallery'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>

        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>
          A glimpse into our signature dishes, seasonal drinks, and the warm,
          elegant atmosphere guests come back for.
        </p>

        <button type='button' className='custom__button'>
          View More
        </button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {imagesGallery.map((image, index) => (
            <div
              className='app__gallery-images_card flex__center'
              key={`gallery_image-${index}`}>
              <img src={image} alt={`Gallery item ${index + 1}`} loading='lazy' />
              <BsInstagram className='gallery__image-icon' aria-hidden='true' />
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <button
            type='button'
            className='gallery__arrow-button'
            aria-label='Scroll gallery left'
            onClick={() => scroll('left')}>
            <BsArrowLeftShort className='gallery__arrow-icon' />
          </button>
          <button
            type='button'
            className='gallery__arrow-button'
            aria-label='Scroll gallery right'
            onClick={() => scroll('right')}>
            <BsArrowRightShort className='gallery__arrow-icon' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Gallery
