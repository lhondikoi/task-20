import React from 'react';
import '../styles/cartitem.css'
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../store/slices/cartSlice';

function CartItem({ id, title, description, price, discountPercentage, stock, quantity, thumbnail}) {
    const dispatch = useDispatch();
    return (
        <div className="cart-item">
            <div className="cart-item-left">
                <img className="item-img" src={thumbnail} alt={title} />
            </div>
            <div className="cart-item-middle">
                <h2 className="item-title">{title}</h2>
                <p className="item-description">{description}</p>
                <span className="item-price"><span className="helper-text">Price: </span><b><s className="helper-text">${price}</s> ${(price - (discountPercentage/100)*price).toFixed(2)}</b></span>
            </div>
            <div className="cart-item-right">
                {
                    quantity > 0 ?
                    <>
                        <div className="item-quantity-box">
                            <button className="item-quantity-change" onClick={()=> dispatch(decrementQuantity({id}))}><i className="bi bi-dash"></i></button>
                            <span className="item-quantity">{quantity}</span> 
                            <button className="item-quantity-change" onClick={()=> dispatch(incrementQuantity({id}))}><i className="bi bi-plus-lg"></i></button>
                        </div>
                        <button className="btn btn-remove-from-cart" onClick={()=>dispatch(removeFromCart({id}))}>Remove from cart</button>
                        <span className="subtotal"><span className="helper-text">Sub-total:</span> <b>${((price - (price*discountPercentage/100)) * quantity).toFixed(2)}</b></span>
                    </> :
                    <button className="btn btn-add-to-cart" onClick={()=>dispatch(incrementQuantity({id}))}>Add to Cart</button>
                }
            </div>
        </div>
    )
}

export default CartItem;