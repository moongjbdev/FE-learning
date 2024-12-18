/* eslint-disable react/prop-types */
import Star from "../../assets/Products/Star.svg";

const ProductDisplay = ({ image, title, rating, price }) => {
  return (
    <div className="w-[234px] h-[320px] border border-[#E4E7E9] rounded-[3px] p-4">
      {/* Image */}
      <div className="w-[202px] h-[172px]">
        <img src={image} alt="product" className="object-cover" />
      </div>
      {/* Content */}
      <div className="w-full mt-6 flex flex-col gap-2">
        {/* Star */}
        <div className="flex gap-1">
          <img src={Star} alt="star" />
          <span className="text-xs text-[#77878F]">{rating}</span>
        </div>
        {/* Title */}
        <div className="line-clamp-2 overflow-hidden">
          <span className="block text-[14px] font-normal text-[#191C1F]">{title}</span>
        </div>
        {/* Price */}
        <span className="text-[14px] font-semibold text-[#2DA5F3]">${price}</span>
      </div>
    </div>
  );
}

export default ProductDisplay;