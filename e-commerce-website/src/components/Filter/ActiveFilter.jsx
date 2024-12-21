/* eslint-disable react/prop-types */
import CloseTag from "../../assets/ActiveFilter/X.svg"


// Tạo Filter Tag
const FilterTag = ({ label, onRemove, removable = true }) => ( // Thêm prop removable
  <div className="flex items-center gap-1 flex-shrink-0 px-2 py-1 rounded">
    <span className={`text-sm font-normal ${removable ? 'text-[#191C1F]' : 'text-[#FA8232] font-semibold'}`}>{label}</span>
    {removable && label && (
      <button onClick={onRemove} className="">
        <img src={CloseTag} alt="" />
      </button>
    )}
  </div>
);

const convertToTagPrice = (priceRange) => {
  // Kiểm tra input hợp lệ
  if (!Array.isArray(priceRange) || priceRange.length !== 2) return null;
  
  const [min, max] = priceRange;
  
  // Kiểm tra giá trị min, max có hợp lệ
  if (min === undefined || max === undefined) return null;
  if (min === null || max === null) return null;
  if (min === '' || max === '') return null;
  
  // Chuyển đổi sang số và kiểm tra
  const numMin = Number(min);
  const numMax = Number(max);
  
  if (isNaN(numMin) || isNaN(numMax)) return null;
  if (numMin < 0 || numMax < 0) return null;
  
  // Format số có dấu phẩy ngăn cách hàng nghìn
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US').format(price);
  };

  // Các trường hợp đặc biệt
  if (numMin === 0 && numMax === 0) return "Free";
  if (numMin === 0) return `Under $${formatPrice(numMax)}`;
  if (numMax === 0) return `From $${formatPrice(numMin)}`;
  
  // Trường hợp thông thường
  return `$${formatPrice(numMin)} - $${formatPrice(numMax)}`;
};

const FilterStatus = ({ filters, onRemove }) => {
  const activeFilters = [
    // Category
    filters.category && {
      id: 'category',
      label: filters.category,
      removable: false
    },
    // Price Range
    filters.priceRange && convertToTagPrice(filters.priceRange) !== null && {
      id: 'price',
      label: convertToTagPrice(filters.priceRange)
    },
    // Search
    filters.search && {
      id: 'search',
      label: `"${filters.search}"`
    },
    // Tags
    ...(filters.tags?.map(tag => ({
      id: `tag-${tag}`,
      label: tag
    })) || []),
    // Brands
    ...(filters.brands?.map(brand => ({
      id: `brand-${brand}`,
      label: brand
    })) || [])
  ].filter(Boolean);

  if (activeFilters.length === 0) return null;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 flex-1 overflow-x-hidden">
        <span className="text-sm text-[#5F6C72] whitespace-nowrap">Active Filters:</span>
        {activeFilters.map(filter => (
          <FilterTag 
            key={filter.id}
            label={filter.label}
            onRemove={() => onRemove(filter.id)}
            removable={filter.removable !== false}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterStatus;