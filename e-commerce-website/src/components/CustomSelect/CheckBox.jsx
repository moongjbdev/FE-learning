/* eslint-disable react/prop-types */
import Vector from "../../assets/CheckBox/Vector.svg"
const CheckBox = ({ value, name, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <label className="flex items-center cursor-pointer gap-2" htmlFor={value + "value"}>
        <input
          type="checkbox"
          name={name}
          id={value+ "value"}
          value={value}
          className="peer hidden"
          checked={checked}
          onChange={onChange}
        />
        <div className="flex items-center justify-center checkbox w-5 h-5 border border-[#C9CFD2] rounded bg-white cursor-pointer peer-checked:bg-[#FA8232] peer-checked:border-[#FA8232]">
          {checked ? <img src={Vector} alt="checked"/> : ""}
        </div>
        <span className={`text-sm ${checked ? 'text-[#191C1F] font-medium' : 'text-[#475156]'}`}>
          {value}
        </span>
      </label>
    </div>
  );
};

export default CheckBox;