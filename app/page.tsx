'use client'
import Bestsellers from '@/components/Bestsellers';
import Image from 'next/image';
import { bestServices } from '@/constants/bestServices';
import { featuredProdsData } from '@/constants/featuredProdsData';
import FeaturedProdCard from '@/components/FeaturedProdCard';
import { grid } from '@/constants/grid';
import Link from 'next/link';


export default function Home() {
  return (
    <main className="flex borde border-[red] flex-col h-fit items-center">
      <div className={`flex flex-col lg:flex-row gap-[15px] lg:w-[80%]`}>
        <div style={{ backgroundImage: "url(../images/home-page-icons/furniture-one.svg)" }} className='borde border-black w-[331px] h-[300px] p-[24px] lg:w-[40%] lg:h-[616px]'>
          <div className={`flex flex-col gap-[3px]`}>
            <h2 className={`text-[14px] font-[700] leading-[24px] not-italic text-[#2DC071]`}>5 Items</h2>
            <h2 className={`text-[24px] font-[700] leading-[32px] not-italic text-[#252B42]`}>Furniture</h2>
            <h2 className={`text-[14px] text-[#252B42] not-italic leading-[24px]`}>Read More</h2>
          </div>
        </div>
        <div className='flex flex-col gap-[15px] lg:grow'>
          <div style={{ backgroundImage: "url(../images/home-page-icons/furniture-two.svg)" }} className='borde border-black w-[331px] h-[300px] p-[24px] lg:w-[100%] lg:h-[49%]'>
            <div className={`flex flex-col gap-[3px]`}>
              <h2 className={`text-[14px] font-[700] leading-[24px] not-italic text-[#2DC071]`}>5 Items</h2>
              <h2 className={`text-[24px] font-[700] leading-[32px] not-italic text-[#252B42]`}>Furniture</h2>
              <h2 className={`text-[14px] text-[#252B42] not-italic leading-[24px]`}>Read More</h2>
            </div>
          </div>
          <div className='flex flex-col gap-[15px] lg:flex-row lg:h-[49%] lg:w-[100%]'>
            <div style={{ backgroundImage: "url(../images/home-page-icons/furniture-three.svg)" }} className='borde border-black w-[331px] h-[300px] p-[24px]'>
              <div className={`flex flex-col gap-[3px]`}>
                <h2 className={`text-[14px] font-[700] leading-[24px] not-italic text-[#2DC071]`}>5 Items</h2>
                <h2 className={`text-[24px] font-[700] leading-[32px] not-italic text-[#252B42]`}>Furniture</h2>
                <h2 className={`text-[14px] text-[#252B42] not-italic leading-[24px]`}>Read More</h2>
              </div>
            </div>
            <div style={{ backgroundImage: "url(../images/home-page-icons/furniture-four.svg)" }} className='borde border-black w-[331px] h-[300px] p-[24px]'>
              <div className={`flex flex-col gap-[3px]`}>
                <h2 className={`text-[14px] font-[700] leading-[24px] not-italic text-[#2DC071]`}>5 Items</h2>
                <h2 className={`text-[24px] font-[700] leading-[32px] not-italic text-[#252B42]`}>Furniture</h2>
                <h2 className={`text-[14px] text-[#252B42] not-italic leading-[24px]`}>Read More</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`flex items-center flex-col mt-[104px] lg:mt-[161px] w-[261px] lg:w-[347px]`}>
        <h2 className={`hidden lg:block text-[20px] not-italic font-[400] leading-[30px]`}>Featured Products</h2>
        <h2 className={`lg:text-[24px] not-italic font-[700] lg:leading-[32px] w-[90px] lg:w-[100%] text-center`}>BESTSELLER PRODUCTS</h2>
        <h2 className={`lg:text-[14px] not-italic lg:font-[400] lg:leading-[20px] text-center`}>Problems trying to resolve the conflict between </h2>
      </div>

      <Bestsellers />


      <div className={`flex items-center flex-col mt-[160px] lg:mt-[161px] w-[261px] lg:w-[347px]`}>
        <h2 className={`hidden lg:block text-[20px] not-italic font-[400] leading-[30px]`}>Featured Products</h2>
        <h2 className={`lg:text-[24px] not-italic font-[700] lg:leading-[32px] w-[90px] lg:w-[100%] text-center`}>BESTSELLER PRODUCTS</h2>
        <h2 className={`lg:text-[14px] not-italic lg:font-[400] lg:leading-[20px] text-center`}>Problems trying to resolve the conflict between </h2>
      </div>
      <div className='flex flex-col lg:flex-row mt-[115px] gap-[100px]'>
        {bestServices.map((service: { img: string; title: string; desc: string; }, index: number) => {
          return (
            <div key={index} className='flex flex-col w-full items-center gap-[20px]'>
              <div className='relative w-[72px] h-[72px]'>
                <Image src={service.img} fill={true} alt="" />
              </div>
              <h2 className='text-[24px] font-[700] leading-[32px] not-italic text-[#252B42]'>{service.title}</h2>
              <h2 className='text-[14px] w-[225px] text-[#737373] font-[400] leading-[20px] not-italic text-center'>{service.desc}</h2>
            </div>
          )
        })}
      </div>

      <div className='flex flex-col items-center mt-[205px] lg:mt-[243px] gap-[10px]'>
        <h2 className='text-[#23A6F0] text-[14px] font-[700] leading-[24px]'>Practice Advice</h2>
        <h2 className='text-[#252B42] font-[700] text-[40px] leading-[50px]'>Featured Posts</h2>
      </div>

      <div className='mt-[80px] flex flex-col w-full items-center gap-[30px] lg:gap-0 lg:flex-row lg:justify-between lg:w-[74%]'>
        {featuredProdsData.map((product, index) => {
          return <FeaturedProdCard product={product} />
        })}
      </div>

      <div className={`mt-[80px] flex flex-col lg:flex-row bg-[#FAFAFA] w-full items-center lg:justify-center lg:gap-[120px] pb-[40.8px]`}>
        <div className='flex flex-col mt-[108px] items-center'>
          <h2 className='text-[#252B42] text-center text-[24px] font-[700] leading-[32px] w-[184px] lg:w-[287px] h-[64px]'>
            What they say about us
          </h2>
          <div style={{ backgroundImage: "url(../images/home-page-icons/user-profile.svg)" }} className='mt-[58px] lg:mt-[20px] borde border-[green] h-[90px] w-[90px] rounded-[50%]'>
          </div>
          <div className='mt-[20px] gap-[5px] flex'>
            <div className='h-[22px] w-[22px] borde relative'>
              <Image fill={true} src="../images/home-page-icons/star.svg" alt="" />
            </div>
            <div className='h-[22px] w-[22px] borde relative'>
              <Image fill={true} src="../images/home-page-icons/star.svg" alt="" />
            </div>
            <div className='h-[22px] w-[22px] borde relative'>
              <Image fill={true} src="../images/home-page-icons/star.svg" alt="" />
            </div>
            <div className='h-[22px] w-[22px] borde relative'>
              <Image fill={true} src="../images/home-page-icons/star.svg" alt="" />
            </div>
            <div className='h-[22px] w-[22px] borde relative'>
              <Image fill={true} src="../images/home-page-icons/empty-star.svg" alt="" />
            </div>
          </div>
          <div className=' text-[#737373] text-[14px] font-[700] mt-[20px] leading-[24px] text-center w-[204px] lg:w-[451px]'>
            Slate helps you see how many more
            days you need to work to
            reach your financial goal.
          </div>
          <div className='flex flex-col items-center mt-[20px] gap-[5px]'>
            <h2 className='text-[#23A6F0] text-[14px] font-[700] leading-[24px]'>Regina Miles</h2>
            <h2 className='text-[#252B42] font-[700] text-[14px] leading-[24px]'>Designer</h2>
          </div>
        </div>
        <div className='mt-[67px] flex flex-wrap w-[364px] lg:w-[464px] lg:h-[460px] h-[360.88px] justify-between gap-[12px]'>
          {grid.map((gridItem: string, index: number) => {
            return (
              <div key={index} style={{ backgroundImage: `url(${gridItem})` }} className='borde bg-center bg-cover relative border-black w-[112px] h-[112px] lg:w-[142.8px] lg:h-[142.8px]'></div>
            )
          })}
        </div>
      </div>

      <div style={{ backgroundImage: "url(../images/home-page-icons/bottom-background-image.svg)" }} className='mt-[62px] flex borde border-[green] flex-col bg-center bg-cover gap-[30px] h-[712px] lg:h-[640px] items-center w-full'>
        <h2 className='text-[#23A6F0] mt-[112px] lg:mt-[160px] text-[14px] font-[700] leading-[24px] not-italic'>
          Designing Better Experience
        </h2>
        <h2 className='text-center w-[358px] lg:w-[571px] text-[40px] text-[#252B42] font-[700] leading-[50px]'>
          Problems trying to resolve
          the conflict between
        </h2>
        <h2 className='text-[#737373] text-center text-[14px] w-[287px] lg:w-[447px] font-[400] leading-[20px]'>
          Problems trying to resolve the conflict
          between the two major realms of Classical physics:
        </h2>
        <h2 className='font-[700] text-[24px] leading-[32px] text-[#23856D]'>$16.48</h2>
        <button className='w-[292px] h-[52px] rounded-[5px] flex justify-center items-center text-[14px] font-[700] text-[#fff] leading-[22px] bg-[#23A6F0] active:text-[#23A6F0]'>
          Click here
        </button>
      </div>

    </main>
  );
}


