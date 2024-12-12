import arrowRight from '../assets/Advertising/ArrowRight.png'
import exitIcon from '../assets/Advertising/X.png'

const Advertising = () => {
  return (
    <div className="w-full h-20 bg-[#191C1F] font-publicsans relative">
      <div className="max-w-main h-full m-auto flex justify-between items-center">
        <div className="h-full flex items-center justify-center">
          <div className="w-[74px] h-10 bg-[#F3DE6D] py-[6.52px] px-[10.3px] -rotate-3 mr-3">
            <span className=" text-[#191C1F] font-semibold text-xl">Black</span>
          </div>
          <span className="text-2xl text-[#FFFFFF] font-semibold ">
            Friday
          </span>
        </div>
        <div className="h-full flex items-center justify-center">
          <span className="text-sm font-medium text-[#FFFFFF]">Up to</span>
          <span className="text-[40px] font-semibold text-[#EBC80C] mx-2">59%</span>
          <span className="text-3xl font-medium text-[#FFFFFF]">OFF</span>
        </div>
        <a className="bg-[#EBC80C] w-40 h-12 rounded-sm flex items-center justify-center cursor-pointer px-6 py-[14px]">
          <span className='text-[#191C1F] font-bold'>SHOP NOW</span>
          <img src={arrowRight} alt="arrow right" className='w-5 h-5'/>
        </a>

      </div>
      <button className='absolute left-[97.08%] right-[1.25%] top-[30%] bottom-[30%] p-2 bg-[#303639] w-8 h-8'>
        <img src={exitIcon} alt="exit" className='text-[#FFFFFF]'/>
      </button>
    </div>
  )
}

export default Advertising

