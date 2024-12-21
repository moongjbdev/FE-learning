/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import PriceFilterRadioCustom from "../CustomSelect/PriceFilterRadioCustom";

const PriceRange = ({ min = 0, max = 10000, setMinMaxFilter, valueMinNow, valueMaxNow }) => {
  const [sliderValueMin, setSliderValueMin] = useState(null);
  const [sliderValueMax, setSliderValueMax] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSliderChange = ([newMin, newMax]) => {
    setSliderValueMin(newMin);
    setSliderValueMax(newMax);
    setSelectedOption(""); // Reset selected option when slider is changed
  };

  useEffect(() => {
    switch (selectedOption) {
      case "All Price":
        setSliderValueMin(min);
        setSliderValueMax(max);
        break;
      case "Under $20":
        setSliderValueMin(0);
        setSliderValueMax(20);
        break;
      case "$25 to $100":
        setSliderValueMin(25);
        setSliderValueMax(100);
        break;
      case "$100 to $300":
        setSliderValueMin(100);
        setSliderValueMax(300);
        break;
      case "$300 to $500":
        setSliderValueMin(300);
        setSliderValueMax(500);
        break;
      case "$500 to $1,000":
        setSliderValueMin(500);
        setSliderValueMax(1000);
        break;
      case "$1,000 to $10,000":
        setSliderValueMin(1000);
        setSliderValueMax(10000);
        break;
      default:
        break;
    }
  }, [selectedOption, min, max]);

  useEffect(() => {
    setMinMaxFilter([sliderValueMin, sliderValueMax])
  },[sliderValueMin, sliderValueMax, setMinMaxFilter])

  const priceOptions = [
    "All Price",
    "Under $20",
    "$25 to $100",
    "$100 to $300",
    "$300 to $500",
    "$500 to $1,000",
    "$1,000 to $10,000",
  ];

  return (
    <div className="w-[312px] flex flex-col gap-4">
      <style>
        {`
          .slider-container {
            width: 100%;
            margin: 20px 0;
          }

          .rc-slider {
            height: 2px;
          }

          .rc-slider-rail {
            background-color: #C9CFD2;
            height: 2px;
            border-radius: 5px;
          }

          .rc-slider-track {
            background-color: #FA8232;
            height: 2px;
            border-radius: 5px;
          }

          .rc-slider-handle {
            border: 2px solid #FA8232;
            height: 12px;
            width: 12px;
            border-radius: 50%;
            background-color: white;
            margin-top: -5px;
            box-shadow: none;
            opacity: 1; 
          }

          .rc-slider-handle:hover,
          .rc-slider-handle:focus,
          .rc-slider-handle:active {
            background-color: white;
            border-color: #FA8232;
            box-shadow: none;
          }

          .rc-slider-handle-dragging {
            background-color: white !important;
            border-color: #FA8232 !important;
            box-shadow: none !important;
          }

          .rc-slider-handle:focus-visible {
            outline: none;
            box-shadow: none;
          }
        `}
      </style>

      <Slider
        range
        min={min}
        max={max}
        value={[valueMinNow, valueMaxNow]}
        onChange={handleSliderChange}
      />
      {/* Input price */}
      <div className="flex w-full justify-between gap-3">
        <div className="border rounded">
          <input
            type="text"
            value={sliderValueMin !== null ? sliderValueMin : ""}
            className="w-full h-10 p-2 focus:outline-none"
            placeholder="Min price"
            onChange={(e) => setSliderValueMin(Number(e.target.value))}
          />
        </div>
        <div className="border rounded">
          <input
            type="text"
            value={sliderValueMax !== null ? sliderValueMax : ""}
            className="w-full h-10 p-2 focus:outline-none"
            placeholder="Max price"
            onChange={(e) => setSliderValueMax(Number(e.target.value))}
          />
        </div>
      </div>
      {/* Radio select */}
      <div>
        <PriceFilterRadioCustom
          prices={priceOptions}
          selected={selectedOption}
          setPriceFilter={setSelectedOption}
        />
      </div>
    </div>
  );
};

export default PriceRange;