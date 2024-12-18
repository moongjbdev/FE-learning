// ShopPage.js

import CategoryFilter from "../components/Filter/CategoryFilter";

import { useEffect, useState } from 'react';
import PriceRange from "../components/Filter/PriceFilter";
import PopularTagsFilter from "../components/Filter/PopularTagsFilter";
import BrandsFilter from "../components/Filter/BrandsFilter";



const categorys = ["Electronics Devices", "Computer & Laptop",
  "Computer Accessories", "SmartPhone", "Headphone",
  "Mobile Accessories", "Gaming Console", "Camera & Photo",
  "TV & Homes Appliances", "Watchs & Accessories", "GPS & Navigation", "Warable Technology"
];

const popularTags = ["Game", "Iphone", "TV", "GPS",
  "Asus Laptops", "Macbook", "SSD", "Graphics Card",
  "Power Bank", "Smart TV", "Speaker", "Tablet", "Microwave", "Samsung"
];

const brands = ["Apple", "Google", "Microsoft", "Samsung", "Dell",
  "HP", "Symphony", "Xiaomi", "Sony", "Panasonic", "LG", "Intel", "One Plus"
]

const ShopPage = () => {
  const categoryOnURL = "Electronics Devices"

  const [categoryFilter, setCategoryFilter] = useState(categoryOnURL)

  const [minMaxFilter, setMinMaxFilter] = useState([])

  const [selectedBrands, setSelectedBrands] = useState([]);

  const [selectedTags, setSelectedTags] = useState([]);


  const handleSelectTag = (tag) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag)
        : [...prevSelectedTags, tag]
    );
  };

  const handleSelectBrand = (brand) => {
    setSelectedBrands((prevSelectedBrands) =>
      prevSelectedBrands.includes(brand)
        ? prevSelectedBrands.filter((b) => b !== brand)
        : [...prevSelectedBrands, brand]
    );
  };


  useEffect(() => {
    console.log(categoryFilter)
    console.log(minMaxFilter)
    console.log(selectedTags)
    console.log(selectedBrands)


  }, [categoryFilter, minMaxFilter, selectedTags, selectedBrands])

  return (
    <div className='w-full bg-white mt-10'>
      <div className='max-w-main m-auto h-auto pt-10'>
        {/* Sidebar */}
        <div className='w-[312px] h-[1000px]'>
          {/* Category filter */}
          <div className="pb-6 border-b">
            <h3 className="uppercase font-medium text-[#191C1F] mb-3">Category</h3>
            <CategoryFilter categorys={categorys} selected={categoryFilter} setCategoryFilter={setCategoryFilter} />
          </div>
          {/* Price filter */}
          <div className="mt-6 w-full pb-6 border-b">
            <h3 className="uppercase font-medium text-[#191C1F] mb-3">Price Range</h3>

            <PriceRange min={0} max={1000} setMinMaxFilter={setMinMaxFilter} />
          </div>
          {/* Brand filter */}
          <div className="mt-6 pb-6 border-b">
            <h3 className="uppercase font-medium text-[#191C1F] mb-3">popular Brands</h3>
            <BrandsFilter brands={brands} onSelectBrand={handleSelectBrand} selectedBrands={selectedBrands} />
          </div>
          {/* Popular tags filter */}
          <div className="mt-6 pb-6 border-b">
            <h3 className="uppercase font-medium text-[#191C1F] mb-3">Popular Tag</h3>

            <PopularTagsFilter tags={popularTags} onSelectTag={handleSelectTag} selectedTags={selectedTags} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;