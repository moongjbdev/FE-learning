/* eslint-disable react/prop-types */
import CheckBox from '../CustomSelect/CheckBox';



const BrandsFilter = ({brands, onSelectBrand, selectedBrands}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {brands.map((brand) => (
        <CheckBox
          key={brand}
          name="brand"
          value={brand}
          checked={selectedBrands.includes(brand)}
          onChange={() => onSelectBrand(brand)}
        />
      ))}
    </div>
  );
};

export default BrandsFilter;