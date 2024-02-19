"use client"
import ProductCard from "@/components/ProductCard";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchProducts } from '@/redux/productSlice';
import React, { useEffect, useCallback, useRef, useMemo } from "react";
import { useParams } from "next/navigation";
import brands from "@/constants/brands";
import Image from "next/image";

// type BestsellerProps = {
//     products?: [];
//     page?: string;

// }

export default function Bestsellers() {
    const params= useParams()
    console.log("params: ", params.productid)
    const products = useSelector((state: RootState) => state.products.products)
    const skip = useSelector((state: RootState) => state.products.skip)
    const moreProducts = useSelector((state: RootState) => state.products.moreProducts)
    const dispatch = useDispatch<AppDispatch>()

    const getProducts = useCallback(() => {
        dispatch(fetchProducts(skip))
    }, [dispatch])

    const isFirstRender = useRef(true)

    useEffect(() => {
        // if (isFirstRender.current) {
        //     isFirstRender.current = false;
        //     return;
        // }
        if (skip == 0) {
            getProducts()
        }
    }, [])

    return (
        <div className={`flex flex-col w-[100%] items-center ${moreProducts && !params.productid ? "" : "bg-[#fafafa]"}`}>
            <div className={`flex flex-col items-center px-[40px] lg:flex-row p-[24px] h-fit lg:min-h-[863px] w-[100%] lg:w-[80%] borde lg:flex-wrap gap-[70px] lg:gap-[30px]`}>
                {products.map((product: any, index: number)=>{
                    return (
                        <div key={index}>
                            <ProductCard id={product.id} imgUrl={product.thumbnail} price={product.price} discountPercentage={product.discountPercentage} title={product.title} category={product.category} />
                        </div>
                    )
                })}
            </div>
            <button onClick={()=>{dispatch(fetchProducts(skip))}} className={`border mt-[96px] text-[#23A6F0] active:bg-[#23A6F0] hover:bg-[lightgray] active:text-[#fff] border-[#23A6F0] w-[261px] h-[52px] rounded-[5px] ${moreProducts && !params.productid ? "flex" : "hidden"} items-center justify-center`}>
                <h2 className=" font-[700] text-[14px] leading-[22px]">
                    LOAD MORE PRODUCTS
                </h2>
            </button>
            <div className={`${moreProducts && !params.productid ? "hidden" : "flex"} mt-[50px] w-[100%] flex-col lg:flex-row items-center justify-center gap-[45px] lg:gap[25px]`}>
                {brands.map((url, index)=>{
                    return (
                        <div key={index} className="w-[151px] h-[70px] relative">
                            <Image alt="brand logo" src={url} fill={true} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
