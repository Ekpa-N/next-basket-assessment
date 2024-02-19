import React from "react";
import { footerData, socialIcons } from "@/constants/footerData";
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="w-full flex flex-col mt-[20px] lg:mt-0">
            <div className="h-[173px] bg-[#FAFAFA] flex flex-col gap-[30px] justify-center pl-[50px] lg:px-[14%] lg:flex-row lg:justify-between lg:w-full lg:items-center borde border-[yellow] relative">
                <h3 className="font-[700] text-[24px] leading-[32px]">
                    Bandage
                </h3>
                <div className="flex gap-[20px]">
                    {socialIcons.map((icon, index) => {
                        return (
                            <div key={index} className="w-[24px] h-[24px] relative">
                                <Image src={icon} alt="" fill={true} />
                            </div>
                        )
                    })}
                </div>
                <div className="absolute hidden w-[73%] bottom-[0] lg:block border"></div>
            </div>
            <div className="flex flex-col gap-[30px] pl-[50px] lg:px-[14%] lg:flex-row lg:gap-[0] lg:justify-between py-[40px]">
                {footerData.map((data: { title: string; list: { title: string; route: string; }[]; }, index: number) => {
                    return (
                        <div key={index}>
                            <FooterCard index={index} title={data.title} list={data.list} />
                        </div>
                    )
                })}
            </div>
            <div className="h-[74px] bg-[#FAFAFA]"></div>
        </footer>
    )
}

export function FooterCard({ title, list, index }: {
    title: string;
    list: {
        title: string,
        route: string
    }[];
    index: number;
}) {
    return (
        <div key={index} className="flex flex-col gap-[15px]">
            <h2 className="font-[700] text-[16px] leading-[24px] text-[#252B42]">{title}</h2>
            <ul className="flex flex-col gap-[5px]">
                {list.map((listItem: { title: string, route: string }, index: number) => {
                    return (
                        <li className="list-none font-[700] text-[14px] text-[#737373] leading-[24px]">{listItem.title}</li>
                    )
                })}
            </ul>
        </div>
    )
}