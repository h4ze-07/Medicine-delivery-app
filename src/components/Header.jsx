import React from 'react'
import { NavLink } from 'react-router-dom';
import { navLinks } from '../utils/styles';

const Header = () => {
  return (
    <header className='w-full bg-mainBlue flex-shrink-0'>
      <ul className='flex gap-[2px] max-w-[1200px] mx-auto text-mainWhite'>
        <li>
          <NavLink to='/' className={navLinks}>Shop</NavLink>
        </li>
        <li>
          <NavLink to='/cart' className={navLinks}>Cart</NavLink>
        </li>
        <li>
          <NavLink to='/history' className={navLinks}>History</NavLink>
        </li>
        <li>
          <NavLink to='/coupons' className={navLinks}>Coupons</NavLink>
        </li>
      </ul>
    
    </header>
  )
}

export default Header