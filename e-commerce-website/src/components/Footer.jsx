import Icon from "../assets/Footer/Icon.svg";
import ArrowRight from "../assets/Footer/ArrowRight.svg";
import Apple from "../assets/Footer/Apple.svg";
import Google from "../assets/Footer/Google.svg";


const Footer = () => {
  return (
    <div className='bg-[#191C1F] w-full h-[472px] flex flex-col'>
      <div className='h-[404px] max-w-main m-auto py-[72px] w-full border-b border-[#303639] flex gap-6'>
        {/* Contact */}
        <div className="w-[312px]">
          {/* logo */}
          <div className="flex gap-2 mb-6">
            <img src={Icon} alt="logo" className="w-12 h-12 object-cover block" />
            <span className="text-white uppercase text-[32px] font-bold">CLICON</span>
          </div>
          {/* Customer support */}
          <div className="flex flex-col gap-1 mb-3">
            <span className="text-[#77878F] text-[14px]">Customer Supports:</span>
            <span className="text-white text-[18px] font-medium">(396) 979-999</span>
          </div>
          {/* Address */}
          <div className="mb-3">
            <span className="text-[#77878F] ">4517 Washington Ave.</span>
            <span className="text-[#77878F] ">Manchester, Kentucky 39495</span>
          </div>
          {/* Email */}
          <span className="text-white font-medium">moongjbdev@gmail.com</span>
        </div>
        {/* Top category */}
        <div className="flex flex-col w-[200px]">
          <div className="uppercase text-white font-medium mb-3">Top Category</div>
          <div className="flex flex-col gap-3">
            <span className="flex gap-2 text-[14px] text-[#77878F] cursor-pointer">Computer & Laptop</span>
            <span className="flex gap-2 text-[14px] text-[#77878F] cursor-pointer">SmartPhone</span>
            <span className="flex gap-2 text-[14px] text-[#77878F] cursor-pointer">Headphone</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-[2px] bg-[#EBC80C] rounded"></div>
              <span className="text-white text-[14px] font-medium">Accessories</span>
            </div>
            <span className="flex gap-2 text-[14px] text-[#77878F] cursor-pointer">Camera & Photo</span>
            <span className="flex gap-2 text-[14px] text-[#77878F] cursor-pointer">TV & Homes</span>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-[#EBC80C]">Browse All Product</span>
              <img src={ArrowRight} alt="arrow" className="w-5 h-5" />
            </div>
          </div>
        </div>
        {/* Quick link */}
        <div className="flex flex-col w-[200px]">
          <div className="uppercase text-white font-medium mb-3">Quick links</div>
          <div className="flex flex-col gap-3">
            <span className="flex gap-2 text-[14px] text-[#77878F] cursor-pointer">Shop Product</span>
            <span className="flex gap-2 text-[14px] text-[#77878F] cursor-pointer">Shoping Cart</span>
            <span className="flex gap-2 text-[14px] text-[#77878F] cursor-pointer">Wishlist</span>
            <span className="flex gap-2 text-[14px] text-[#77878F] cursor-pointer">Compare</span>
            <span className="flex gap-2 text-[14px] text-[#77878F] cursor-pointer">Track Order</span>
            <span className="flex gap-2 text-[14px] text-[#77878F] cursor-pointer">Customer Help</span>
            <span className="flex gap-2 text-[14px] text-[#77878F] cursor-pointer">About Us</span>
          </div>
        </div>
        {/* Download */}
        <div className="flex flex-col w-[200px]">
          <div className="uppercase text-white font-medium mb-5">Download APp</div>
          <div className="flex flex-col gap-3">
            {/* Google */}
            <div className="w-[176px] h-[70px] bg-[#303639] rounded py-4 px-5 flex gap-4 items-center cursor-pointer">
              <img src={Google} alt="google-play" className="w-8 h-8"/>
              <div className="flex flex-col">
                <span className="text-[13px] text-white font-light">Get it now</span>
                <span className="text-[14px] text-white font-medium">Google Play</span>
              </div>
            </div>
            {/* Apple */}
            <div className="w-[176px] h-[70px] bg-[#303639] rounded py-4 px-5 flex gap-4 items-center cursor-pointer">
              <img src={Apple} alt="google-play" className="w-8 h-8"/>
              <div className="flex flex-col">
                <span className="text-[13px] text-white font-light">Get it now</span>
                <span className="text-[14px] text-white font-medium">App Store</span>
              </div>
            </div>
          </div>
        </div>
        {/* Tags */}
        <div className="flex-1 flex flex-col">
          {/* title */}
          <div className="uppercase text-white font-medium mb-5">Download APp</div>
          {/* tags */}
          <div className="flex flex-wrap gap-2 ">
            <a href="/#" className="flex items-center h-8 border border-[#303639] rounded-sm hover:bg-[#303639] py-[6px] px-3 text-white text-[14px] font-medium">Game</a>
            <a href="/#" className="flex items-center h-8 border border-[#303639] rounded-sm hover:bg-[#303639] py-[6px] px-3 text-white text-[14px] font-medium">iPhone</a>
            <a href="/#" className="flex items-center h-8 border border-[#303639] rounded-sm hover:bg-[#303639] py-[6px] px-3 text-white text-[14px] font-medium">TV</a>
            <a href="/#" className="flex items-center h-8 border border-[#303639] rounded-sm hover:bg-[#303639] py-[6px] px-3 text-white text-[14px] font-medium">Asus Laptop</a>
            <a href="/#" className="flex items-center h-8 border border-[#303639] rounded-sm hover:bg-[#303639] py-[6px] px-3 text-white text-[14px] font-medium">Macbook </a>
            <a href="/#" className="flex items-center h-8 border border-[#303639] rounded-sm hover:bg-[#303639] py-[6px] px-3 text-white text-[14px] font-medium">SSD</a>
            <a href="/#" className="flex items-center h-8 border border-[#303639] rounded-sm hover:bg-[#303639] py-[6px] px-3 text-white text-[14px] font-medium">Graphics Card </a>
            <a href="/#" className="flex items-center h-8 border border-[#303639] rounded-sm hover:bg-[#303639] py-[6px] px-3 text-white text-[14px] font-medium">Power Bank </a>
            <a href="/#" className="flex items-center h-8 border border-[#303639] rounded-sm hover:bg-[#303639] py-[6px] px-3 text-white text-[14px] font-medium">Smart TV</a>
            <a href="/#" className="flex items-center h-8 border border-[#303639] rounded-sm hover:bg-[#303639] py-[6px] px-3 text-white text-[14px] font-medium">Speaker</a>
            <a href="/#" className="flex items-center h-8 border border-[#303639] rounded-sm hover:bg-[#303639] py-[6px] px-3 text-white text-[14px] font-medium">Tablet</a>
            <a href="/#" className="flex items-center h-8 border border-[#303639] rounded-sm hover:bg-[#303639] py-[6px] px-3 text-white text-[14px] font-medium">Microwave</a>
            <a href="/#" className="flex items-center h-8 border border-[#303639] rounded-sm hover:bg-[#303639] py-[6px] px-3 text-white text-[14px] font-medium">Samsung</a>

          </div>

        </div>
      </div>
      <div className='flex-1 flex items-center justify-center'>
        <span className=' text-[#ADB7BC]'>
          Chew - eCommerce Template © 2024. Design by Templatecookie
        </span>
      </div>
    </div>
  )
}

export default Footer
