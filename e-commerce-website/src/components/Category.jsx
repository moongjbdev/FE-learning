import Computer from "../assets/Categorys/Computer.png"
import Smartphone from "../assets/Categorys/Smartphone.png"
import Headphone from "../assets/Categorys/Headphone.png"
import Keyboard from "../assets/Categorys/Keyboard.png"
import Camera from "../assets/Categorys/Camera.png"
import TV from "../assets/Categorys/TV.png"
import ArrowLeft from "../assets/Categorys/ArrowLeft.svg"
import ArrowRight from "../assets/Categorys/ArrowRight.svg"


const Category = () => {
  return (
    <div className='max-w-main m-auto mt-[72px]'>
      <h2 className="text-center text-[32px] text-[#191C1F] font-semibold mb-10">Shop with Categorys</h2>
      {/* Categories */}
      <div className="flex justify-between relative">
        {/* Arrow left */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-[50%] cursor-pointer">
          <div className="w-12 h-12 bg-[#FA8232] rounded-full flex items-center justify-center">
            <img src={ArrowLeft} alt="arrow-left" />
          </div>
        </div>
        {/* Arrow right */}
        <div className="absolute right-0 translate-x-1/2 -translate-y-1/2 top-[50%] cursor-pointer">
          <div className="w-12 h-12 bg-[#FA8232] rounded-full flex items-center justify-center">
            <img src={ArrowRight} alt="arrow-left" />
          </div>
        </div>
        <div className="py-6 px-3  w-[205px] border-[1px] border-[#E4E7E9} rounded">
          <div className="px-[16.5px] mb-4">
            <img src={Computer} alt="" className="object-cover" />
          </div>
          <span className="block text-base font-medium text-center">Computer & Laptop</span>
        </div>

        <div className="py-6 px-3  w-[205px] border-[1px] border-[#E4E7E9} rounded">
          <div className="px-[16.5px] mb-4">
            <img src={Smartphone} alt="" className="object-cover" />
          </div>
          <span className="block text-base font-medium text-center">SmartPhone</span>
        </div>

        <div className="py-6 px-3  w-[205px] border-[1px] border-[#E4E7E9} rounded">
          <div className="px-[16.5px] mb-4">
            <img src={Headphone} alt="" className="object-cover" />
          </div>
          <span className="block text-base font-medium text-center">Headphones</span>
        </div>

        <div className="py-6 px-3  w-[205px] border-[1px] border-[#E4E7E9} rounded">
          <div className="px-[16.5px] mb-4">
            <img src={Keyboard} alt="" className="object-cover" />
          </div>
          <span className="block text-base font-medium text-center">Accessories</span>
        </div>

        <div className="py-6 px-3  w-[205px] border-[1px] border-[#E4E7E9} rounded">
          <div className="px-[16.5px] mb-4">
            <img src={Camera} alt="" className="object-cover" />
          </div>
          <span className="block text-base font-medium text-center">Camera & Photo</span>
        </div>

        <div className="py-6 px-3  w-[205px] border-[1px] border-[#E4E7E9} rounded">
          <div className="px-[16.5px] mb-4">
            <img src={TV} alt="" className="object-cover" />
          </div>
          <span className="block text-base font-medium text-center">TV & Homes</span>
        </div>
      </div>
    </div>
  )
}

export default Category
