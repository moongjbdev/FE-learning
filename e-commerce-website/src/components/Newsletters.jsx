import ArrowRight from "../assets/Newslatter/ArrowRight.svg";
import Logo from "../assets/Newslatter/Logo.svg";

const Newsletters = () => {
  return (
    <div className='bg-[#1B6392] w-full h-[452px'>
      <div className='max-w-main m-auto py-[72px]'>
      {/* Texts */}
      <div className='flex flex-col gap-3 items-center'>
        <h2 className='text-[32px] text-white text-center'>Subscribe to our newsletter</h2>
        <span className='block w-[536px] text-center text-white font-normal opacity-70'>Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.</span>
      </div>
      {/* Input */}
      <div className="py-[32px] flex items-center justify-center ">
          <div className="w-[624px] h-[72px] p-3 bg-white flex gap-4 justify-between rounded-[2px]">
            {/* input */}
            <input type="text" placeholder="Email address..." className="flex-1 outline-none"/>
            {/* button */}
            <div className="w-[160px] py-[14px] px-6 bg-[#FA8232] flex items-center justify-center gap-2 rounded-[2px] cursor-pointer">
              <span className="text-white text-[14px] font-bold">Subscribe</span>
              <img src={ArrowRight} alt="" className="w-5 h-5"/>
            </div>
          </div>
      </div>
      {/* Logo */}
      <div className="flex items-center justify-center">
          <img src={Logo} alt="logos" className="object-cover block"/>
      </div>
      </div>
    </div>
  )
}

export default Newsletters
