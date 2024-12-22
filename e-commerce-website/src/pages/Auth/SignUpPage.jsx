import { useEffect, useState } from 'react';
import Eye from '../../assets/SignInModal/Eye.svg';
import EyeClosed from '../../assets/SignInModal/EyeClosed.svg';
import ArrowRight from '../../assets/SignInModal/ArrowRight.svg';
import Apple from '../../assets/SignInModal/Apple.svg';
import Google from '../../assets/SignInModal/Google.svg';

import CheckBox from "../../components/CustomSelect/CheckBox"

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Email:", email);
    console.log("Submitted Password:", password);
    setEmail("")
    setPassword("")
  };

  useEffect(() => {
    console.log(acceptPolicy)
  }, [acceptPolicy])

  return (
    <div className="w-[424px]  mx-auto my-[100px] border bg-white shadow-2xl rounded">
      {/* TAB */}
      <div className="w-full h-[60px] flex items-center">
        {/* signin */}
        <div className="w-1/2 h-full flex items-center justify-center font-semibold text-xl border-b ">
          <span className="block text-center text-[#77878F]">Sign In</span>
        </div>
        {/* signiup */}
        <div className="w-1/2 h-full flex items-center justify-center font-semibold text-xl     border-b-[3px] border-[#FA8232]">
          <span className="block text-center text-[#191C1F]">Sign Up</span>
        </div>
      </div>
      {/* FORM */}
      <div className="px-8 py-6">
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          <div className='flex flex-col gap-4'>
            {/* name */}
            <div className='flex flex-col gap-2'>
              <label htmlFor='email' className='text-[#191C1F] text-[14px] font-normal'>Name</label>
              <input type="email" id='email'
                autoComplete="name"
                placeholder=''
                required
                className='h-[44px] p-3 focus:outline-none rounded border border-[#E4E7E9]'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* email */}
            <div className='flex flex-col gap-2'>
              <label htmlFor='email' className='text-[#191C1F] text-[14px] font-normal'>Email Address</label>
              <input type="email" id='email'
                autoComplete="username"
                placeholder=''
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
              </div>
              <div className='flex items-center justify-between rounded border border-[#E4E7E9]'>
                <input
                  type={isShowPassword ? 'text' : 'password'}
                  id='password' placeholder='8+ characters'
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='h-[44px] p-3 focus:outline-none flex flex-1'
                />
                <img src={isShowPassword ? Eye : EyeClosed} alt="" className='mr-3' onClick={() => setIsShowPassword(!isShowPassword)} />
              </div>
            </div>
            {/* confirm password */}
            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <label htmlFor='cpassword' className='text-[#191C1F] text-[14px] font-normal'>Confirm password</label>
              </div>
              <div className='flex items-center justify-between rounded border border-[#E4E7E9]'>
                <input
                  type={isShowPassword ? 'text' : 'password'}
                  id='cpassword' placeholder=''
                  required
                  autoComplete="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className='h-[44px] p-3 focus:outline-none flex flex-1'
                />
                <img src={isShowPassword ? Eye : EyeClosed} alt="" className='mr-3' onClick={() => setIsShowPassword(!isShowPassword)} />
              </div>
            </div>
            {/* polocy */}
            <div className='flex items-start'>
              <CheckBox
                key={"policyCheck"}
                name="policyCheck"
                value={acceptPolicy}
                checked={acceptPolicy}
                onChange={() => setAcceptPolicy(!acceptPolicy)}
              />
              <div className='ml-2'>
                <span>Are you agree to Chew </span>
                <a href="#" className='text-[#2DA5F3]'>
                  Terms of Condition
                </a>
                <span> and </span>
                <a href="#" className='text-[#2DA5F3]'>
                  Privacy Policy.
                </a>
              </div>
            </div>
          </div>
          {/* Button */}
          <button type='submit' className='bg-[#FA8232] flex items-center justify-center gap-2 h-12 rounded-sm'>
            <span className='uppercase text-white'>Sign Up</span>
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
            <span className="absolute left-0 right-0 text-center">Sign up with Google</span>
          </div>
          {/* apple */}
          <div>
            <div className="relative border w-full h-11 py-3 px-4 rounded-sm flex items-center cursor-pointer">
              <img src={Apple} alt="Apple" className="mr-2" />
              <span className="absolute left-0 right-0 text-center">Sign up with Apple</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUpPage;