/* eslint-disable react/prop-types */
import Radio from "../CustomSelect/Radio";

const CategoryFilter = ({categorys, selected, setCategoryFilter}) => {

  const handleRadioChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  return (
    <div  className='flex flex-col gap-3'>
      {categorys.map((category) => {
        return (
          <div key={category}>
            <Radio
              name="category"
              value={category}
              checked={selected === category}
              onChange={handleRadioChange}
            />
          </div>
        )
      })}
    </div>
  )
}

export default CategoryFilter
