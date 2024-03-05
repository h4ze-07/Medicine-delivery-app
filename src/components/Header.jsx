import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='w-full bg-mainBlue flex-shrink-0'>
      <ul className='flex gap-[2px] max-w-[1200px] mx-auto text-mainWhite'>
        <li>
          <NavLink to='/' className='text-center py-[20px] px-[25px] block text-[18px] hover:text-black hover:bg-mainWhite'>Shop</NavLink>
        </li>
        <li>
          <NavLink to='/cart' className='text-center py-[20px] px-[25px] block text-[18px] hover:text-black hover:bg-mainWhite'>Cart</NavLink>
        </li>
      </ul>
    
    </header>
  )
}

export default Header