import React, { useState } from 'react'

import SubHeading from '../SubHeading/SubHeading'
import './Newsletter.css'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    const trimmedEmail = email.trim()
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)

    if (!isValidEmail) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('success')
    setMessage('Thanks for subscribing. We will keep you updated!')
    setEmail('')
  }

  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title='NewsLetter' />
        <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className='p__opensans'>And Never Miss Latest Updates!</p>
      </div>
      <form className='app__newsletter-input flex__center' onSubmit={handleSubmit} noValidate>
        <label htmlFor='newsletter-email' className='sr-only'>
          Email address
        </label>
        <input
          id='newsletter-email'
          type='email'
          placeholder='Enter your e-mail address'
          value={email}
          onChange={event => {
            setEmail(event.target.value)
            if (status !== 'idle') {
              setStatus('idle')
              setMessage('')
            }
          }}
          aria-invalid={status === 'error'}
          aria-describedby='newsletter-status'
        />
        <button className='custom__button' type='submit'>
          Subscribe
        </button>
      </form>
      <p
        id='newsletter-status'
        className={`app__newsletter-status app__newsletter-status--${status}`}
        role={status === 'error' ? 'alert' : 'status'}>
        {message}
      </p>
    </div>
  )
}

export default Newsletter
