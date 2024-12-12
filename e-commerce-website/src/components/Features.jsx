import CreditCard from "../assets/Features/CreditCard.svg";
import Headphones from "../assets/Features/Headphones.svg"
import Package from "../assets/Features/Package.svg"
import Trophy from "../assets/Features/Trophy.svg"

const Features = () => {
  return (
    <div className=' max-w-main m-auto h-[108px] mt-6 border-[1px] border-solid border-[#E4E7E9] p-4'>
      <div className='h-full w-full bg-white flex'>
        {/* Delivery */}
        <div className="w-[280px] h-full p-4 flex items-center mr-14">
          <img src={Package} alt="image" className="w-10 h-10 mr-4"/>
          <div className="flex flex-col justify-between">
            <span className="text-[14px] font-normal uppercase text-[#191C1F]">Fasted Delivery</span>
            <span className="text-[14px] text-[#5F6C72]">Delivery in 24/H</span>
          </div>
        </div>
        {/* Return */}
        <div className="w-[280px] h-full p-4 flex items-center mr-14">
          <img src={Trophy} alt="image" className="w-10 h-10 mr-4"/>
          <div className="flex flex-col justify-between">
            <span className="text-[14px] font-normal uppercase text-[#191C1F]">24 Hours Return</span>
            <span className="text-[14px] text-[#5F6C72]">100% money-back guarantee</span>
          </div>
        </div>
        {/* Payment */}
        <div className="w-[280px] h-full p-4 flex items-center mr-14">
          <img src={CreditCard} alt="image" className="w-10 h-10 mr-4"/>
          <div className="flex flex-col justify-between">
            <span className="text-[14px] font-normal uppercase text-[#191C1F]">Secure Payment</span>
            <span className="text-[14px] text-[#5F6C72]">Your money is safe</span>
          </div>
        </div>
        {/* Support */}
        <div className="w-[280px] h-full p-4 flex items-center">
          <img src={Headphones} alt="image" className="w-10 h-10 mr-4"/>
          <div className="flex flex-col justify-between">
            <span className="text-[14px] font-normal uppercase text-[#191C1F]">Support 24/7</span>
            <span className="text-[14px] text-[#5F6C72]">Live contact/message</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features

