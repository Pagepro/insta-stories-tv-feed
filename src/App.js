import React from 'react'
import './css/App.css'
import './css/content.css'
import './css/logo.css'
import './css/fonts.css'
import logo from './img/logo.svg'
import igLogo from './img/instagram.svg'
import Slider from './components/Slider'

function App () {
  return (
    <div className='App'>
      <main className='l-main'>
        <div className='c-content'>
          <div className='c-content__wrapper'>
            <img src={logo} className='c-logo' alt='logo' />
            <h1 className='c-content__title'>
              Follow us on Instagram
            </h1>
            <ul className='c-content__pre'>
              <li>news about organized events</li>
              <li>current opportunities</li>
              <li>office vibes</li>
              <li>fun stuff</li>
              <li>insta-famous people</li>
            </ul>
            <p className='c-content__cta'>
              <img alt='' className='c-content__ig-logo' src={igLogo} /> @pagepro_
            </p>
          </div>
        </div>
        <Slider />
      </main>
    </div>
  )
}

export default App
