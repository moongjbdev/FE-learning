/* eslint-disable react/prop-types */

const PerOff = ({percent = 25}) => {
  return (
    <div>
      <div className="w-fit h-fit py-[5px] px-[10px] flex items-center justify-center bg-[#EFD33D] rounded-sm">
        <span className="uppercase text-[#191C1F] font-medium">{percent}% off</span>
      </div>
    </div>
  )
}

export default PerOff
