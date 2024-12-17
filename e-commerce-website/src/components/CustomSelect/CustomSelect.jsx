/* eslint-disable react/prop-types */
import CaretDown from "../../assets/CustomSelect/CaretDown.svg" 
import { useState } from 'react';
const CustomSelect = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-1 p-2 border border-[#E4E7E9] rounded-md w-full text-left flex justify-between items-center"
      >
        <span className="text-[#475156] text-sm font-normal">{value || 'Select an option'}</span>
        <span className="transform transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <img src={CaretDown} className=""/>
        </span>
      </button>
      {isOpen && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 w-full">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              <span className="text-[#475156] text-sm font-normal">{option}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect
