/* eslint-disable react/prop-types */

const PerOff = ({percent = 25}) => {
  return (
    <div>
      <div className="w-fit h-fit py-[5px] px-[10px] flex items-center justify-center bg-[#EFD33D] rounded-sm">
        <span className="uppercase text-white">{percent}% off</span>
      </div>
    </div>
  )
}

export default PerOff
