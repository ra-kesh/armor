import * as React from "react";
import Slider from "@mui/material/Slider";

function valueLabelFormat(value) {
  let scaledValue = value;
  return `Rs.${scaledValue}.00`;
}

export default function PriceSlider() {
  const [value, setValue] = React.useState(10);

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  return (
    <div className="container" style={{ width: "18rem" }}>
      <Slider
        value={value}
        min={1000}
        step={100}
        max={10000}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
      <div>Price: {valueLabelFormat(value)}</div>
    </div>
  );
}
