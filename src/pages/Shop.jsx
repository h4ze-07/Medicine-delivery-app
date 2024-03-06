import React, { useState } from 'react'
import { shops } from '../utils'
import ProductsList from '../components/ProductsList'
import { btnStyles } from '../utils/styles';
import AddToCartModal from '../components/AddToCartModal';

const Shop = ({productsToShow, cart, setCart, handleCartUpdate}) => {
    const [isProductModal, setIsProductModal] = useState(false);
    const [activeBtn, setActiveBtn] = useState(1);

    const handleBtnClick = (item) => {
        setActiveBtn(item.id)
    }


    return (
        <section className='flex gap-[20px] items-start max-lg:flex-col max-lg:items-center'>

            {isProductModal && <AddToCartModal setIsProductModal={setIsProductModal} />}

            <div className=' border-mainBlue px-[20px] py-[10px]'>
                <aside>
                    <h1 className='text-center mb-[30px] text-[20px] font-[500]'>Shops:</h1>

                    <div className='flex flex-col gap-[30px] max-lg:flex-row max-md:grid max-md:grid-cols-2 max-[425px]:gap-[10px]'>
                        {shops.map(item => (
                            <button type='button' key={item.id} className={`border-[2px] border-mainBlue py-[15px] px-[30px] max-[425px]:py-[5px] max-[425px]:px-[10px] text-[18px] rounded-[8px] font-[500] ${item.id == activeBtn ? btnStyles.activeShopBtn : ''}`}
                            onClick={() => handleBtnClick(item)}
                            >{item.name}</button>
                        ))}
                    </div>
                </aside>
            </div>
            
           
            <ProductsList productsToShow={productsToShow} cart={cart} handleCartUpdate={handleCartUpdate} setCart={setCart} setIsProductModal={setIsProductModal} />
            

        </section>
    )
}

export default Shop