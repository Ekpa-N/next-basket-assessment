"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { calculateTotal } from "@/helpers/helpers"


type CartState = {
    cart: { id: number, price: number, title: string, thumbnail: string, qty: number }[];
    total: number
}

const initialState: CartState = {
    cart: [],
    total: 0
}

const cartReducer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            const newCart = [...state.cart, action.payload]
            const total = calculateTotal(newCart)
            state.cart = newCart
            state.total = total
        },
        removeFromCart: (state, action: PayloadAction<any>) => {
            const newCart = state.cart.filter((product: any) => product.id !== action.payload)
            const total = calculateTotal(newCart)
            state.cart = newCart
            state.total = total
        },
        increment: (state, action: PayloadAction<any>) => {
            const newCart = state.cart.map((product: any): any => {
                if (product.id == action.payload && product.qty < product.stock) {
                    product.qty = product.qty + 1
                }
                return product
            })
            const total = calculateTotal(newCart)
            state.cart = newCart
            state.total = total
        },
        decrement: (state, action: PayloadAction<any>) => {
            const newCart = state.cart.map((product: any): any => {
                if (product.id == action.payload && product.qty > 1) {
                    product.qty = product.qty - 1
                }
                return product
            })
            const total = calculateTotal(newCart)
            state.cart = newCart
            state.total = total
        }
    }
})


export const { addToCart, removeFromCart, increment, decrement } = cartReducer.actions
export default cartReducer.reducer