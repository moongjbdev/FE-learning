import Imagge1 from "../assets/LatestNews/1.png"
import Imagge2 from "../assets/LatestNews/2.png"
import Imagge3 from "../assets/LatestNews/3.png"

import CalendarBlank from "../assets/LatestNews/CalendarBlank.svg"
import ChatCircleDots from "../assets/LatestNews/ChatCircleDots.svg"
import UserCircle from "../assets/LatestNews/UserCircle.svg"
import ArrowRight from "../assets/LatestNews/ArrowRight.svg"



const LatestNews = () => {
  return (
    <div className='w-full h-[796px] mt-[72px] bg-[#F2F4F5]'>
      <div className="max-w-main m-auto py-[72px] h-full">
        <h2 className="text-center text-[#191C1F] text-[32px] font-semibold mb-10">Latest News</h2>
        {/* items */}
        <div className="grid grid-cols-3 gap-6">
          {/* item */}
          <div className="w-[424px] h-full bg-white p-8 border border-[#E4E7E9] rounded">
            {/* image */}
            <div className="w-[360px] h-[248px] mb-6">
              <img src={Imagge1} alt="image" className="w-full h-full block object-cover"/>
            </div>
            {/* content */}
            <div className="w-[360px] h-[164px] mb-6">
              {/* icons */}
              <div className="h-6 flex gap-4 mb-2">
                {/* User */}
                <div className="flex gap-[6px] items-center">
                  <img src={UserCircle} alt="icon" className="block w-6 h-6"/>
                  <span className="text-[#475156] text-[14px]">Kristin</span>
                </div>
                {/* Time */}
                <div className="flex gap-[6px] items-center">
                  <img src={CalendarBlank} alt="icon" className="block w-6 h-6"/>
                  <span className="text-[#475156] text-[14px]">19Dec, 2013</span>
                </div>
                {/* Comment */}
                <div className="flex gap-[6px] items-center">
                  <img src={ChatCircleDots} alt="icon" className="block w-6 h-6"/>
                  <span className="text-[#475156] text-[14px]">453</span>
                </div>
              </div>
              {/* Title */}
              <div className="h-12 line-clamp-2 overflow-hidden mb-[12px]">
                <span className="text-[18px] text-[#191C1F]">Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</span>
              </div>
              {/* Content */}
              <div className="h-[72px] line-clamp-3 overflow-hidden">
                <span className="text-[14px] font-normal text-[#77878F]">Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus. lorem</span>
              </div>
            </div>
            {/* button */}
            <div className="w-[162px] h-12 py-[14px] px-6 flex items-center justify-between border-[2px] border-[#FFE7D6] rounded-sm cursor-pointer">
              <span className="uppercase text-[#FA8232] text-[14px] font-bold">read more</span>
              <img src={ArrowRight} alt="arrow" className="w-5 h-5"/>
            </div>
          </div>


          <div className="w-[424px] h-full bg-white p-8 border border-[#E4E7E9] rounded">
            {/* image */}
            <div className="w-[360px] h-[248px] mb-6">
              <img src={Imagge2} alt="image" className="w-full h-full block object-cover"/>
            </div>
            {/* content */}
            <div className="w-[360px] h-[164px] mb-6">
              {/* icons */}
              <div className="h-6 flex gap-4 mb-2">
                {/* User */}
                <div className="flex gap-[6px] items-center">
                  <img src={UserCircle} alt="icon" className="block w-6 h-6"/>
                  <span className="text-[#475156] text-[14px]">Robert</span>
                </div>
                {/* Time */}
                <div className="flex gap-[6px] items-center">
                  <img src={CalendarBlank} alt="icon" className="block w-6 h-6"/>
                  <span className="text-[#475156] text-[14px]">28 Nov, 2015</span>
                </div>
                {/* Comment */}
                <div className="flex gap-[6px] items-center">
                  <img src={ChatCircleDots} alt="icon" className="block w-6 h-6"/>
                  <span className="text-[#475156] text-[14px]">738</span>
                </div>
              </div>
              {/* Title */}
              <div className="h-12 line-clamp-2 overflow-hidden mb-[12px]">
                <span className="text-[18px] text-[#191C1F]">Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. </span>
              </div>
              {/* Content */}
              <div className="h-[72px] line-clamp-3 overflow-hidden">
                <span className="text-[14px] font-normal text-[#77878F]">Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. </span>
              </div>
            </div>
            {/* button */}
            <div className="w-[162px] h-12 py-[14px] px-6 flex items-center justify-between border-[2px] border-[#FFE7D6] rounded-sm cursor-pointer">
              <span className="uppercase text-[#FA8232] text-[14px] font-bold">read more</span>
              <img src={ArrowRight} alt="arrow" className="w-5 h-5"/>
            </div>
          </div>


          <div className="w-[424px] h-full bg-white p-8 border border-[#E4E7E9] rounded">
            {/* image */}
            <div className="w-[360px] h-[248px] mb-6">
              <img src={Imagge3} alt="image" className="w-full h-full block object-cover"/>
            </div>
            {/* content */}
            <div className="w-[360px] h-[164px] mb-6">
              {/* icons */}
              <div className="h-6 flex gap-4 mb-2">
                {/* User */}
                <div className="flex gap-[6px] items-center">
                  <img src={UserCircle} alt="icon" className="block w-6 h-6"/>
                  <span className="text-[#475156] text-[14px]">Arlene</span>
                </div>
                {/* Time */}
                <div className="flex gap-[6px] items-center">
                  <img src={CalendarBlank} alt="icon" className="block w-6 h-6"/>
                  <span className="text-[#475156] text-[14px]">9 May, 2014</span>
                </div>
                {/* Comment */}
                <div className="flex gap-[6px] items-center">
                  <img src={ChatCircleDots} alt="icon" className="block w-6 h-6"/>
                  <span className="text-[#475156] text-[14px]">826</span>
                </div>
              </div>
              {/* Title */}
              <div className="h-12 line-clamp-2 overflow-hidden mb-[12px]">
                <span className="text-[18px] text-[#191C1F]">Curabitur massa orci, consectetur et blandit ac, auctor et tellus.</span>
              </div>
              {/* Content */}
              <div className="h-[72px] line-clamp-3 overflow-hidden">
                <span className="text-[14px] font-normal text-[#77878F]">Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.</span>
              </div>
            </div>
            {/* button */}
            <div className="w-[162px] h-12 py-[14px] px-6 flex items-center justify-between border-[2px] border-[#FFE7D6] rounded-sm cursor-pointer">
              <span className="uppercase text-[#FA8232] text-[14px] font-bold">read more</span>
              <img src={ArrowRight} alt="arrow" className="w-5 h-5"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestNews
