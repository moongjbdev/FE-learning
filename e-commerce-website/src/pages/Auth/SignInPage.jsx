import { useState } from 'react';
import Eye from '../../assets/SignInModal/Eye.svg';
import EyeClosed from '../../assets/SignInModal/EyeClosed.svg';
import ArrowRight from '../../assets/SignInModal/ArrowRight.svg';
import Apple from '../../assets/SignInModal/Apple.svg';
import Google from '../../assets/SignInModal/Google.svg';

const SignInPage = () => {

  //Nên dùng 1 sate kiểu { } để hứng hết, dùng name của input để phân biệt


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Email:", email);
    console.log("Submitted Password:", password);
    setEmail("")
    setPassword("")
  };

  return (
    <div className="w-[424px] h-[504px] mx-auto my-[100px] border bg-white shadow-2xl rounded">
      {/* TAB */}
      <div className="w-full h-[60px] flex items-center">
        {/* signin */}
        <div className="w-1/2 h-full flex items-center justify-center font-semibold text-xl border-b-[3px] border-[#FA8232]">
          <span className="block text-center text-[#191C1F]">Sign In</span>
        </div>
        {/* signiup */}
        <div className="w-1/2 h-full flex items-center justify-center font-semibold text-xl border-b">
          <span className="block text-center text-[#77878F]">Sign Up</span>
        </div>
      </div>
      {/* FORM */}
      <div className="px-8 py-6">
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
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
                  type={isShowPassword ? 'text' : 'password'}
                  id='password' placeholder='Enter your password...'
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='h-[44px] p-3 focus:outline-none flex flex-1'
                />
                <img src={isShowPassword ? Eye : EyeClosed} alt="" className='mr-3' onClick={() => setIsShowPassword(!isShowPassword)} />
              </div>
            </div>
          </div>
          {/* Button */}
          <button type='submit' className='bg-[#FA8232] flex items-center justify-center gap-2 h-12 rounded-sm'>
            <span className='uppercase text-white'>login</span>
            <img src={ArrowRight} alt="" />
          </button>
        </form>
        <div className='mt-6 flex flex-col gap-3'>
          {/* line */}
          <div className='relative mb-2'>
            <hr className='border-[#E4E7E9]' />
            <span className='text-[#77878F] absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 bg-white px-1 block'>or</span>
          </div>
          {/* Other login */}

          {/* google */}
          <div className="relative border w-full h-11 py-3 px-4 rounded-sm flex items-center cursor-pointer">
            <img src={Google} alt="google" className="mr-2" />
            <span className="absolute left-0 right-0 text-center">Login with Google</span>
          </div>
          {/* apple */}
          <div>
          <div className="relative border w-full h-11 py-3 px-4 rounded-sm flex items-center cursor-pointer">
            <img src={Apple} alt="Apple" className="mr-2" />
            <span className="absolute left-0 right-0 text-center">Login with Apple</span>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignInPage;