import React, { useEffect, useRef, useState } from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal, images } from '../../constants'
import './Intro.css'

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const videoRef = useRef()

  const handleVideo = () => {
    if (!videoRef.current) {
      return
    }

    if (playVideo) {
      videoRef.current.pause()
      setPlayVideo(false)
    } else {
      videoRef.current.play()
      setPlayVideo(true)
    }
  }

  useEffect(() => () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }, [])

  return (
    <div className='app__video' id='intro'>
      <video
        src={meal}
        typeof='video/mp4'
        preload='metadata'
        playsInline
        poster={images.gallery01}
        loop
        controls={false}
        muted
        ref={videoRef}
      />

      <div className='app__video-overlay flex__center'>
        <button
          type='button'
          className='app__video-overlay_circle flex__center'
          aria-label={playVideo ? 'Pause background video' : 'Play background video'}
          onClick={handleVideo}>
          {playVideo ? (
            <BsPauseFill color='#fff' fontSize={30} />
          ) : (
            <BsFillPlayFill color='#fff' fontSize={30} />
          )}
        </button>
      </div>
    </div>
  )
}

export default Intro
