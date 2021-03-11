import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <span className='footer__text'>
        Created by{' '}
        <a href='https://www.twitter.com/jwhubert91' className='footer__link'>@jwhubert91</a>
        {' '}in Brooklyn, NY
      </span>
    </footer>
  )
}

export default Footer
