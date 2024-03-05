import React from 'react'

const ProductsList = ({productsToShow, cart, setCart, handleCartUpdate}) => {

    const handleCartAdd = (item) => {
        
        let isItemExist = cart.find(i => i.shop === item.shop && i.productId === item.productId);

        if (isItemExist) {
            let newCart = cart.map(i =>
                i.shop === item.shop && i.productId === item.productId ? {...i, quantity: i.quantity + 1} : i
            )
            setCart(newCart)
        } else {
            handleCartUpdate({
                ...item, cartId: cart.length === 0 ? 1 : cart[cart.length - 1].cartId + 1, quantity: 1,
            })
        }
    }


    return (
        <div className='flex-1 border-mainBlue grid grid-cols-3 justify-center max-h-[600px] gap-[10px] p-[10px] overflow-y-scroll'>
            {productsToShow.map(item => (
                <div className='px-[10px] py-[40px] flex flex-col items-center border-[2px] rounded-[20px] border-mainBlue' key={item.productId}>
                    <img src={item.img} alt={item.name} className='max-w-full h-[200px] object-contain object-center' />
                    <h2 className='text-[20px] font-[500] mt-[20px]'>{item.name}</h2>
                    <p className='text-[#606060]'>Price: <span className='text-black font-[500] text-[18px]'>${item.price}</span></p>
                    <button className='border-2 border-mainBlue text-[18px] px-[25px] py-[10px] mt-[15px] rounded-xl text-mainWhite bg-mainBlue font-medium hover:text-mainBlue hover:bg-mainWhite'
                    onClick={() => handleCartAdd(item)}
                    >Add to cart</button>
                </div>
            ))}
        </div>
    )
}

export default ProductsList