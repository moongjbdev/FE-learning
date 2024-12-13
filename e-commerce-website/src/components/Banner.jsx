import Banner1 from "../assets/Banner/Banner1.png";
import Banner2 from "../assets/Banner/Banner2.png";
import ShopNow from "./Button/ShopNowBigBtn";

const Banner = () => {
  return (
    <div className='max-w-main m-auto max-h-[336px] mt-[72px]'>
      <div className="h-full flex gap-6">
        <div className="h-[336px] relative">
          <div>
            <img src={Banner1} alt="banner" className="block w-full h-full object-cover"/>
          </div>
          <div className="absolute bottom-[44px] left-[44px]">
            <ShopNow/>
          </div>
        </div>
        <div className="h-[336px] relative">
          <div>
            <img src={Banner2} alt="banner" className="block w-full h-full object-cover"/>
          </div>
          <div className="absolute bottom-[44px] left-[44px]">
            <ShopNow/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
