import React, { useEffect, useRef, useState } from 'react'
import { DB_URL } from '../firebase';

const History = () => {

    const [prevOrders, setPrevOrders] = useState([]);
    const [ordersToShow, setOrdersToShow] = useState([]);
    const searchMailRef = useRef(null);
    const searchPhoneRef = useRef(null);

    const fetchOrders = async (URL) => {
        const response = await fetch(URL);
        const data = await response.json();
        let loadedOrders = [];
        
        for (const item in data) {
            loadedOrders.push({
                cart: data[item].cart,
                date: data[item].date,
                totalPrice: data[item].price,
                email: data[item].email,
                phone: data[item].phone,
            })
        }
        setPrevOrders(loadedOrders)
    }

    useEffect(() => {
        fetchOrders(`${DB_URL}orders.json`)

    }, [])




    const searchForOrders = () => {
        if (searchMailRef.current.value && searchPhoneRef.current.value) {
            let newOrders = prevOrders.filter(i => i.phone == searchPhoneRef.current.value && i.email == searchMailRef.current.value);
            setOrdersToShow(newOrders);
        } else {
            return false;
        }
    }

    return (
        <section className='self-start max-w-[1220px] px-[10px]'>

            <div className='flex-col flex'>
                <h1 className='text-center text-[28px] my-[20px]'>Serach for your orders</h1>

                <div className='grid grid-cols-2 gap-[20px] max-[510px]:grid-cols-1'>
                    <label> 
                        <p className='mb-[10px]'>Email:</p>
                        <input ref={searchMailRef} type="email" className='outline-[2px] ml-[10px] px-[15px] py-[5px] outline-mainBlue' placeholder='Enter your email' required/>
                    </label>

                    <label> 
                        <p className='mb-[10px]'>Phone:</p>
                        <input ref={searchPhoneRef} type='tel' className='outline-[2px] ml-[10px] px-[15px] py-[5px] outline-mainBlue' placeholder='Enter your phone' required/>
                    </label>
                </div>

                <button className='border-2 border-mainBlue px-[50px] py-[10px] rounded-[20px] font-[700] text-mainBlue hover:text-mainWhite hover:bg-mainBlue mx-auto mt-[30px]'
                onClick={() => searchForOrders()}
                >Search</button>
            </div>

            {ordersToShow.length > 0 ?
            <div className='my-[40px]'>
                {ordersToShow.length !==0 && 
                <div className='grid grid-cols-1 gap-[40px] max-h-[500px] overflow-y-scroll'>
                    {ordersToShow.map((item, ind) => (
                        <div key={ind}>
                            <div className='grid grid-cols-3 gap-[20px] justify-items-center max-lg:grid-cols-2 max-[644px]:grid-cols-1'>
                                {item.cart.map((innerI, innerInd) => (
                                    <div key={innerInd} className='flex items-center gap-[10px]'>
                                        <img src={innerI.img} alt={innerI.name} className='nax-w-[200px] max-h-[100px]' />

                                        <div>
                                            <h3 className='text-[20px] font-[500]'>{innerI.name}</h3>
                                            <p className='text-gray-500'>Price: <span className='text-[18px] text-black font-[500]'>${innerI.price}</span></p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 className='mt-[20px] text-[20px] max-[644px]:text-center'>Total price: <span className='font-[500]'>${item.totalPrice}</span></h2>
                            <h3 className='text-gray-500 max-[644px]:text-center'>Date: <span className='text-[18px] text-black font-[500]'>{item.date}</span></h3>

                        </div>
                    ))}
                
                </div>}

            </div>
            :
            <div>
                <h2>You have no orders with this email and phone!</h2>
                <p>Make sure You enter correct data</p>
            </div>
            }

        </section>
    )
}

export default History