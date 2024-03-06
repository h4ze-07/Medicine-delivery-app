import React from 'react'

const AddToCartModal = ({setIsProductModal}) => {
  
  const modalClose = () => setIsProductModal(false);

  setTimeout(() => modalClose(), 1000)

  return (
    <div className='absolute top-[5px] right-[20px] flex gap-[10px] w-fit bg-green-500 px-[20px] py-[15px] rounded-[20px] items-center z-20'>
        <h2 className='text-mainWhite font-[500]'>Item succesully added!</h2>
        <button onClick={modalClose}>❌</button>
    </div>
  )
}

export default AddToCartModal