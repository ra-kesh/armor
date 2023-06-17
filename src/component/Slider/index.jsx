import * as React from "react";
import Slider from "@mui/material/Slider";

function valueLabelFormat(value) {
  let scaledValue = value;
  return `Rs.${scaledValue}.00`;
}

export default function PriceSlider({ priceRangeValue, filterByPrice }) {
  const [value, setValue] = React.useState(priceRangeValue);

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
    filterByPrice(event);
  };

  return (
    <>
      <div className="m-top p-r-one" style={{ width: "13rem" }}>
        <Slider
          value={value}
          min={5000}
          step={100}
          max={10000}
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
        <div>
          <label>Price Range:</label>
          {valueLabelFormat(5000)} to {valueLabelFormat(value)}
        </div>
      </div>
    </>
  );
}
