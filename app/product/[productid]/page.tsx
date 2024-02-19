"use client"
import Image from "next/image";
import React, { useEffect, useState, Fragment } from "react";
import { useRouter, usePathname, useSearchParams, useParams } from "next/navigation";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { addToCart } from "@/redux/cartSlice";
import { addToWishlist } from "@/redux/wishSlice";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar'
import Bestsellers from "@/components/Bestsellers";


interface State extends SnackbarOrigin {
    open: boolean;
    message: string;
}


function ratingStars(rating: number | string): any[] {
    const ratingRounded = Math.floor(Number(rating))
    const stars = []
    for (let i = 0; i < ratingRounded; i++) {
        stars.push(i)
    }
    return stars
}


export default function SingleProduct() {
    const [state, setState] = useState<State>({
        open: false,
        vertical: 'bottom',
        horizontal: 'right',
        message: ""
    });
    const { vertical, horizontal, open, message } = state;
    const params = useParams()
    const { cart, wishlist } = useSelector((state: RootState) => {
        return { cart: state.wishCart.cart.cart, wishlist: state.wishCart.wishlist.wishlist }
    })
    const inCart = (Array.isArray(cart) && cart.find((product: any) => product.id == params.productid))
    const inWishlist = (Array.isArray(wishlist) && wishlist.find((product: any) => product.id == params.productid))
    const dispatch = useDispatch<AppDispatch>()
    const [product, setProduct] = useState<any>({})
    const [stars, setStars] = useState<any[]>([])
    const [images, setImages] = useState<{ active: number, images: string[] }>({ active: 0, images: [] })

    const handleClick = (newMessage: string) => {
        setState({ ...state, open: true, message: newMessage })
        const closeModal = setTimeout(() => {
            handleClose()
            clearTimeout(closeModal)
        }, 3000)
    };

    function handleClose() {
        setState({ ...state, open: false });
    };

    function setActiveImage(idx: number | string): void {
        if (Number(idx)) {
            setImages({ ...images, active: Number(idx) })
            return
        }
        if (idx == "next") {
            setImages({ ...images, active: images.active + 1 })
            return
        }
        setImages({ ...images, active: images.active - 1 })
        return
    }

    function addProductToCart(productDetails: { id: number, price: number, title: string, thumbnail: string, qty: number, stock: number }) {
        dispatch(addToCart(productDetails))
        handleClick("Product added to cart")
    }
    function addProductToWishlist(productDetails: { id: number, title: string, thumbnail: string }) {
        dispatch(addToWishlist(productDetails))
        handleClick("Product added to wishlist")
    }

    useEffect(() => {
        async function getProduct() {
            const url = `https://dummyjson.com/products/${params.productid}`;
            let attempts = 0;
            let response;

            while (attempts < 3) {
                try {
                    response = await fetch(url);
                    if (response.ok) {
                        const data = await response.json();
                        setProduct(data)
                        setStars(ratingStars(data.rating))
                        setImages({ ...images, images: data.images })
                        return;
                    } else {
                        console.error('Failed to fetch data. Status:', response.status);
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
                attempts++;
            }

            console.error('Maximum attempts reached. Could not complete API call.');
            return "error";
        }
        getProduct()
    }, [])
    return (
        <div className={`flex flex-col items-center `}>
            <div className="flex flex-col w-full pt-[24px] gap-[24px] pb-[48px] bg-[#fafafa] items-center">
                <div className="w-fit lg:w-[75%] flex items-center h-[44px] border"></div>
                <div className={`flex borde border-[green] flex-col lg:gap-[25px] w-[90%] lg:w-[75%] lg:h-[598px] lg:flex-row`}>
                    <div className={`flex flex-col items-center lg:items-start w-[100%] lg:w-fit`}>
                        <div className="relative borde bg-center bg-cover border-black flex justify-center items-center w-[300px] lg:w-[506px] lg:h-[450px] h-[277px]">
                            <Image alt="product" fill={true} src={images.images[images.active]} />
                            <div className="absolute self-center flex w-[90%] justify-between">
                                <button onClick={() => { setActiveImage("prev") }} disabled={images.active == 0} className="w-[24px] relative h-[44px] borde border-black">
                                    <Image alt="next image icon" fill={true} src="../images/product-icons/control-prev.svg" />
                                </button>
                                <button onClick={() => { setActiveImage("next") }} disabled={images.active == images.images.length - 1} className="w-[24px] relative h-[44px] borde border-black">
                                    <Image alt="next image icon" fill={true} src="../images/product-icons/control-next.svg" />
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-[19px] mt-[42px] flex-wrap">
                            {images.images.map((image: string, index: number) => {
                                return (
                                    <button onClick={() => { setActiveImage(index) }} className="h-[75px] relative w-[100px] borde border-black">
                                        <Image alt="product image" fill={true} src={image} />
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <div className={`flex flex-col mt-[41px] lg:mt-0 pl-[24px] lg:w-[510px] lg:h-[451px] borde border-black`}>
                        <h2 className="text-[20px] font-[400] leading-[30px]">{product.title}</h2>
                        <div className="flex  mt-[12px] gap-[10px]">
                            <div className='gap-[5px]  relative h-[22px] w-[150px]'>
                                <div className="flex gap-[9px] h-[100%] w-[100%] borde absolute">
                                    <div className='h-[22px] w-[22px] borde relative'>
                                        <Image alt="rating stars" fill={true} src="../images/product-icons/empty-star.svg" />
                                    </div>
                                    <div className='h-[22px] w-[22px] borde relative'>
                                        <Image alt="rating stars" fill={true} src="../images/product-icons/empty-star.svg" />
                                    </div>
                                    <div className='h-[22px] w-[22px] borde relative'>
                                        <Image alt="rating stars" fill={true} src="../images/product-icons/empty-star.svg" />
                                    </div>
                                    <div className='h-[22px] w-[22px] borde relative'>
                                        <Image alt="rating stars" fill={true} src="../images/product-icons/empty-star.svg" />
                                    </div>
                                    <div className='h-[22px] w-[22px] borde relative'>
                                        <Image alt="rating stars" fill={true} src="../images/product-icons/empty-star.svg" />
                                    </div>
                                </div>
                                <div className="flex gap-[9px] h-[100%] w-[100%] border absolute">
                                    {stars.map((star: any, index: number) => {
                                        return (
                                            <div key={index} className='h-[22px] w-[22px] borde relative'>
                                                <Image alt="rating stars" fill={true} src="../images/product-icons/star.svg" />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <h2>10 Reviews</h2>
                        </div>

                        <div className="flex flex-col mt-[22px] gap-[5px]">
                            <h2>${product.price}</h2>
                            <h2>Availability : {Number(product.stock) && product.stock > 0 ? "In Stock" : "Out of Stock"}</h2>
                        </div>

                        <div className="mt-[160px] pb-[10px] border-b">
                        </div>

                        <div className="flex mt-[15px] gap-[7px]">
                            <div className="w-[30px] h-[30px] rounded-[50%] bg-[#23A6F0] borde border-black"></div>
                            <div className="w-[30px] h-[30px] rounded-[50%] bg-[#2DC071] borde border-black"></div>
                            <div className="w-[30px] h-[30px] rounded-[50%] bg-[#E77C40] borde border-black"></div>
                            <div className="w-[30px] h-[30px] rounded-[50%] bg-[#252B42] borde border-black"></div>
                        </div>

                        <div className="mt-[48px] flex items-center gap-[10px]">
                            <button className="bg-[#23A6F0] w-[148px] h-[44px] rounded-[5px] text-white">Select Options</button>
                            <button onClick={() => { addProductToWishlist({ id: product.id, title: product.title, thumbnail: product.thumbnail }) }} disabled={inWishlist != undefined} className="w-[30px] h-[30px] rounded-[50%] border border-[#E8E8E8] bg-white relative flex items-center justify-center">
                                <Image alt="wishlist icon" height={15} width={15} src="../images/product-icons/add-wishlist.svg" />
                            </button>
                            <button disabled={product.stock < 1 || inCart != undefined} onClick={() => { addProductToCart({ id: product.id, title: product.title, price: product.price, thumbnail: product.thumbnail, qty: 1, stock: product.stock }) }} className="w-[30px] h-[30px] rounded-[50%] border border-[#E8E8E8] bg-white relative flex items-center justify-center">
                                <Image alt="add cart icon" height={15} width={15} src="../images/product-icons/add-cart.svg" />
                            </button>
                            <button className="w-[30px] h-[30px] rounded-[50%] border border-[#E8E8E8] bg-white relative flex items-center justify-center">
                                <Image alt="wishlist icon" height={20} width={20} src="../images/product-icons/eye-product.svg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Bestsellers />
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message={message}
                key={vertical + horizontal}
            />
        </div>
    );
};