import Image from "next/image";
import Link from "next/link";

type ProductProps = {
    imgUrl?: string,
    title?: string,
    category?: string,
    id?: string | number,
    price?: number,
    discountPercentage?: string | number,    
}

export default function ProductCard({title, imgUrl, category, id, price, discountPercentage}: ProductProps){
    const discount = (Number(discountPercentage)/100)*Number(price)
    return ( // style={{backgroundImage:`url(${imgUrl})`}}
    <Link href={`/product/${id}`}>
        <div className={`flex flex-col borde items-center`}>
            <div className={`borde border-black w-[295px] lg:w-[183px] lg:h-[238px] bg-center bg-cover h-[360px] relative`}> 
                <Image src={imgUrl || ""} alt="" fill={true} />
            </div>
            <h2 className="mt-[25px] text-[16px] font-[700] leading-[24px] w-[280px] lg:w-[170px] text-center truncate borde text-[#252B42]">{title}</h2>
            <h2 className="mt-[10px] text-[#737373]">{category}</h2>
            <h2 className="mt-[10px] text-[16px]"><span className="text-[#BDBDBD]">${price} </span> <span className="text-[#23856D]">${(price && price - discount)?.toFixed(2)}</span></h2>
        </div>
    </Link>
    );
};
