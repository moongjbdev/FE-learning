import { useState } from 'react';
import ArrowRight from '../../assets/SignInModal/ArrowRight.svg';

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Email:", email);
    setEmail("");
  };

  return (
    <div className="w-[424px] mx-auto my-[100px] p-8 border bg-white shadow-2xl rounded">
      {/* Title */}
      <div className='flex flex-col gap-3 mb-6'>
        <h1 className='text-[#191C1F] text-xl font-semibold text-center'>Forget Password</h1>
        <span className='text-[#5F6C72] text-sm font-normal text-center block'>
          Enter the email address or mobile phone number associated with your Chew account.
        </span>
      </div>
      {/* FORM */}
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          <div className='flex flex-col gap-4'>
            {/* email */}
            <div className='flex flex-col gap-2'>
              <label htmlFor='email' className='text-[#191C1F] text-[14px] font-normal'>Email Address</label>
              <input
                type="email"
                id='email'
                autoComplete="username"
                placeholder='Enter your email...'
                required
                className='h-[44px] p-3 focus:outline-none rounded border border-[#E4E7E9]'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          {/* Button */}
          <button type='submit' className='bg-[#FA8232] flex items-center justify-center gap-2 h-12 rounded-sm'>
            <span className='uppercase text-white'>Send code</span>
            <img src={ArrowRight} alt="" />
          </button>
        </form>
        {/* Ask */}
        <div className='flex flex-col gap-2 mt-6'>
          <div>
            <span className='text-sm font-normal text-[#5F6C72]'>Already have account? </span>
            <a href="#" className='text-sm font-medium text-[#2DA5F3]'>Sign In</a>
          </div>
          <div>
            <span className='text-sm font-normal text-[#5F6C72]'>Don’t have account? </span>
            <a href="#" className='text-sm font-medium text-[#2DA5F3]'>Sign Up</a>
          </div>
        </div>
        <div className='mt-6 flex flex-col gap-3'>
          {/* line */}
          <div className='relative mb-2'>
            <hr className='border-[#E4E7E9]' />
          </div>
          {/* Help */}
          <div>
            <span className='text-sm font-normal text-[#475156]'>You may contact </span>
            <a href="#" className='text-sm font-medium text-[#FA8232]'>Customer Service</a>
            <span className='text-sm font-normal text-[#475156]'> for help restoring access to your account.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;