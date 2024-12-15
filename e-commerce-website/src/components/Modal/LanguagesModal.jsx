/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';

import VN from "../../assets/Languages/VN.svg"; 
import USA from "../../assets/Languages/USA.svg"; 

const LanguageModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const languages = [
    {
      code: 'en',
      name: 'English',
      icon: <img src={USA} alt="USA flag" className="w-5 h-5 rounded-full" />
    },
    {
      code: 'vn',
      name: 'Tiếng Việt', 
      icon: <img src={VN} alt="Viet Nam flag" className="w-5 h-5 rounded-full" />
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Kiểm tra xem click có phải là trên modal hay không
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Kiểm tra thêm xem click có phải là trên trigger button không
        const triggerElement = event.target.closest('[data-language-trigger]');
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

  const [selectedLang, setSelectedLang] = useState('en');

  const handleSelectLanguage = (code) => {
    setSelectedLang(code);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div ref={modalRef} className="absolute top-0 right-0 -translate-x-2 translate-y-9 z-10 w-[180px] bg-white py-2 rounded-[3px] border border-[#E4E7E9] shadow-xl">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleSelectLanguage(lang.code)}
          className="flex items-center gap-3 w-full px-4 py-[6px] transition-colors"
        >
          <div className="flex-shrink-0 w-5 h-5">
            {lang.icon}
          </div>
          <span className={`text-sm ${selectedLang === lang.code ? 'text-[#191C1F]' : 'text-[#5F6C72]'}`}>
            {lang.name}
          </span>
          {selectedLang === lang.code && (
            <span className="ml-auto text-[#FA8232]">✓</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default LanguageModal;
