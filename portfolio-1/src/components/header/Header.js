import React from 'react'
import './Header.css'
import CTA from './CTA'
import JAY from '../../assets/me.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container head">
        <h5>Hello I'm</h5>
        <h1>Jeremiah Ojo</h1>
        <h5 className='light'>Frontend Developer</h5>
        <CTA />
        <Socials />
        <div className="mine">
          <img src={JAY} alt="jay" />
        </div>

        <a href="#contact" className='go-lower'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header