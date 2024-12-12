import WidgetImage from "../assets/Widgets/Widget.png"
import smallWidget from "../assets/Widgets/smallWidget.png"
import smallWidget1 from "../assets/Widgets/smallWidget1.png"
const Widgets = () => {
  return (
    <div className='max-w-main m-auto h-[520px] flex mt-6'>
      {/* Widget */}
      <div className=' w-[872px] h-full mr-6 rounded-md overflow-hidden'>
        <img src={WidgetImage} alt="product" className="object-cover"/>
      </div>
      {/* Small Widget */}
      <div className='flex flex-col flex-1  gap-6 overflow-hidden'>
        <div className='h-[248px] rounded-md'>
          <img src={smallWidget} alt="product" />
        </div>
        <div className='rounded-md overflow-hidden'>
          <img src={smallWidget1} alt="product" />
        </div>
      </div>
    </div>
  )
}

export default Widgets
