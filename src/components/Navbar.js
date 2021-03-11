import React from 'react'
import './Navbar.css'

const Navbar = ({mode,toggleMode}) => {
  return (
    <nav className='navbar'>
      <div 
        className='navbar__link'
        onClick={toggleMode}
      >
        {mode === 'shopper' ? 'For Business' : 'Search Compras'}
      </div>
    </nav>
  )
}

export default Navbar
