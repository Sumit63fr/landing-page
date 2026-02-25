import React, { useEffect, useState } from 'react';

import Navbar from './common/Navbar';
import Header from './common/Header';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    return (
        <div>
            <Header/>
            <Navbar />

            <div className='max-w-285 mx-auto p-4'>
                <h1 className='font-bold text-4xl mb-6'>Your Cart</h1>

                {cartItems.length === 0 ? (
                    <p>Your cart is empty </p>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index} className='flex justify-between border p-4 mb-3 rounded'>
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                            <span><img src={item.image} alt="" /></span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Cart;