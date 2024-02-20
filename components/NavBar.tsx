"use client"
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { menuList } from "@/constants/menu";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import Modal from '@mui/material/Modal';
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Link from "next/link";


export default function () {
    const { cart, wishlist, total } = useSelector((state: RootState) => {
        return { cart: state.wishCart.cart.cart, wishlist: state.wishCart.wishlist.wishlist, total: state.wishCart.cart.total }
    })
    const dispatch = useDispatch<AppDispatch>()
    const [open, setOpen] = useState<{ wishlist: boolean, cart: boolean }>({ wishlist: false, cart: false });
    const handleOpen = (modal: string) => setOpen({ ...open, [modal]: true });
    const handleClose = () => setOpen({ ...open, wishlist: false, cart: false });
    return (
        <nav className="flex flex-col w-full">
            <Modal
                open={open.wishlist || open.cart}
                onClose={handleClose}
                aria-labelledby="Product Cart"
                aria-describedby="list of products in cart"
            >
                {open.cart ? <Cart products={cart} total={total} /> : open.wishlist ? <Wishlist products={wishlist} /> : <></>}
            </Modal>
            {/* <div className="h-[58px] w-full lg:flex bg-[#23856D] hidden justify-between px-[130px]">
                <h2 className="flex gap-[5px] items-center">
                    <Image alt="" src={"../images/home-page-icons/phone.svg"} height={16} width={16} />
                    <span className="text-white">{`(225) 555-0118`}</span>
                </h2>
                <h2 className="flex gap-[5px] items-center">
                    <Image alt="" src={"../images/home-page-icons/mail.svg"} height={16} width={16} />
                    <span className="text-white">{`michelle.rivera@example.com`}</span>
                </h2>
                <h2 className="flex gap-[5px] items-center">
                    <span className="text-white font-[700]">{`Follow Us  and get a chance to win 80% off`}</span>
                </h2>
                <h2 className="flex gap-[10px] items-center">
                    <span className="text-white font-[700]">Follow Us :</span>
                    <h2 className="flex gap-[7px]">
                    <Image alt="" src={"../images/home-page-icons/instagram-white.svg"} height={16} width={16}  />
                    <Image alt="" src={"../images/home-page-icons/youtube-white.svg"} height={16} width={16}  />
                    <Image alt="" src={"../images/home-page-icons/facebook-white.svg"} height={16} width={16}  />
                    <Image alt="" src={"../images/home-page-icons/twitter-white.svg"} height={16} width={16}  />
                    </h2>
                </h2>
            </div> */}
            <div className="flex borde gap-[40px] lg:gap-[80px] bg-[white] flex-col lg:flex-row lg:items-center lg:justify-between min-h-[58px] px-[130px]">
                <div className="flex items-center justify-between lg:w-fit borde h-[58px] px-[10px] lg:px-[0]">
                    <Link href={"/"}>
                        <h3 className="font-[700] text-[24px] leading-[32px]">Bandage</h3>
                    </Link>
                    <button className="borde flex flex-col items-end justify-between lg:hidden w-[23px] h-[14px]">
                        <div className="h-[2px] w-full bg-black"></div>
                        <div className="h-[3px] w-[70%] bg-black"></div>
                        <div className="h-[2px] w-[50%] bg-black"></div>
                    </button>
                </div>
                <div className="flex items-center lg:items-start flex-col lg:flex-row lg:gap-[10px]">
                    {menuList.map((menu: { title: string, route: string }, index: number) => {
                        return <button className="borde w-fit font-[400] lg:font-[700] lg:text-[14px] lg:leading-[24px] text-[30px] leading-[45px] text-center list-none" key={index}>{menu.title}</button>
                    })}
                </div>

                <div className="flex gap-[20px] flex-col lg:flex-row">
                    <button className="borde w-fit self-center font-[400] items-center gap-[3px] text-[30px] lg:text-[14px] lg:font-[700] lg:leading-[24px] leading-[45px] flex text-[#23A6F0]">
                        <h2 className="relative lg:w-[12px] lg:h-[12px] w-[28px] h-[28px]">
                            <Image src="../images/nav-items/login-icon.svg" alt="" fill={true} />
                        </h2>
                        <h2>Login / Register</h2>
                    </button>
                    <button className="borde w-fit self-center font-[400] items-center gap-[3px] text-[30px] leading-[45px] flex text-[#23A6F0]">
                        <h2 className="relative lg:w-[16px] lg:h-[16px] w-[34px] h-[34px]">
                            <Image src="../images/nav-items/search.svg" alt="" fill={true} />
                        </h2>
                    </button>
                    <button onClick={() => { handleOpen("wishlist") }} className="borde w-fit self-center font-[400] items-center gap-[3px] text-[12px] leading-[16px] flex text-[#23A6F0]">
                        <h2 className="relative lg:w-[16px] lg:h-[16px] w-[34px] h-[34px]">
                            <Image src="../images/nav-items/like.svg" alt="" fill={true} />
                        </h2>
                        <h2>{wishlist.length}</h2>
                    </button>
                    <button onClick={() => { handleOpen("cart") }} className="borde w-fit self-center font-[400] items-center gap-[3px] text-[12px] leading-[16px] flex text-[#23A6F0]">
                        <h2 className="relative lg:w-[16px] lg:h-[16px] w-[34px] h-[34px]">
                            <Image src="../images/nav-items/cart.svg" alt="" fill={true} />
                        </h2>
                        <h2>{cart.length}</h2>
                    </button>
                </div>
            </div>
        </nav>
    )
}