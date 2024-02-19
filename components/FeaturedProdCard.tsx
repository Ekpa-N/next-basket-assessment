import Image from "next/image";

type FeaturedProdProps = {
    product: {
        tags: string[],
        title: string,
        desc: string,
        date: string,
        comments: string,
        imgSource: string
    }
}

export default function FeaturedProdCard({ product }: FeaturedProdProps) {
    return (
        <div className={`flex flex-col w-[330px] lg:w-fit bg-[#fff] shadow-sm pb-[35px] relative`}>
            <div className="w-[58px] z-[5] h-[24px] rounded-[3px] text-center text-[#fff] text-[14px] font-[700] leading-[24px] bg-[#E74040] absolute left-[20px] top-[20px]">NEW</div>
            <div className={` relative w-[330px] lg:w-[348px] h-[300px]`}>
                <Image fill={true} src={product.imgSource} alt="" />
            </div>
            <div className="flex w-full pl-[25px] gap-[15px]">
                {product.tags.map((tag: string, index: number) => {
                    return (
                        <h2 key={index} className={`mt-[25px] text-[12px] font-[400] leading-[16px] ${index === 0 ? "text-[#8EC2F2]" : "text-[#737373]"}`}>{tag}</h2>
                    )
                })}
            </div>
            <h2 className="mt-[10px] w-[247px] ml-[25px] font-[400] text-left text-[20px] leading-[30px]">{product.title}</h2>
            <h2 className="mt-[10px] w-[247px] ml-[25px] text-[#737373] not-italic text-[14px] text-left font-[400] leading-[20px]">{product.desc}</h2>
            <div className="flex px-[25px] justify-between w-full mt-[25px]">
                <h2 className="flex gap-[5px] items-center">
                    <span>
                        <Image alt="clock icon" height={16} width={16} src="../images/home-page-icons/clock.svg" />
                    </span>
                    {product.date}
                </h2>
                <h2 className="flex items-center gap-[5px]">
                    <span>
                        <Image alt="clock icon" height={16} width={16} src="../images/home-page-icons/comments.svg" />
                    </span>
                    {product.comments}
                </h2>
            </div>
            <button className="borde w-[104px] mt-[25px] ml-[25px] flex h-[24px] text-[14px] font-[700px] leading-[24px] not-italic">
                <h2 className="flex items-center gap-[5px]">
                    Learn More
                    <span>
                        <Image alt="clock icon" height={9} width={9} src="../images/home-page-icons/learn-more.svg" />
                    </span>
                </h2>
            </button>
        </div>
    );
};
