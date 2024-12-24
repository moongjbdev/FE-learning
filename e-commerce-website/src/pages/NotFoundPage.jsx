import Image from "../assets/404/404.svg"
import ArrowLeft from "../assets/404/ArrowLeft.svg"
import House from "../assets/404/House.svg"



const NotFoundPage = () => {
  return (
    <div className='bg-white m-auto mb-[124px] max-w-main flex flex-col items-center justify-center'>
      <img src={Image} alt="NOT FOUND@@" />
      <div className="w-full">
        {/* Heading */}
        <h1 className="text-[#191C1F] text-4xl font-semibold text-center">404, Page not founds</h1>
        {/* Content */}
        <div className="flex flex-col justify-center items-center mt-6 mb-6">
          <span className="text-[#475156] text-base font-normal">Something went wrong. It’s look that your requested could not be found.</span>
          <span className="text-[#475156] text-base font-normal">It’s look like the link is broken or the page is removed.</span>
        </div>
        {/* Button */}
        <div className="flex items-center justify-center h-12 gap-4">
          {/* back */}
          <button className="px-6 py-[14px] bg-[#FA8232] flex gap-2 rounded-sm border-[2px] border-transparent">
            <img src={ArrowLeft} alt="back" className="block w-5 h-5"/>
            <span className="uppercase text-white text-sm font-bold">Go Back</span>
          </button>
          {/* home */}
          <button className="px-6 py-[14px] bg-white box-border border-[#FFE7D6] border-[2px] flex gap-2 rounded-sm">
            <img src={House} alt="back" className="block w-5 h-5"/>
            <span className="uppercase text-[#FA8232] text-sm font-bold">Go To home</span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default NotFoundPage
