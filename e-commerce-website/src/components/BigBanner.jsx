import Banner from "../assets/BigBanner/Banner.png"
import ShopNow from "./Button/ShopNowBigBtn"
const BigBanner = () => {
  return (
    <div className='w-full mt-[72px]'>
      <div className="max-w-[1438px] h-[424px] m-auto relative">
        <div>
          <img src={Banner} alt="banner" />
        </div>
        <div className="absolute bottom-20 left-[72px]">
          <ShopNow/>
        </div>
      </div>
    </div>
  )
}

export default BigBanner
