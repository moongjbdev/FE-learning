/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';


const Currency = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const languages = [
    {
      code: 'usd',
      currency: 'Dollar (USD)',
    },
    {
      code: 'vnd',
      currency: 'Đồng (VND)', 
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Kiểm tra xem click có phải là trên modal hay không
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Kiểm tra thêm xem click có phải là trên trigger button không
        const triggerElement = event.target.closest('[data-currency-trigger]');
        if (!triggerElement) {
          onClose();
        }
      }
    };
  
    if (isOpen) {
      // Sử dụng setTimeout để đảm bảo event listener được thêm vào sau khi click hiện tại đã xử lý xong
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 0);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const [selectedCurrency, setSelectedCurrency] = useState('usd');

  const handleSelectLanguage = (code) => {
    setSelectedCurrency(code);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div ref={modalRef} className="absolute top-0 left-0 -translate-x-2 translate-y-9 z-10 w-[180px] bg-white py-2 rounded-[3px] border border-[#E4E7E9] shadow-xl">
      {languages.map((curency) => (
        <button
          key={curency.code}
          onClick={() => handleSelectLanguage(curency.code)}
          className="flex items-center w-full px-4 py-2 transition-colors"
        >
          <span className={`text-sm font-medium ${selectedCurrency === curency.code ? 'text-[#FA8232]' : 'text-[#5F6C72]'}`}>
            {curency.currency}
          </span>
          {selectedCurrency === curency.code && (
            <span className="ml-auto text-[#FA8232]">✓</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default Currency;
