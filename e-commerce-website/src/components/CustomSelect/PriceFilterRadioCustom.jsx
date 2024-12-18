/* eslint-disable react/prop-types */
import Radio from "./Radio";

const PriceFilterRadioCustom = ({prices, selected, setPriceFilter}) => {

  const handleRadioChange = (event) => {
    setPriceFilter(event.target.value);
  };

  return (
    <div  className='flex flex-col gap-3'>
      {prices.map((price) => {
        return (
          <div key={price}>
            <Radio
              name="pricerange"
              value={price}
              checked={selected == price}
              onChange={handleRadioChange}
            />
          </div>
        )
      })}
    </div>
  )
}

export default PriceFilterRadioCustom
