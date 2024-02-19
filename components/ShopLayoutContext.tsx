"use client"
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Image from "next/image";


export default function ShopLayoutContext({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <Provider store={store}>
            <>
            <NavBar />
            <div className="min-h-[400px] mt-[50px] borde border-[blue] w-full">
                {children}
            </div>
            <Footer />
            </>
        </Provider>
    )
}