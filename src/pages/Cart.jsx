import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import OrderModal from '../components/OrderModal';

const Cart = ({cart, setCart, addNewOrder}) => {

  const [totalPrice, setTotalPrice] = useState(0);
  const [isModal, setIsModal] = useState(false);

  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const couponRef = useRef(null);

  const date = new Date;

  useEffect(() => {
    if (cart.length > 0) {
      const price = cart.reduce((a, b) => a + (b.price * b.quantity), 0);
      setTotalPrice(price)
    } else {
      setTotalPrice(0);
    }
  }, [cart])


  const clearCart = () => {
    setCart([]);
  }

  const deleteItem = (item) => {
    const newCart = cart.filter(i => i.cartId !== item.cartId);
    setCart(newCart);
  }


  const reduceQuntity = (item) => {

      let newCart;

      if (item.quantity === 1) {
        newCart = cart.filter(i => i.cartId !== item.cartId);
      } else {
        newCart = cart.map(i => {
          if (i.cartId === item.cartId) {
            return {...i, quantity: i.quantity - 1}
          } else {
            return i
          }
        })
      }

      setCart(newCart)
  }


  const increaseQuntity = (item) => {
    const newCart = cart.map(i => {
      if (i.cartId === item.cartId) {
        return {...i, quantity: i.quantity + 1}
      } else {
        return i
      }
    })
    setCart(newCart)
  }
  
  const addOrderToDb = () => {
      if (nameRef.current.value && mailRef.current.value && phoneRef.current.value && addressRef.current.value) {

        let newOrder = {
          name: nameRef.current.value,
          email: mailRef.current.value,
          phone: phoneRef.current.value,
          address: addressRef.current.value,
          date: date.toLocaleString(),
          cart: cart,
          price: totalPrice,
          coupon: couponRef.current.value || 'no coupone',
        }

        addNewOrder(newOrder)
        setIsModal(true);
        clearCart()
      } else {
        return false
      }
  }

  return (
    <section className='my-[30px]'>

      {isModal && <OrderModal setIsModal={setIsModal} />}

      <div className='grid grid-cols-2 gap-[30px] max-md:flex max-md:flex-col'>

        {cart.length > 0 &&
          <form action="" className='flex flex-col gap-[20px] max-md:grid max-md:grid-cols-2 max-md:content-center max-md:items-center max-[570px]:grid-cols-1'>

            <label> 
              <p className='text-[20px] mb-[10px]'>Name:</p>
              <input ref={nameRef} type="text" className='outline-[2px] ml-[10px] px-[15px] py-[5px] outline-mainBlue' placeholder='Enter your name' required />
            </label>

            <label> 
              <p className='text-[20px] mb-[10px]'>Email:</p>
              <input ref={mailRef} type="email" className='outline-[2px] ml-[10px] px-[15px] py-[5px] outline-mainBlue' placeholder='Enter your email' required/>
            </label>

            <label> 
              <p className='text-[20px] mb-[10px]'>Phone:</p>
              <input ref={phoneRef} type='tel' className='outline-[2px] ml-[10px] px-[15px] py-[5px] outline-mainBlue' placeholder='Enter your phone' required/>
            </label>

            <label>
              <p className='text-[20px] mb-[10px]'>Address:</p>
              <input ref={addressRef} type="text" className='outline-[2px] ml-[10px] px-[15px] py-[5px] outline-mainBlue' placeholder='Enter your address' required/>
            </label>

            <label>
              <p className='text-[20px] mb-[10px]'>Coupon code:</p>
              <input ref={couponRef} type="text" className='outline-[2px] ml-[10px] px-[15px] py-[5px] outline-mainBlue' placeholder='Enter your coupon code' required/>
            </label>

          </form>
        }

        {cart.length > 0 ? 
        <div className='flex flex-col gap-[20px] max-h-[500px] p-[20px] overflow-y-scroll'>
          {cart.map((item, index) => (
              <div key={index} className='grid grid-cols-2 gap-[15px] content-center items-center max-[570px]:grid-cols-1 max-[570px]:justify-items-center'>
                  <img src={item.img} alt={item.name} className='object-contain max-[570px]:max-w-[300px] max-[570px]:max-h-[200px]'  />
                  <div className='flex-col flex items-center gap-2 px-[30px]'>
                    <h1 className='font-[500] text-[18px]'>{item.name}</h1>
                    <p className='text-[#606060] whitespace-nowrap'>Price: <span className='text-black font-[500] text-[18px]'>${item.price}</span></p>
                    <div className='flex gap-2'>
                        <button className='p-[10px]' onClick={() => reduceQuntity(item)}>{'<'}</button>
                        <p className='font-[700] pt-[10px]'>{item.quantity}</p>
                        <button className='p-[10px]' onClick={() => increaseQuntity(item)}>{'>'}</button>
                    </div>
                    <button className='border-2 border-red-600 px-[20px] py-[5px] rounded-[20px] font-[500] text-red-600 hover:text-mainWhite hover:bg-red-600'
                    onClick={() => deleteItem(item)}
                    >Delete</button>
                  </div>
              </div>
          ))}
        </div>  
        :
        <div className='text-center col-span-2 pb-[30px]'>
          <h1 className='text-[40px] mb-[10px]'>Your cart is empty!</h1>
          <Link to='/' className='hover:underline underline-offset-4'>Back to shop</Link>
        </div>
        }

      </div>
      
      {cart.length > 0 &&
        <div className='flex justify-between items-center mt-[70px] px-[30px] max-[570px]:flex-col-reverse max-[570px]:justify-center max-[570px]:gap-[20px]'>
            
            <Link to='/' className='hover:underline underline-offset-4'>Back to shop</Link>

            <div className='flex gap-[20px] items-center max-[570px]:flex-col'>

              <p className='text-[#606060]'>Total price: <span className='text-black font-[500] text-[18px]'>${totalPrice.toFixed(2)}</span></p>
              
              <button className='border-2 border-mainBlue px-[40px] py-[10px] rounded-[20px] font-[700] text-mainBlue hover:text-mainWhite hover:bg-mainBlue'
              onClick={addOrderToDb}
              >Order</button>
              <button className='border-2 border-red-600 px-[40px] py-[10px] rounded-[20px] font-[700] text-red-600 hover:text-mainWhite hover:bg-red-600'
              onClick={clearCart}
              >Clear</button>
            </div>

        </div>
      }
      

    </section>
  )
}

export default Cart