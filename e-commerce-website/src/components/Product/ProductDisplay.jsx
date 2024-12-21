/* eslint-disable react/prop-types */
import Star from "../../assets/Products/Star.svg";
import Eye from "../../assets/DisplayProduct/Eye.svg";
import Heart from "../../assets/DisplayProduct/Heart.svg";
import ShoppingCartSimple from "../../assets/DisplayProduct/ShoppingCartSimple.svg";

import { useState } from "react";
import QuickViewModal from "../Modal/QuickViewModal";
import Hot from "../Tag/Hot";
import PerOff from "../Tag/PerOff";
import BestDeals from "../Tag/BestDeals";
import Sale from "../Tag/Sale";


const ProductDisplay = ({ image, title, rating, price }) => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)

  return (
    <div className="w-[234px] h-[320px] border border-[#E4E7E9] rounded-[3px] p-4 relative">
      {/* image */}
      <div className="w-[202px] h-[172px] relative group">
        <img src={image} alt="product" className="object-cover" />

        {/* When hover */}
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex w-40 h-12 gap-2">
            <div className="w-12 h-12 p-2 bg-white flex items-center justify-center rounded-full cursor-pointer">
              <img src={Heart} alt="heart" />
            </div>

            <div className="w-12 h-12 p-2 bg-white flex items-center justify-center rounded-full cursor-pointer">
              <img src={ShoppingCartSimple} alt="ShoppingCartSimple" />
            </div>

            <div className="w-12 h-12 p-2 bg-[#FA8232] flex items-center justify-center rounded-full cursor-pointer" onClick={() => setIsQuickViewOpen(true)}>
              <img src={Eye} alt="Eye" />
              <QuickViewModal
                isOpen={isQuickViewOpen}
                onClose={() => setIsQuickViewOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="w-full mt-6 flex flex-col gap-2">
        {/* Star */}
        <div className="flex gap-1">
          <img src={Star} alt="star" />
          <span className="text-xs text-[#77878F]">{rating}</span>
        </div>
        {/* Title */}
        <div className="line-clamp-2 overflow-hidden">
          <span className="block text-[14px] font-normal text-[#191C1F]">{title}</span>
        </div>
        {/* Price */}
        <span className="text-[14px] font-semibold text-[#2DA5F3]">${price}</span>
      </div>
      {/* Sale, Hot, Best Deals */}
      <div className="absolute top-3 left-3">
        {/* <Hot /> */}
        <PerOff percent={55}/>
        {/* <BestDeals/> */}
        {/* <Sale/> */}
      </div>
    </div>
  );
}

export default ProductDisplay;