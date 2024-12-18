/* eslint-disable react/prop-types */
const Radio = ({ value, name, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <label className="flex items-center cursor-pointer gap-2" htmlFor={value}>
        <input
          type="radio"
          name={name}
          id={value}
          value={value}
          className="peer hidden"
          checked={checked}
          onChange={onChange}
        />
        <div className="radio w-5 h-5 border border-[#C9CFD2] rounded-full bg-white cursor-pointer peer-checked:border-[#FA8232] peer-checked:border-[6px]"></div>
        <span className={`text-sm ${checked ? 'text-[#191C1F] font-medium' : 'text-[#475156]'}`}>
          {value}
        </span>
      </label>
    </div>
  );
};

export default Radio;