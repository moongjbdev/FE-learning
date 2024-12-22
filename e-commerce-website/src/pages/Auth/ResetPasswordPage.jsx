import { useState } from 'react';
import ArrowRight from '../../assets/SignInModal/ArrowRight.svg';
import Eye from '../../assets/SignInModal/Eye.svg';
import EyeClosed from '../../assets/SignInModal/EyeClosed.svg';
const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Password:", password);
    setPassword("")
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
          </div>
          {/* Button */}
          <button type='submit' className='bg-[#FA8232] flex items-center justify-center gap-2 h-12 rounded-sm'>
            <span className='uppercase text-white'>Reset Password</span>
            <img src={ArrowRight} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;