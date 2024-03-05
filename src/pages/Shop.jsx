import React, { useState } from 'react'
import { shops } from '../utils'
import ProductsList from '../components/ProductsList'
import { btnStyles } from '../utils/styles';

const Shop = ({productsToShow, cart, setCart, handleCartUpdate}) => {

    const [activeBtn, setActiveBtn] = useState(1);

    const handleBtnClick = (item) => {
        setActiveBtn(item.id)
    }


    return (
        <section className='flex gap-[20px] items-start'>

            <div className=' border-mainBlue px-[20px] py-[10px]'>
                <aside>
                    <h1 className='text-center mb-[30px] text-[20px] font-[500]'>Shops:</h1>

                    <div className='flex flex-col gap-[30px]'>
                        {shops.map(item => (
                            <button type='button' key={item.id} className={`border-[2px] border-mainBlue py-[15px] px-[30px] text-[18px] rounded-[8px] font-[500] ${item.id == activeBtn ? btnStyles.activeShopBtn : ''}`}
                            onClick={() => handleBtnClick(item)}
                            >{item.name}</button>
                        ))}
                    </div>
                </aside>
            </div>
            
           
            <ProductsList productsToShow={productsToShow} cart={cart} handleCartUpdate={handleCartUpdate} setCart={setCart} />
            

        </section>
    )
}

export default Shop