"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { removeFromWishlist } from "@/redux/wishSlice";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';

type WishlistProps = {
    products?: { thumbnail?: string, id: number, title?: string, }[]
}

export default function Wishlist({ products = [] }: WishlistProps) {
    const dispatch = useDispatch<AppDispatch>()

    function removeProduct(id: number | string): void {
        dispatch(removeFromWishlist(id))
    }

    return (
        <div className='flex bg-white absolute top-[100px] left-[50%] ml-[-200px] flex-col w-[400px] gap-[10px] p-[5px] max-h-[500px] min-h-[100px] overflow-y-auto borde border-black rounded-[10px]'>
            <h2 className='font-[700] text-[20px]'>WISHLIST</h2>
            {products.map((product, index) => {
                return (
                    <div key={index} className='flex border border-black rounded-[7px] p-[5px] h-[60px]'>
                        <Link href={`/product/${product.id}`}>
                            <div className='relative w-[50px] h-[50px] border relative'>
                                <Image alt="product" src={product.thumbnail || ""} fill={true} />
                            </div>
                        </Link>
                        <div className='flex flex items-end ml-[10px]'>
                            <h2>{product.title}</h2>
                        </div>
                        <div className="flex flex-col items-end justify-end ml-auto">
                            <button onClick={() => { removeProduct(product.id) }}>remove</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}