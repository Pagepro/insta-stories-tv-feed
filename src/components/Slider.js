import React, { useState } from 'react'
import Slide from './Slide'
import '../css/iphone.css'
import '../css/slider.css'

const defaultSlideBackground = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'

const mediaUrl = './media/'
// to generate json from directory
// tree -Jf > ../media.json
const filesJson = require('../media.js')[0].contents
const filesArray = filesJson.map(elem => {
  let element
  if (elem.type === 'file') {
    element = `${mediaUrl}${elem.name.substr(2)}`
  } else if (elem.type === 'directory') {
    element = elem.contents.map(item => {
      return `${mediaUrl}${item.name.substr(2)}`
    })
  }
  return element
}).flat()

function Slider () {
  const [currentSlide, setCurrentSlide] = useState(0)

  const elements = filesArray.map((url, key) => {
    const urlArray = url.split('.')
    const type = urlArray[urlArray.length - 1]
    return <Slide key={key} slideCount={filesArray.length} setCurrentSlide={setCurrentSlide} currentActive={currentSlide} keyProp={key} slideType={type} mediaUrl={url} />
  })

  let currentSlideUrlArr = filesArray[currentSlide].split('.')
  let sliderBackground = currentSlideUrlArr[currentSlideUrlArr.length - 1] === 'jpg' ? filesArray[currentSlide] : defaultSlideBackground
  let sliderBackgroundStyle = {
    backgroundImage: `url(${sliderBackground})`
  }

  return (
    <div className='c-slider'>
      <div className='c-slider__background' style={sliderBackgroundStyle} />
      <div className='iphone-x'>
        <div className='side'>
          <div className='screen'>
            {elements}
          </div>
        </div>
        <div className='line' />
        <div className='header'>
          <div className='sensor-1' />
          <div className='sensor-2' />
          <div className='sensor-3' />
        </div>
        <div className='volume-button' />
        <div className='power-button' />
      </div>
    </div>
  )
}

export default Slider
