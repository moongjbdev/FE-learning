import Twitter from '../assets/Header/Twitter.svg';
import Facebook from '../assets/Header/Facebook.svg';
import Pinterest from '../assets/Header/Pinterest.svg';
import Reddit from '../assets/Header/Reddit.svg';
import Youtube from '../assets/Header/Youtube.svg';
import Instagram from '../assets/Header/Instagram.svg';
import ArrowDown from '../assets/Header/ArrowDown.png';
import IconLogo from '../assets/Header/Icon.svg';
import Search from '../assets/Header/Search.png';
import Cart from '../assets/Header/handbag.svg';
import User from '../assets/Header/User.svg';

// import LanguageModal from './Modal/LanguagesModal'
import Navigation from './Navigation';

const Header = () => {
  return (
    <div>
    <div className="bg-[#1B6392] h-[140px]">
      {/* Top Header */}
      <div className="h-[52px] border-b border-[#2484C2]">
        <div className="max-w-[1320px] h-full m-auto flex justify-between items-center">
          {/* Text Welcome */}
          <span className="text-[#FFFFFF] text-sm font-[400]">Welcome to CHEW online eCommerce store.</span>

          {/* Socical and Language and Currency */}
          <div className="flex h-5 items-center justify-start">
            <div className='flex items-center justify-center border-r border-[#2484C2]'>
              {/* Socical */}
              <div className='flex py-1 pr-6 '>
                <span className="text-[#FFFFFF] text-sm font-[400] mr-3">Follow us:</span>
                <div className='flex justify-center items-center gap-3'>
                  <a href="" target="_blank">
                    <img src={Twitter} alt="Twitter" />
                  </a>
                  <a href="" target="_blank">
                    <img src={Facebook} alt="Facebook" />
                  </a>
                  <a href="" target="_blank">
                    <img src={Pinterest} alt="Pinterest" />
                  </a>
                  <a href="" target="_blank">
                    <img src={Reddit} alt="Reddit" />
                  </a>
                  <a href="" target="_blank">
                    <img src={Youtube} alt="Youtube" />
                  </a>
                  <a href="" target="_blank">
                    <img src={Instagram} alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
            {/* Languages and Currency */}
            <div className='py-1 pl-6'>
              <div className='flex items-center justify-center gap-6'>
                {/* Languages */}
                <div className='h-full flex items-center cursor-pointer relative'>
                  <span className='mr-[6px] text-[#FFFFFF] text-sm'>Eng</span>
                  <img src={ArrowDown} alt="arrow-down" className='w-3 h-3'/>
                  <div className='absolute top-0 right-0 -translate-x-2 translate-y-9'>
                    {/* <LanguageModal/> */}
                  </div>
                </div>
                {/* Currency */}
                <div className='h-full flex items-center cursor-pointer'>
                  <span className='mr-[6px] text-[#FFFFFF] text-sm'>USD</span>
                  <img src={ArrowDown} alt="arrow-down" className='w-3 h-3'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Header */}
      <div className="h-[88px]">
        <div className="max-w-[1320px] h-full m-auto py-5 flex items-center justify-between">
          {/* Logo */}
          <div className='flex items-center justify-center cursor-pointer'>
            <img src={IconLogo} alt="logo" className='w-12 h-12 mr-2'/>
            <span className='text-[32px] font-bold text-[#FFFFFF]'>CHEW</span>
          </div>
          {/* Search */}
          <div className='w-[646px] bg-white h-full rounded-sm py-[14px] px-5'>
            <div className='flex items-center justify-between'>
              <div className='flex-1 mr-2'>
                <input type="text" className='w-full bg-transparent outline-none text-[#191C1F]' placeholder="Search for anything..."/>
              </div>
              <img srcSet={`${Search} 2x`} alt="search" className='w-5 h-5'/>
            </div>
          </div>
          {/* Cart, User */}
          <div className='py-2 flex items-center gap-8'>
            <div className='cursor-pointer relative'>
              <img src={Cart} alt="cart" className='w-8 h-8'/>
              <div className='absolute flex items-center justify-center w-5 h-5 bg-white text-center rounded-full top-0 right-0 translate-x-1 translate-y-0'>
                <span className='text-[#2484C2] text-xs font-semibold'>2</span>
              </div>
            </div>
            <div className='cursor-pointer'>
              <img src={User} alt="cart" className=''/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Navigation/>
    </div>
  )
}

export default Header



