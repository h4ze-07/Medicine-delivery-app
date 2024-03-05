import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'


const Root = () => {
  return (
    <div className='flex flex-col w-full h-full'>
        <Header />
        <main className='mx-auto max-w-[1220px] px-[10px] flex-grow flex items-center'>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Root