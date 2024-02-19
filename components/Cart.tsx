"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { removeFromCart, increment, decrement } from "@/redux/cartSlice";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';

type CartProps = {
    products?: { thumbnail?: string, id: number, price?: number, title?: string, qty?: number, stock?: number }[];
    total?:number
}


export default function Cart({ products = [], total=0 }: CartProps) {
    const dispatch = useDispatch<AppDispatch>()

    function removeProduct(id: number | string): void {
        dispatch(removeFromCart(id))
    }
    function updateQty(id: number, update: string): void {
        if (update === "add") {
            dispatch(increment(id))
            return
        }
        dispatch(decrement(id))
    }

    return (
        <div className='flex bg-white absolute top-[100px] left-[50%] ml-[-200px] flex-col w-[400px] gap-[10px] p-[5px] max-h-[500px] min-h-[100px] overflow-y-auto borde border-black rounded-[10px]'>
            <h2 className='font-[700] text-[20px]'>CART</h2>
            {products.map((product, index) => {
                return (
                    <div key={index} className='flex border border-black rounded-[7px] p-[5px] h-[60px]'>
                        <Link href={`/product/${product.id}`}>
                            <div className='relative w-[50px] h-[50px] border relative'>
                                <Image alt="produt" src={product.thumbnail || ""} fill={true} />
                            </div>
                        </Link>
                        <div className='flex flex-col ml-[10px]'>
                            <h2>{product.title}</h2>
                            <h2>${product.price}</h2>
                        </div>
                        <div className="flex flex-col ml-auto">
                            <div className='border flex gap-[15px] items-center'>
                                <button disabled={product.qty === 1} onClick={()=>{updateQty(product.id, "subtract")}}>-</button>
                                <h2>{product.qty}</h2>
                                <button disabled={product.qty === product.stock} onClick={()=>{updateQty(product.id, "add")}}>+</button>
                            </div>
                            <button onClick={() => { removeProduct(product.id) }}>remove</button>
                        </div>
                    </div>
                )
            })}
            <div className="flex justify-between">
                <h2>TOTAL</h2>
                <h2>{total}</h2>
            </div>
        </div>
    )
}