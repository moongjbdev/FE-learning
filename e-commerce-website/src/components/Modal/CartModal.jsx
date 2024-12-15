/* eslint-disable react/prop-types */
import Image1 from "../../assets/CartModal/1.png"
import Image2 from "../../assets/CartModal/2.png"
import ArrowRight from "../../assets/CartModal/ArrowRight.svg"


import { useState, useRef, useEffect } from 'react';


const CartModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  // Logic xử lý click outside tương tự như SignInModal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        const triggerElement = event.target.closest('[data-cart-trigger]');
        if (!triggerElement) {
          onClose();
        }
      }
    };

    if (isOpen) {
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 0);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="absolute top-full right-0 translate-y-3 z-10 w-[400px] bg-white rounded border border-[#E4E7E9] shadow-xl"
    >
      {/* Header */}
      <div className="p-4 border-b border-[#E4E7E9] flex justify-between items-center">
        <h3 className="text-[#191C1F] font-medium">Shopping Cart <span className='text-[#FA8232]'>02</span></h3>
      </div>

      {/* Cart Items */}
      <div className="p-4 max-h-[400px] flex flex-col gap-2 overflow-y-auto">
        {/* Item 1 */}
        <div className="flex gap-4">
          <img src={Image1} alt="product" className="w-20 h-20 object-cover" />
          <div className="flex-1 flex items-center justify-between">
            <div>
              <h4 className="text-[#191C1F] font-medium line-clamp-2">Canon EOS 1500D DSLR Camera Body+ 18-55 mm Canon EOS 1500D DSLR Camera Body+ 18-55 mm</h4>
              <div className="flex justify-between mt-2">
                <div>
                  <span className="text-[#5F6C72]">1 x </span>
                  <span className="text-[#2DA5F3] font-semibold">$1,500</span>
                </div>
              </div>
            </div>
            <button className="text-[#C7CBD1] text-xl">×</button>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex gap-4">
          <img src={Image2} alt="product" className="w-20 h-20 object-cover" />
          <div className="flex-1 flex items-center justify-between">
            <div>
              <h4 className="text-[#191C1F] font-medium line-clamp-2">Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone</h4>
              <div className="flex justify-between mt-2">
                <div>
                  <span className="text-[#5F6C72]">2 x </span>
                  <span className="text-[#2DA5F3] font-semibold">$269</span>
                </div>
              </div>
            </div>
            <button className="text-[#C7CBD1] text-xl">×</button>
          </div>
        </div>
        <div className="flex gap-4">
          <img src={Image2} alt="product" className="w-20 h-20 object-cover" />
          <div className="flex-1 flex items-center justify-between">
            <div>
              <h4 className="text-[#191C1F] font-medium line-clamp-2">Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone</h4>
              <div className="flex justify-between mt-2">
                <div>
                  <span className="text-[#5F6C72]">2 x </span>
                  <span className="text-[#2DA5F3] font-semibold">$269</span>
                </div>
              </div>
            </div>
            <button className="text-[#C7CBD1] text-xl">×</button>
          </div>
        </div>
        <div className="flex gap-4">
          <img src={Image2} alt="product" className="w-20 h-20 object-cover" />
          <div className="flex-1 flex items-center justify-between">
            <div>
              <h4 className="text-[#191C1F] font-medium line-clamp-2">Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone</h4>
              <div className="flex justify-between mt-2">
                <div>
                  <span className="text-[#5F6C72]">2 x </span>
                  <span className="text-[#2DA5F3] font-semibold">$269</span>
                </div>
              </div>
            </div>
            <button className="text-[#C7CBD1] text-xl">×</button>
          </div>
        </div>
        <div className="flex gap-4">
          <img src={Image2} alt="product" className="w-20 h-20 object-cover" />
          <div className="flex-1 flex items-center justify-between">
            <div>
              <h4 className="text-[#191C1F] font-medium line-clamp-2">Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone</h4>
              <div className="flex justify-between mt-2">
                <div>
                  <span className="text-[#5F6C72]">2 x </span>
                  <span className="text-[#2DA5F3] font-semibold">$269</span>
                </div>
              </div>
            </div>
            <button className="text-[#C7CBD1] text-xl">×</button>
          </div>
        </div>
      </div>

      {/* Sub Total */}
      <div className="px-4 py-3 border-t border-[#E4E7E9] flex justify-between items-center">
        <span className="text-[#475156] font-normal">Sub-Total:</span>
        <span className="text-[#2DA5F3] font-medium">$2038.00 USD</span>
      </div>

      {/* Buttons */}
      <div className="p-4 flex flex-col gap-2">
        <button className="w-full h-12 bg-[#FA8232] text-white text-[14px] uppercase font-bold rounded flex items-center justify-center gap-2">
          Checkout Now
          <img src={ArrowRight} alt="arrow" className="w-5 h-5" />
        </button>
        <button className="w-full h-12 border border-[#FFE7D6] text-[#FA8232] uppercase font-bold rounded">
          View Cart
        </button>
      </div>
    </div>
  );
};

export default CartModal;