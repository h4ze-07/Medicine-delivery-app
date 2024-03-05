import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = ({cart}) => {

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(cart.reduce((a, b) => (a.price * a.quantity) + (b.price * b.quantity)))
  }, [cart])

  return (
    <section className=''>

      <div className='grid grid-cols-2 gap-[30px]'>

        <form action=""></form>


        <div className='flex flex-col gap-[20px]'>
          {cart.map((item, index) => (
              <div key={index} className='flex gap-[15px]'>
                  <img src={item.img} alt={item.name} className='w-[200px] h-[200px] object-contain' />
                  <div>
                    <h1>{item.name}</h1>
                    <p className='text-[#606060]'>Price: <span className='text-black font-[500] text-[18px]'>${item.price}</span></p>
                    <div className='flex gap-2'>
                        <button>{'<'}</button><p>{item.quantity}</p><button>{'>'}</button>
                    </div>
                  </div>
              </div>
          ))}
        </div>  

      </div>
      
      <div className='flex justify-evenly items-center mt-[40px]'>
          
          <Link to='/' className='hover:underline underline-offset-4'>Back to shop</Link>

          <div className='flex gap-[20px] items-center'>

            <p className='text-[#606060]'>Total price: <span className='text-black font-[500] text-[18px]'>${totalPrice}</span></p>
            
            <button className='border-2 border-mainBlue px-[40px] py-[10px] rounded-[20px] font-[700] text-mainBlue hover:text-mainWhite hover:bg-mainBlue'>Order</button>
          </div>

      </div>
      

    </section>
  )
}

export default Cart