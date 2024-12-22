import { useState } from 'react';
import ArrowRight from '../../assets/SignInModal/ArrowRight.svg';
const VerifyEmailPage = () => {
  const [code, setCode] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted code:", code);
    setCode("")
  };

  return (
    <div className="w-[424px] mx-auto my-[100px] p-8 border bg-white shadow-2xl rounded">
      {/* Title */}
      <div className='flex flex-col gap-3 mb-6'>
        <h1 className='text-[#191C1F] text-xl font-semibold text-center'>Reset Password</h1>
        <span className='text-[#5F6C72] text-sm font-normal text-center block'>
          Enter and confirm your new password below. Ensure it&apos;s strong and secure.
        </span>
      </div>
      {/* FORM */}
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='text-[#191C1F] text-[14px] font-normal'>Verification Code</label>
                <a href="#" className='text-[#2DA5F3] text-[14px] font-medium'>Resend Code</a>
              </div>
              <input type="text" id='yourcode'
                autoComplete="code"
                placeholder=''
                required
                className='h-[44px] p-3 focus:outline-none rounded border border-[#E4E7E9]'
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
          </div>
          {/* Button */}
          <button type='submit' className='bg-[#FA8232] flex items-center justify-center gap-2 h-12 rounded-sm'>
            <span className='uppercase text-white'>Verify me</span>
            <img src={ArrowRight} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmailPage;