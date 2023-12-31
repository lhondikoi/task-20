import React from 'react';
import CartItem from './cartitem.js'
import '../styles/cart.css'

import { useSelector } from 'react-redux';

export default function Cart() {
    const cartItems = useSelector(state => state.cart.cart)
    return (
        <div className="cart">
            {cartItems.map((cartitem, index)=>{
                return (
                    <React.Fragment key={cartitem.id}>
                        <CartItem 
                            {...cartitem}
                        />
                        {index !== cartItems.length - 1 && <hr></hr>}
                    </React.Fragment>
            )})}
        </div>
    )
}