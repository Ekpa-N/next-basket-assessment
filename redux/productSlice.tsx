"use client"
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { rejects } from "assert"
import build from "next/dist/build"
import { resolve } from "path"
import axios from "axios"


type ProductState = {
    products: any;
    skip: number;
    moreProducts: boolean;
}

const initialState: ProductState = {
    products: [],
    skip: 0,
    moreProducts: true
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<any>) => {
            state.products = state.products.concat(action.payload)
            state.skip = state.skip + 10
            if(action.payload.length == 0) {
                state.moreProducts = false
            }
        })
        .addCase(fetchProducts.pending, (state)=> {
            state.products = state.products
        })
    }
})

export const fetchProducts = createAsyncThunk(
    "productSlice/fetchProducts",
    async (skip: any) => {
        try {
            const productsResponse = await axios.get(`https://dummyjson.com/products?limit=10&skip=${skip}`)
            return productsResponse.data.products
        } catch (error: any) {
            throw new Error("Error handling: " + error.message)
        }

    }
)

export default productSlice.reducer