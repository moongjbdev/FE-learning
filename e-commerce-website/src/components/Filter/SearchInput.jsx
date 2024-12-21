/* eslint-disable react/prop-types */
import { useState } from 'react';
import Search from '../../assets/SearchInput/Search.svg'; // Giả sử đường dẫn đến ảnh search

const SearchInput = ({ placeholder = "Search for anything...", onChange}) => {
  const [searchValue, setSearchValue] = useState("")
  const handleSearch = () => {
    onChange(searchValue);
  };
  return (
    <div className={`bg-white border rounded-sm py-[14px] px-5 `}>
      <div className='flex items-center justify-between'>
        <div className='flex-1 mr-3'>
          <input 
            type="text" 
            className='w-full bg-transparent outline-none text-[#191C1F]'
            placeholder={placeholder}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className='cursor-pointer' onClick={handleSearch}>
        <img srcSet={Search} alt="search" className='w-5 h-5' />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;