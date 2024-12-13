import Image1 from "../assets/ComputerAccessories/1.png"
import Image2 from "../assets/ComputerAccessories/2.png"
import Image3 from "../assets/ComputerAccessories/3.png"
import Image4 from "../assets/ComputerAccessories/4.png"
import Image5 from "../assets/ComputerAccessories/5.png"
import Image6 from "../assets/ComputerAccessories/6.png"
import Image7 from "../assets/ComputerAccessories/7.png"
import Image8 from "../assets/ComputerAccessories/8.png"
import ArrowRightOrange from "../assets/ComputerAccessories/ArrowRightOrange.svg"
import Heart from "../assets/ComputerAccessories/Heart.svg"
import ShoppingCartSimple from "../assets/ComputerAccessories/ShoppingCartSimple.svg"
import Eye from "../assets/ComputerAccessories/Eye.svg"
import Star from "../assets/ComputerAccessories/Star.svg"

import Hot from "./Tag/Hot"
import Banner1 from "../assets/ComputerAccessories/Banner1.png"
import Banner2 from "../assets/ComputerAccessories/Banner2.png"
import ShopNow from "./Button/ShopNowBigBtn"


const ComputerAccessories = () => {
  return (
    <div className="max-w-main m-auto mt-[72px] min-h-[716px] flex">

      {/* Electronics */}
      <div className="flex-1">
        {/* Heading */}
        <div className="flex items-center justify-between">
          {/* Title */}
          <div>
            <span className="text-2xl text-[#191C1F] font-semibold">Computer Accessories</span>
          </div>
          {/* Fillter product */}
          <div className="flex">
            <div className="p-2 w-fit border-b-2 border-[#FA8232] ">
              <span className="text-sm text-[#191C1F] font-semibold">All Product</span>
            </div>

            <div className="p-2 w-fit">
              <span className="text-sm text-[#5F6C72] font-normal">Keyboard & Mouse</span>
            </div>

            <div className="p-2 w-fit">
              <span className="text-sm text-[#5F6C72] font-normal">Headphone</span>
            </div>

            <div className="p-2 w-fit">
              <span className="text-sm text-[#5F6C72] font-normal">Webcam</span>
            </div>

            <div className="p-2 w-fit">
              <span className="text-sm text-[#5F6C72] font-normal">Printer</span>
            </div>

            {/* Browse all products */}

            <div className="p-2 w-fit flex">
              <span className="text-sm text-[#FA8232] font-semibold">Browse All Product</span>
              <div className="w-5 h-5 ml-2">
                <img src={ArrowRightOrange} alt="arrow" />
              </div>
            </div>
          </div>

        </div>
        <div className="mt-6 grid grid-cols-4 gap-4 relative">
          <div className="w-[234px] h-[320px] border border-[#E4E7E9] rounded-[3px] p-4">
            {/* image */}
            <div className="w-[202px] h-[172px] relative group">
              <img src={Image1} alt="product" className="object-cover" />

              {/* When hover */}
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex w-40 h-12 gap-2">
                  <div className="w-12 h-12 p-2 bg-white flex items-center justify-center rounded-full cursor-pointer">
                    <img src={Heart} alt="heart" />
                  </div>

                  <div className="w-12 h-12 p-2 bg-white flex items-center justify-center rounded-full cursor-pointer">
                    <img src={ShoppingCartSimple} alt="ShoppingCartSimple" />
                  </div>

                  <div className="w-12 h-12 p-2 bg-[#FA8232] flex items-center justify-center rounded-full cursor-pointer">
                    <img src={Eye} alt="Eye" />
                  </div>
                </div>
              </div>
            </div>
            {/* content */}
            <div className="w-full mt-6 flex flex-col gap-2">
              {/* Star */}
              <div className="flex gap-1">
                <img src={Star} alt="star" />
                <span className="text-xs text-[#77878F]">583</span>
              </div>
              {/* Title */}
              <div className="line-clamp-2 overflow-hidden">
                <span className="block text-[14px] font-normal text-[#191C1F]">DELL 21.5 inch Full HD Monitor (E2216HV)</span>
              </div>
              {/* Price */}
              <span className="text-[14px] font-semibold text-[#2DA5F3]">$360</span>
            </div>
            {/* Sale, Hot, Best Deals */}
            <div className="absolute top-3 left-3">
              <Hot />
              {/* <PerOff percent={55}/> */}
              {/* <BestDeals/> */}
              {/* <Sale/> */}
            </div>
          </div>

          <div className="w-[234px] h-[320px] border border-[#E4E7E9] rounded-[3px] p-4">
            {/* image */}
            <div className="w-[202px] h-[172px]">
              <img src={Image2} alt="product" className="object-cover" />
            </div>
            {/* content */}
            <div className="w-full mt-6 flex flex-col gap-2">
              {/* Star */}
              <div className="flex gap-1">
                <img src={Star} alt="star" />
                <span className="text-xs text-[#77878F]">583</span>
              </div>
              {/* Title */}
              <div className="line-clamp-2 overflow-hidden">
                <span className="block text-[14px] font-normal text-[#191C1F]">Portable Wshing Machine, 11lbs capacity Model 18NMF</span>
              </div>
              {/* Price */}
              <span className="text-[14px] font-semibold text-[#2DA5F3]">$2,300</span>
            </div>
          </div>

          <div className="w-[234px] h-[320px] border border-[#E4E7E9] rounded-[3px] p-4">
            {/* image */}
            <div className="w-[202px] h-[172px]">
              <img src={Image3} alt="product" className="object-cover" />
            </div>
            {/* content */}
            <div className="w-full mt-6 flex flex-col gap-2">
              {/* Star */}
              <div className="flex gap-1">
                <img src={Star} alt="star" />
                <span className="text-xs text-[#77878F]">583</span>
              </div>
              {/* Title */}
              <div className="line-clamp-2 overflow-hidden">
                <span className="block text-[14px] font-normal text-[#191C1F]">TOZO T6 True Wireless Earbuds Bluetooth Headphon</span>
              </div>
              {/* Price */}
              <span className="text-[14px] font-semibold text-[#2DA5F3]">$360</span>
            </div>
          </div>

          <div className="w-[234px] h-[320px] border border-[#E4E7E9] rounded-[3px] p-4">
            {/* image */}
            <div className="w-[202px] h-[172px]">
              <img src={Image4} alt="product" className="object-cover" />
            </div>
            {/* content */}
            <div className="w-full mt-6 flex flex-col gap-2">
              {/* Star */}
              <div className="flex gap-1">
                <img src={Star} alt="star" />
                <span className="text-xs text-[#77878F]">583</span>
              </div>
              {/* Title */}
              <div className="line-clamp-2 overflow-hidden">
                <span className="block text-[14px] font-normal text-[#191C1F]">Dell Optiplex 7000x7480 All-in-One Computer Monitor</span>
              </div>
              {/* Price */}
              <span className="text-[14px] font-semibold text-[#2DA5F3]">$80</span>
            </div>
          </div>

          <div className="w-[234px] h-[320px] border border-[#E4E7E9] rounded-[3px] p-4">
            {/* image */}
            <div className="w-[202px] h-[172px]">
              <img src={Image5} alt="product" className="object-cover" />
            </div>
            {/* content */}
            <div className="w-full mt-6 flex flex-col gap-2">
              {/* Star */}
              <div className="flex gap-1">
                <img src={Star} alt="star" />
                <span className="text-xs text-[#77878F]">583</span>
              </div>
              {/* Title */}
              <div className="line-clamp-2 overflow-hidden">
                <span className="block text-[14px] font-normal text-[#191C1F]">Samsung Electronics Samsung Galexy S21 5G</span>
              </div>
              {/* Price */}
              <span className="text-[14px] font-semibold text-[#2DA5F3]">$1,500</span>
            </div>
          </div>

          <div className="w-[234px] h-[320px] border border-[#E4E7E9] rounded-[3px] p-4">
            {/* image */}
            <div className="w-[202px] h-[172px]">
              <img src={Image6} alt="product" className="object-cover" />
            </div>
            {/* content */}
            <div className="w-full mt-6 flex flex-col gap-2">
              {/* Star */}
              <div className="flex gap-1">
                <img src={Star} alt="star" />
                <span className="text-xs text-[#77878F]">583</span>
              </div>
              {/* Title */}
              <div className="line-clamp-2 overflow-hidden">
                <span className="block text-[14px] font-normal text-[#191C1F]">4K UHD LED Smart TV with Chromecast Built-in</span>
              </div>
              {/* Price */}
              <span className="text-[14px] font-semibold text-[#2DA5F3]">$70</span>
            </div>
          </div>

          <div className="w-[234px] h-[320px] border border-[#E4E7E9] rounded-[3px] p-4">
            {/* image */}
            <div className="w-[202px] h-[172px]">
              <img src={Image7} alt="product" className="object-cover" />
            </div>
            {/* content */}
            <div className="w-full mt-6 flex flex-col gap-2">
              {/* Star */}
              <div className="flex gap-1">
                <img src={Star} alt="star" />
                <span className="text-xs text-[#77878F]">583</span>
              </div>
              {/* Title */}
              <div className="line-clamp-2 overflow-hidden">
                <span className="block text-[14px] font-normal text-[#191C1F]">Wired Over-Ear Gaming Headphones with USB</span>
              </div>
              {/* Price */}
              <span className="text-[14px] font-semibold text-[#2DA5F3]">$250</span>
            </div>
          </div>

          <div className="w-[234px] h-[320px] border border-[#E4E7E9] rounded-[3px] p-4">
            {/* image */}
            <div className="w-[202px] h-[172px]">
              <img src={Image8} alt="product" className="object-cover" />
            </div>
            {/* content */}
            <div className="w-full mt-6 flex flex-col gap-2">
              {/* Star */}
              <div className="flex gap-1">
                <img src={Star} alt="star" />
                <span className="text-xs text-[#77878F]">583</span>
              </div>
              {/* Title */}
              <div className="line-clamp-2 overflow-hidden">
                <span className="block text-[14px] font-normal text-[#191C1F]">Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...</span>
              </div>
              {/* Price */}
              <span className="text-[14px] font-semibold text-[#2DA5F3]">$220</span>
            </div>
          </div>

        </div>
      </div>
      {/* Banner */}
      <div className="ml-6 w-[312px] flex flex-col gap-6">
        <div className="relative w-full h-[428px] rounded overflow-hidden">
          <img src={Banner1} alt="banner" className="w-full h-full object-cover block" />
          <div className="absolute bottom-20 right-1/2 translate-x-1/2">
            <ShopNow />
          </div>
        </div>
        <div className="relative flex-1 rounded overflow-hidden">
          <img src={Banner2} alt="banner" className="w-full h-full object-cover block" />
          <div className="absolute bottom-8 right-1/2 translate-x-1/2">
            <ShopNow />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComputerAccessories
