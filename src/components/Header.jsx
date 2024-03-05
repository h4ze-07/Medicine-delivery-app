import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex gap-[20px]'>
      <Link to='/'>Shop</Link>
      <Link to='/cart'>Cart</Link>
    </header>
  )
}

export default Header