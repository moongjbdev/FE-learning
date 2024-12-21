// ShopPage.js

import CategoryFilter from "../components/Filter/CategoryFilter";

import { useEffect, useState } from 'react';
import PriceRange from "../components/Filter/PriceFilter";
import PopularTagsFilter from "../components/Filter/PopularTagsFilter";
import BrandsFilter from "../components/Filter/BrandsFilter";
import SearchInput from "../components/Filter/SearchInput";
import CustomSelect from "../components/CustomSelect/CustomSelect";
import FilterStatus from "../components/Filter/ActiveFilter";
import ProductDisplay from "../components/Product/ProductDisplay";

import Image from "../assets/ShopPage/image.png"
import Pagination from "../components/Pagination/Pagination";


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

const SORT_TYPES = [
  {
    id: 'popular',
    label: 'Popular',
    value: 'popular'
  },
  {
    id: 'newest',
    label: 'Newest',
    value: 'newest'
  },
  {
    id: 'price_asc',
    label: 'Price: Low to High',
    value: 'price_asc'
  },
  {
    id: 'price_desc',
    label: 'Price: High to Low',
    value: 'price_desc'
  },
  {
    id: 'name_asc',
    label: 'Name: A-Z',
    value: 'name_asc'
  },
  {
    id: 'name_desc',
    label: 'Name: Z-A',
    value: 'name_desc'
  },
  {
    id: 'discount',
    label: 'Discount',
    value: 'discount'
  },
  {
    id: 'rating',
    label: 'Highest Rated',
    value: 'rating'
  }
];

const products = [
  {
    id: 8,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 85,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 853675,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 8575,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 855635,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 855565,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 855455,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 85553454125,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 835555,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 855555,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 8555555,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 855453555,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 8554555,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 85553455,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 85528255,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 85555245675,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 8342456534,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 24578,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 824523456,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 83657,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 81234,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 65378,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 35356868,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  },
  {
    id: 835687357,
    image: Image,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    rating: "(533)",
    price: "220.00"
  }
];

const ShopPage = () => {
  const categoryOnURL = "Electronics Devices"

  const [categoryFilter, setCategoryFilter] = useState(categoryOnURL)

  const [minMaxFilter, setMinMaxFilter] = useState([])

  const [selectedBrands, setSelectedBrands] = useState([]);

  const [selectedTags, setSelectedTags] = useState([]);

  const [searchValue, setSearchValue] = useState(null)

  const [currentSort, setCurrentSort] = useState(SORT_TYPES[0].label)

  const [currentPage, setCurrentPage] = useState(1);
  const totalProductsFound = 500
  const totalPages = Math.ceil(totalProductsFound / 24)

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("redirect to", page)
  };


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

  const handleSort = (selectedLabel) => {
    // Tìm option có label được chọn và lấy value của nó
    const selectedOption = SORT_TYPES.find(option => option.label === selectedLabel);
    if (selectedOption) {
      setCurrentSort(selectedOption.label)
      // lay tiep id de sort
    }
  };

  const handleRemoveFilter = (filterId) => {
    if (filterId === 'category') setCategoryFilter('');
    else if (filterId === 'price') setMinMaxFilter([]);
    else if (filterId === 'search') setSearchValue(null);
    else if (filterId.startsWith('tag-')) {
      const tag = filterId.replace('tag-', '');
      setSelectedTags(prev => prev.filter(t => t !== tag));
    }
    else if (filterId.startsWith('brand-')) {
      const brand = filterId.replace('brand-', '');
      setSelectedBrands(prev => prev.filter(b => b !== brand));
    }
  };

  useEffect(() => {
    console.log(categoryFilter)
    console.log(minMaxFilter)
    console.log(selectedTags)
    console.log(selectedBrands)
    console.log(searchValue)


  }, [categoryFilter, minMaxFilter, selectedTags, selectedBrands, searchValue])

  return (
    <div className='w-full bg-white mt-10'>
      <div className='max-w-main m-auto mb-[72px] h-auto pt-10 flex gap-x-6'>
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

            <PriceRange valueMinNow={minMaxFilter[0] ? minMaxFilter[0] : null} valueMaxNow={minMaxFilter[1] ? minMaxFilter[1] : null} setMinMaxFilter={setMinMaxFilter} />
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
        {/* RIGHT */}
        <div className="flex-1 flex flex-col">
          {/* Filter bar */}
          <div className="flex items-center justify-between">
            {/* Search */}
            <div className="w-[424px] h-[44px]">
              <SearchInput onChange={setSearchValue} />
            </div>
            {/* Sort */}
            <div className="flex items-center gap-x-3">
              <span className="text-sm text-[#191C1F] font-normal">Sort by:</span>
              <div className="w-[180px] h-[44px]">
                <CustomSelect value={currentSort} options={SORT_TYPES.map((option) => option.label)} onChange={handleSort} />
              </div>
            </div>
          </div>
          {/* Filter status */}
          <div className="flex items-center justify-between bg-[#F2F4F5] h-[44px] rounded mt-4 px-4">
            {/* Active filter */}
            <div className="flex items-center w-[750px] overflow-x-hidden">
              <FilterStatus
                filters={{
                  category: categoryFilter,
                  priceRange: minMaxFilter,
                  search: searchValue,
                  tags: selectedTags,
                  brands: selectedBrands
                }}
                onRemove={handleRemoveFilter}
              />
            </div>
            {/* total found */}
            <div className="flex flex-1 justify-end gap-1 flex-shrink-0">
              <span className="text-sm font-semibold text-[#191C1F]">65,867</span>
              <span className="text-sm text-[#5F6C72]">Results found.</span>
            </div>
          </div>
          {/* Display product */}
          <div className="grid grid-cols-4 gap-4 h-auto">
            {products.map((product) => (
              <div key={product.id} className="">
                <ProductDisplay
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  rating={product.rating}
                  price={product.price}
                />
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="mt-10">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;