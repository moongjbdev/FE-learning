import ArrowDown from "../assets/Navigation/ArrowDown.svg";
import ArrowUp from "../assets/Navigation/ArrowUp.svg";

import Map from "../assets/Navigation/MapPinLine.svg";
import Compare from "../assets/Navigation/Compare.svg";
import Headphones from "../assets/Navigation/Headphones.svg";
import Info from "../assets/Navigation/Info.svg";
import PhoneCall from "../assets/Navigation/PhoneCall.svg";

import CategoryModal from "./Modal/CategoryModal";
import { useState } from "react";
const Navigation = () => {
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
  return (
    <div className="h-[81px] border-b border-[#E4E7E9]">
      <div className="max-w-main h-full m-auto py-4">
        <div className="flex items-center justify-between">
          {/* fillter */}
          <div className="flex h-12 relative">
            <div
              data-category-button
              // onClick={() => setCategoryModalOpen(!isCategoryModalOpen)}
              onMouseEnter={() => setCategoryModalOpen(true)}
              onMouseLeave={() => setCategoryModalOpen(false)}
              className={`relative flex w-[154px] py-[14px] px-6 ${isCategoryModalOpen ? 'bg-[#FA8232] text-white' : 'bg-[#F2F4F5] text-[#191C1F]'} 
                items-center justify-between cursor-pointer
                ${isCategoryModalOpen ? 'after:content-[""]' : 'after:content-none'}
                after:h-3 after:w-full after:translate-y-3 
                after:absolute after:left-0 after:bottom-0 
                after:bg-transparent after:z-50 `}>
              <span className="font-medium text-sm mr-2">All Category</span>
              <img src={isCategoryModalOpen ? ArrowUp : ArrowDown} alt="arrow-down" className="w-4 h-4" />
              <CategoryModal
                isOpen={isCategoryModalOpen}
                onClose={() => setCategoryModalOpen(false)}
              />
            </div>
            {/* Map */}
            <div className="h-full py-[14px] ml-6 flex items-center justify-start cursor-pointer">
              <img src={Map} alt="" className="w-6 h-6 mr-[6px]" />
              <span className="text-[#5F6C72] text-[14px] font-normal">Track Order</span>
            </div>
            {/* Compare */}
            <div className="h-full py-[14px] ml-6 flex items-center justify-start cursor-pointer">
              <img src={Compare} alt="" className="w-6 h-6 mr-[6px]" />
              <span className="text-[#5F6C72] text-[14px] font-normal ">Compare</span>
            </div>
            {/* Customer support */}
            <div className="h-full py-[14px] ml-6 flex items-center justify-start cursor-pointer">
              <img src={Headphones} alt="" className="w-6 h-6 mr-[6px]" />
              <span className="text-[#5F6C72] text-[14px] font-normal ">Customer Support</span>
            </div>
            {/* Help */}
            <div className="h-full py-[14px] ml-6 flex items-center justify-start cursor-pointer">
              <img src={Info} alt="" className="w-6 h-6 mr-[6px]" />
              <span className="text-[#5F6C72] text-[14px] font-normal ">Need Help</span>
            </div>
          </div>
          {/* Phone number */}
          <div className="flex">
            <img src={PhoneCall} alt="phone-call" className="w-7 h-7 mr-[2px]" />
            <span className="text-[18px] font-normal text-[#191C1F]">+84 396.979.999</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
