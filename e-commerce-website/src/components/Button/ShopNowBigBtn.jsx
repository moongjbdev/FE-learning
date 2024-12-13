/* eslint-disable react/prop-types */
import ArrowRight from "../../assets/Products/ArrowRight.svg";

const ShopNow = () => {
  return (
    <div>
      <div className="w-[191px] h-14 bg-[#FA8232] px-8 flex items-center rounded-[3px] cursor-pointer">
        <span className="text-white text-base font-bold mr-3">SHOP NOW</span>
        <div className="w-6 h-6">
          <img src={ArrowRight} alt="arrow" />
        </div>
      </div>
    </div >
  )
}

export default ShopNow
