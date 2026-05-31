import React from 'react'

import { SubHeading } from '../../components'
import './Testimonials.css'

const testimonials = [
  {
    quote:
      'From the first cocktail to dessert, every detail felt intentional. This is now our favorite date-night spot.',
    author: 'Emma R.',
    source: 'Google Reviews',
  },
  {
    quote:
      'The tasting menu was beautifully balanced and the team made our anniversary feel truly special.',
    author: 'Daniel K.',
    source: 'OpenTable',
  },
  {
    quote:
      'Elegant atmosphere, warm service, and standout flavors. Exactly what fine dining should feel like.',
    author: 'Sophia M.',
    source: 'Tripadvisor',
  },
]

const Testimonials = () => (
  <section className='app__testimonials app__bg section__padding' id='testimonials'>
    <div className='app__testimonials-heading'>
      <SubHeading title='Guest stories' />
      <h1 className='headtext__cormorant'>What Our Guests Say</h1>
      <p className='p__opensans'>
        Trusted by food lovers, professionals, and couples looking for a memorable
        dining experience.
      </p>
    </div>

    <div className='app__testimonials-grid'>
      {testimonials.map(item => (
        <article className='app__testimonials-card' key={item.author}>
          <p className='p__opensans app__testimonials-quote'>{item.quote}</p>
          <p className='p__cormorant'>{item.author}</p>
          <p className='p__opensans app__testimonials-source'>{item.source}</p>
        </article>
      ))}
    </div>
  </section>
)

export default Testimonials