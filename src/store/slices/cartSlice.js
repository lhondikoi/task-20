import { createSlice } from '@reduxjs/toolkit'
import {products} from '../../data/products.js'

const initialState = {
    cart: products.map(product => ({
        ...product,
        quantity: 1   
    }))
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        incrementQuantity: (state, action) => {
            let productIndex = state.cart.findIndex(product => product.id === action.payload.id)
            state.cart[productIndex].quantity++
        },
        decrementQuantity: (state, action) => {
            let productIndex = state.cart.findIndex(product => product.id === action.payload.id)
            state.cart[productIndex].quantity--
        },
        removeFromCart: (state, action) => {
            let productIndex = state.cart.findIndex(product => product.id === action.payload.id)
            console.log(productIndex)
            state.cart.splice(productIndex, 1)
        }
    }
})

export default cartSlice.reducer;
export const { incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;