/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Close from "../../assets/QuickViewModal/X.svg";
import MainImage from "../../assets/QuickViewModal/main.png";
import Image1 from "../../assets/QuickViewModal/image1.png";
import Image2 from "../../assets/QuickViewModal/image2.png";
import Image3 from "../../assets/QuickViewModal/image3.png";
import Image4 from "../../assets/QuickViewModal/image4.png";
import Image5 from "../../assets/QuickViewModal/image5.png";

import bitcoin from "../../assets/QuickViewModal/bitcoin.png";
import card from "../../assets/QuickViewModal/card.png";
import paypal from "../../assets/QuickViewModal/paypal.png";
import visa from "../../assets/QuickViewModal/visa.png";


import Star from "../../assets/QuickViewModal/Star.svg";
import ShoppingCartSimple from "../../assets/QuickViewModal/ShoppingCartSimple.svg";
import Minus from "../../assets/QuickViewModal/Minus.svg";
import Plus from "../../assets/QuickViewModal/Plus.svg";
import ArrowsClockwise from "../../assets/QuickViewModal/ArrowsClockwise.svg";
import Facebook from "../../assets/QuickViewModal/Facebook.svg";
import Heart from "../../assets/QuickViewModal/Heart.svg";
import Twitter from "../../assets/QuickViewModal/Twitter.svg";
import Copy from "../../assets/QuickViewModal/Copy.svg";
import Pinterest from "../../assets/QuickViewModal/Pinterest.svg";



import CustomSelect from "../CustomSelect/CustomSelect";
import { useState, useRef, useEffect } from 'react';

const QuickViewModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    if (type === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === 'increment') {
      setQuantity(quantity + 1);
    }
  };

  //Data fake
  const product = {
    id: 1,
    name: '2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray',
    price: 199.99,
    mainImage: MainImage,
    images: [
      Image1, Image2, Image3, Image4, Image5, Image5
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in consectetur turpis, vitae pharetra mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    category: 'Electronics Devices',
    brand: 'Apple',
    quantity: 10,
    rating: 4.5,
    totalRating: 2808,
    inStock: false,

    fillter: {
      color: ["yellow", "green", "red", "orange"],
      size: ["13 inch", "15 inch", "17 inch"],
      memory: ["8GB", "16GB", "32GB"],
      storage: ["256GB SSD", "512GB SSD", "1TB SSD"],
      // processor: ["Intel Core i5", "Intel Core i7", "AMD Ryzen 5"],
      // display: ["13.3-inch", "15.6-inch", "17.3-inch"],
      // camera: ["12 MP", "10 MP", "8 MP"],
      // battery: ["4500 mAh", "5000 mAh", "6000 mAh"],
    }

  }

  const [selectedFilter, setSelectedFilter] = useState({});

  useEffect(() => {
    // Khi dữ liệu product được load, cập nhật state cho các bộ lọc
    const initialFilters = {};

    if (product && product.fillter) {
      Object.keys(product.fillter).forEach((filterType) => {
        initialFilters[filterType] = '';  // Khởi tạo state với giá trị mặc định rỗng
      });
      setSelectedFilter(initialFilters); // Cập nhật state với các bộ lọc có sẵn
    }
  }, []); // Khi product thay đổi, thực hiện lại useEffect

  const handleFilterChange = (filterType, value) => {
    setSelectedFilter((prevFilter) => ({
      ...prevFilter,
      [filterType]: value, // Cập nhật giá trị được chọn cho loại filter
    }));
  };

  //Xử lý ảnh
  const [selectedImage, setSelectedImage] = useState(product.mainImage);
  //Xử lý click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">

      <div ref={modalRef} className="bg-white w-[1400px] h-[754px] rounded-lg relative p-10">
        {/* Close button */}
        <div
          onClick={(e) => {
            e.stopPropagation() // ngăn bubble lên phần tử cha
            onClose();
          }}
          className="absolute right-0 translate-x-20 flex p-3 rounded-full w-12 h-12 text-white bg-[#233038] z-10 cursor-pointer"
        >
          <img src={Close} />
        </div>
        <div className="flex gap-10">
          {/* Left: Image gallery */}
          <div className="w-[616px] overflow-hidden">
            <div className="h-[464px] border border-[##5F6C72] rounded mb-6 flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {[product.mainImage, ...product.images]?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  onClick={() => setSelectedImage(img)} // Thêm onClick handler
                  className={`w-[96px] h-[96px] object-cover cursor-pointer border rounded
              ${selectedImage === img
                      ? 'border-[#FA8232]' // Style khi ảnh được chọn
                      : 'border-[#5F6C72] hover:border-[#FA8232]'
                    }`}
                />
              ))}

            </div>
          </div>



          <div className="flex flex-col flex-1 gap-6">
            {/* general properties  */}
            <div className="border-b pb-6">
              {/* rating */}
              <div className="flex gap-1 mb-2">
                <img src={Star} alt="star" />
                <span className="text-sm font-semibold text-[#191C1F]">{product.rating} Star Rating</span>
                <span className="text-sm font-normal text-[#77878F]">({product.totalRating}  User feedback)</span>
              </div>
              {/* title */}
              <div className="h-[56px] line-clamp-2 border-none outline-none mb-4">
                <h2 className="text-[20px] font-medium">2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray 2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray</h2>
              </div>
              {/* infor */}
              <div className="grid  grid-cols-2 gap-y-2 text-[14px] border-none outline-none">
                {/* Row 1 */}
                <div className="flex col-span-2 gap-1">
                  <span className="text-[#77878F]">Availability:</span>
                  {product.inStock ? <strong className="text-[#32CD32]">In Stock</strong> : <strong className="text-[#ec5757]">Out Of Stock</strong>}
                </div>

                {/* Row 2 */}
                <div className="flex gap-1">
                  <span className="text-[#77878F]">Brand:</span>
                  <strong className="text-[#191C1F]">{product.brand}</strong>
                </div>
                <div className="flex gap-1">
                  <span className="text-[#77878F]">Category:</span>
                  <strong className="text-[#191C1F]">{product.category}</strong>
                </div>
              </div>
              {/* Price */}
              <div className="mt-6 border-none outline-none">
                <span className="text-[#2DA5F3] text-2xl font-semibolds">${product.price}</span>
              </div>
            </div>
            {/* fillter */}
            <div className="pb-6 border-b">
              {/* Render các bộ lọc động */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[165px] overflow-y-auto">
                {product.fillter && Object.keys(product.fillter).map((filterType) => (
                  <div key={filterType} className="items-center">
                    <label htmlFor={filterType} className="block text-[#191C1F] text-sm mb-2 capitalize">
                      {filterType}
                    </label>
                    {filterType === 'color' ? (
                      <div className="flex gap-3 mt-2 flex-wrap">
                        {product.fillter[filterType].map((color, index) => (
                          <div
                            key={index}
                            className={`p-[6px] rounded-full flex items-center ${selectedFilter[filterType] === color
                              ? 'border-[2px] border-solid border-[#FA8232]'
                              : ''
                              }`}
                          >
                            <button
                              onClick={() => handleFilterChange(filterType, color)}
                              className={`w-[40px] h-[40px] rounded-full`}
                              style={{ backgroundColor: color }}
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <CustomSelect
                        options={product.fillter[filterType]}
                        value={selectedFilter[filterType]}
                        onChange={(value) => handleFilterChange(filterType, value)}
                      />
                    )}
                  </div>
                ))}
              </div>

            </div>
            {/* buttons */}
            <div className="h-[68px] pt-3 flex items-center justify-between">
              {/* quantily */}
              <div className="flex w-[164px] h-full py-4 px-5 items-center justify-between border rounded">
                <button onClick={() => handleQuantityChange('decrement')}>
                  <img src={Minus} alt="Minus" />
                </button>
                <span className="text-[#191C1F]">{quantity}</span>
                <button onClick={() => handleQuantityChange('increment')}>
                  <img src={Plus} alt="Plus" />
                </button>
              </div>
              <div className="bg-[#FA8232] h-full w-[310px] flex gap-2 items-center justify-center rounded cursor-pointer">
                <span className="uppercase text-white">Add to card</span>
                <img src={ShoppingCartSimple} alt="cart" className="w-6 h-6" />
              </div>
              <div className="h-full w-[142px] border-[2px] border-[#FA8232] rounded flex items-center justify-center">
                <span className="uppercase text-[#FA8232]">Buy now</span>
              </div>
            </div>
            {/* actions */}
            <div className="flex items-center justify-between">
              {/* action */}
              <div className="flex gap-6">
                <div className="flex items-center gap-[6px] cursor-pointer">
                  <img src={Heart} alt="heart" className="w-6 h-6" />
                  <span className="text-[#77878F] text-sm">Add to Wishlist</span>
                </div>
                <div className="flex items-center gap-[6px] cursor-pointer">
                  <img src={ArrowsClockwise} alt="compare" className="w-6 h-6" />
                  <span className="text-[#77878F] text-sm">Add to Comparet</span>
                </div>
              </div>
              {/* share */}
              <div className="flex items-center gap-3">
                <span className="text-[#77878F] text-sm">
                  Share product:
                </span>
                <div className="flex gap-3 items-center">
                  <a className="no-underline cursor-pointer">
                    <img src={Copy} alt="copy" className="w-6 h-6" />
                  </a>
                  <a className="no-underline cursor-pointer">
                    <img src={Facebook} alt="facebook" className="w-4 h-4" />
                  </a>
                  <a className="no-underline cursor-pointer">
                    <img src={Twitter} alt="Twitter" className="w-4 h-4" />
                  </a>
                  <a className="no-underline cursor-pointer">
                    <img src={Pinterest} alt="Pinterest" className="w-4 h-4" />
                  </a>

                </div>
              </div>
            </div>
            {/* footer */}
            <div className="p-5 border h-full flex gap-3">
              <span className="text-[#191C1F] text-sm">100% Guarantee Safe Checkout</span>
              <div className="flex h-[18px] items-center gap-2">
                <img src={visa} alt="payment methods" className="object-contain block h-[24px]" />
                <img src={card} alt="payment methods" className="object-contain block h-[24px]" />
                <img src={paypal} alt="payment methods" className="object-contain block h-[24px]" />
                <img src={bitcoin} alt="payment methods" className="object-contain block h-[24px]" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;