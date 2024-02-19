"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type wishState = {
    wishlist: {id: number, thumbnail: string, title: string}[];
}

const initialState: wishState = {
    wishlist: []
}

const wishReducer = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<any>) => {
            const newList = [...state.wishlist, action.payload]//state.wishlist.concat(action.payload)
            state.wishlist = newList
        },
        removeFromWishlist: (state, action: PayloadAction<any>) => {
            const newList = state.wishlist.filter((product:any)=>product.id !== action.payload)
            state.wishlist = newList
        }
    }
})


export const { addToWishlist, removeFromWishlist } = wishReducer.actions
export default wishReducer.reducer