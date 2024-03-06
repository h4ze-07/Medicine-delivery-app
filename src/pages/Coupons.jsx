import React, { useState } from 'react'
import { coupons } from '../utils'

const Coupons = () => {

    const [showCopyText, setShowCopyText] = useState({show: false});

    const copyCoupon = async ({coupon, id}) => {
        await navigator.clipboard.writeText(coupon)
        .then(() => setShowCopyText({...showCopyText, show: true, id: id}))
        .then(() => setTimeout(() => {
            setShowCopyText({...showCopyText, show: false})
        }, 1000))
    }
  
    return (
        <section className='self-start max-w-[1220px] px-[10px] my-[50px]'>
            <div className='grid grid-cols-3 gap-[30px] max-[676px]:grid-cols-2 max-[452px]:grid-cols-1'>
                {coupons.map(i => (
                    <div key={i.id} className='flex flex-col items-center'>
                        <img src={i.photo} alt="coupone" className='max-h-[150px] w-[300px] object-cover' />
                        <p className='mt-[20px] text-[18px] text-gray-500'>Code: <span className='text-black font-[600] text-[20px]'>{i.coupon}</span></p>
                        <button className='border-2 border-mainBlue px-[20px] py-[10px] rounded-[20px] font-[700] text-mainBlue hover:text-mainWhite hover:bg-mainBlue mt-[10px]'
                        onClick={() => copyCoupon({coupon: i.coupon, id: i.id})}
                        >{showCopyText.show && showCopyText?.id === i.id ? 'Copied!' : 'Copy to clipboard'}</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Coupons