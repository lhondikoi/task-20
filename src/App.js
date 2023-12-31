import React from 'react'
import Cart from './components/cart.js'
import './styles/app.css'
// store
import { useSelector } from 'react-redux'

function App() {
    const itemsInCart = useSelector(state => state.cart.cart.length)
    const totalQuantity = useSelector(state => state.cart.cart.reduce((T,item) => T + item.quantity,0))
    const totalPrice = useSelector(state => state.cart.cart.reduce((T,item) => T + (item.price - item.price*item.discountPercentage/100)*item.quantity,0).toFixed(2))
    return (
            <div className="container">
                <h1 className="title"><i className="bi bi-cart"></i> Shopping cart with Redux</h1>
                <div className="cart-container">
                    {
                        itemsInCart !== 0 ?
                        <>
                        <Cart />
                        <div className="totals-container">
                            <span className="totals"><span className="helper-text">Items in cart:</span><strong>{totalQuantity}</strong></span>                    
                            <span className="totals"><span className="helper-text">Total:</span><strong>${totalPrice}</strong></span>
                        </div>
                        </> :
                        <p style={{textAlign: "center", width: "100%"}}>You have no items in your cart!</p>
                    }
                </div>
            </div>
    )
}


export default App;