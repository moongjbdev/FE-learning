/* eslint-disable react/prop-types */
import CaretRight from "../../assets/Categorys/CaretRight.svg";
import { useState, useEffect, useRef } from 'react';

const categories = {
  'Computer & Laptop': {
    subCategories: ['Laptops', 'Desktop PCs', 'Gaming PCs', 'Monitors']
  },
  'SmartPhone': {
    subCategories: ['Apple', 'Samsung', 'Xiaomi', 'Oppo', 'Vivo']
  },
  'Mobile Accessories': {
    subCategories: ['Cases', 'Chargers', 'Screen Protectors', 'Power Banks']
  },
  'Gaming Console': {
    subCategories: ['PlayStation', 'Xbox', 'Nintendo', 'Gaming Accessories']
  },
};

const CategoryModal = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Kiểm tra xem click có phải là trên nút "All Category" không
        const allCategoryButton = document.querySelector('[data-category-button]');
        if (!allCategoryButton?.contains(event.target)) {
          setSelectedCategory(null)
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSelectedCategory = (fillter) => {
    console.log("Category: ", JSON.stringify(fillter))
    setSelectedCategory(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="absolute left-0 bottom-0 translate-y-3 z-50">
      <div ref={modalRef} className="absolute left-0 flex shadow-lg">
        {/* Main Categories */}
        <div className="relative">
          <div className="w-64 bg-white py-3 border border-[#E4E7E9] rounded-sm shadow-xl">
            {Object.keys(categories).map((category) => (
              <div
                key={category}
                className={`px-4 py-3 cursor-pointer hover:bg-gray-100 group flex justify-between items-center
                ${selectedCategory === category ? 'bg-gray-100' : ''}
                ${selectedCategory === category ? 'after:content-[""]' : 'after:content-none'}
                after:absolute after:right-0 after:top-0 after:h-full after:w-3
                after:translate-x-full after:bg-transparent after:z-50
                `}
                onMouseEnter={() => setSelectedCategory(category)}
                onClick={() => handleSelectedCategory({ category: category})}
              >
                <span className="text-[#5F6C72] group-hover:text-[#191C1F]">{category}</span>
                {categories[category].subCategories && (
                  <img
                    src={CaretRight}
                    alt="arrow-right"
                    className={`w-4 h-4 ${
                      selectedCategory === category ? 'block' : 'hidden group-hover:block'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Sub Categories */}
        {selectedCategory && (
          <div className="absolute left-full translate-x-3 top-0 w-64 py-3 bg-white border border-[#E4E7E9] rounded-sm shadow-xl"
            onMouseLeave={() => setSelectedCategory(null)}
          >
            {categories[selectedCategory].subCategories.map((subCategory) => (
              <div
                key={subCategory}
                className="px-4 py-3 cursor-pointer hover:bg-gray-100 text-[#5F6C72] hover:text-[#191C1F]"
                onClick={() => handleSelectedCategory({ category: selectedCategory, subCategorie: subCategory})}
              >
                {subCategory}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default CategoryModal
