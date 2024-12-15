/* eslint-disable react/prop-types */
import Eye from '../../assets/SignInModal/Eye.svg';
import EyeClosed from '../../assets/SignInModal/EyeClosed.svg';
import ArrowRight from '../../assets/SignInModal/ArrowRight.svg';




import { useState ,useRef, useEffect } from 'react';


const SignInModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Email:", email);
    console.log("Submitted Password:", password);
    setEmail("")
    setIsShowPassword("")
    onClose()
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Kiểm tra xem click có phải ở ngoài modal và không phải là trigger button
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        const triggerElement = event.target.closest('[data-signin-trigger]');
        if (!triggerElement) {
          onClose();
        }
      }
    };
  
    if (isOpen) {
      // Sử dụng setTimeout để đảm bảo event listener được thêm vào sau khi click hiện tại đã xử lý xong
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 0);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={modalRef}
      onClick={(e) => e.stopPropagation()} // ngắn onClick lên phần tử tra bọc modal này
      className="absolute top-full right-0 translate-y-3 z-10 w-[424px] h-[444px] bg-white rounded border border-[#E4E7E9] shadow-xl">
      <div className='p-8 flex flex-col gap-6'>
        {/* Sign In */}
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <h2 className='text-[#191C1F] text-[20px] font-semibold text-center'>Sign in to your account</h2>
          {/* Input */}
          <div className='flex flex-col gap-4'>
            {/* email */}
            <div className='flex flex-col gap-2'>
              <label htmlFor='email' className='text-[#191C1F] text-[14px] font-normal'>Email Address</label>
              <input type="email" id='email'
              autoComplete="username"
              placeholder='Enter your email...'
              required
              className='h-[44px] p-3 focus:outline-none rounded border border-[#E4E7E9]'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* password */}
            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='text-[#191C1F] text-[14px] font-normal'>Password</label>
                <a href="#" className='text-[#2DA5F3] text-[14px] font-medium'>Forget Password</a>
              </div>
              <div className='flex items-center justify-between rounded border border-[#E4E7E9]'>
              <input 
              type={isShowPassword? 'text' : 'password'} 
              id='password' placeholder='Enter your password...'
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='h-[44px] p-3 focus:outline-none flex flex-1'
              />
              <img src={isShowPassword ? Eye : EyeClosed} alt="" className='mr-3'onClick={() => setIsShowPassword(!isShowPassword)}/>
              </div>
            </div>
          </div>
          {/* Button */}
          <button type='submit' className='bg-[#FA8232] flex items-center justify-center gap-2 h-12 rounded-sm'>
            <span className='uppercase text-white'>login</span>
            <img src={ArrowRight} alt="" />
          </button>
        </form>
        {/* Other */}
        <div className='flex flex-col gap-6'>
          {/* text */}
          <div className='relative'>
            <hr className='border-[#E4E7E9]'/>
            <span className='text-[#77878F] absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 bg-white px-1 block'>Don’t have account</span>
          </div>
          {/* button */}
          <div className='h-12 border border-[#FFE7D6] flex items-center justify-center rounded-sm'>
            <span className='uppercase text-center text-[#FA8232] text-[14px] font-bold'>create account</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SignInModal;
