import React from 'react'
import Navbar from './common/Navbar'
import Header from './common/Header'

const Cart = () => {
    return (
        <div className='flex flex-col items-center justify-center '>
        <Header/>
            <Navbar />
            <div className='flex flex-col items-center justify-center w-full  px-5 lg:px-35'>
                <div className='flex flex-row items-center justify-between'>
                    
                    <h1 className='text-[48px] font-bold '>Your cart</h1>
                    <p className='font-medium text-[24px] text-[#414143] underline'>Continue Shopping</p>
                        
                    

                </div>
                
            </div>
        </div>
    )
}

export default Cart