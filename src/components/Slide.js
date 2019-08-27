import React, { useEffect, useRef } from 'react'
import '../css/slide.css'

function Slide (props) {
  const { currentActive, slideCount, keyProp, slideType, mediaUrl, setCurrentSlide } = props
  const currentRef = useRef(null)

  const defaultShowingTime = 6000

  useEffect(() => {
    let temporaryShowingTime = 0
    if (currentActive === keyProp) {
      if (slideType === 'mp4') {
        const video = currentRef.current
        temporaryShowingTime = video.duration * 1000
        video.play()
      } else {
        temporaryShowingTime = defaultShowingTime
      }
      setTimeout(() => {
        setCurrentSlide(currentActive + 1 === slideCount ? 0 : currentActive + 1)
      }, temporaryShowingTime)
    }
  }, [currentActive, keyProp, setCurrentSlide, slideType, slideCount])

  return slideType === 'jpg'
    ? <figure ref={currentRef} className={currentActive === keyProp ? 'c-slide is-current' : 'c-slide'}><img src={mediaUrl} alt='' /></figure>
    : <video ref={currentRef} className={currentActive === keyProp ? 'c-slide is-current' : 'c-slide'} muted><source src={mediaUrl} type='video/mp4' /></video>
}

export default Slide
