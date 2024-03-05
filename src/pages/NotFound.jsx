import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section>
      <h1 className='text-center font-[700] text-[36px] text-mainBlue my-[30px]'>Page is not found!</h1>
      <Link to='/' className='font-[500] text-center block underline-offset-4 hover:underline hover:text-mainBlue'>Return to Shop page</Link>
    </section>
  )
}

export default NotFound