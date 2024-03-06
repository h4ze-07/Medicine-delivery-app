import React from 'react'

const OrderModal = ({setIsModal}) => {

  const modalClose = () => setIsModal(false);

  setTimeout(() => {
    modalClose()
  }, 4000)

  return (
    <div className='absolute bg-[#00000058] top-0 left-0  z-20 w-full h-full'>
        <div className='px-[40px] py-[40px] bg-white w-fit absolute top-[50%] left-[50%] c-translate rounded-2xl text-center'>
            <h2 className='text-[25px] mb-[10px] text-center'>Order is succesully sent!</h2>
            <p className='text-center text-[12px] text-gray-700'>Our managers will contact you soon</p>
            <button className='border-2 border-red-600 px-[20px] py-[5px] rounded-[20px] font-[700] text-red-600 hover:text-mainWhite hover:bg-red-600 mt-[10px] text-[12px] uppercase'
            onClick={modalClose}
            >close</button>
        </div>
    </div>
  )
}

export default OrderModal