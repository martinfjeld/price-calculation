import React, { useState } from "react";
import "./color-slider.styles.scss";

export const ColorSlider = ({
  min,
  max,
  color,
  secColor,
  type,
  price,
  setPrice,
  measure,
}) => {
  const [value, setValue] = useState(min);

  const handleOnChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setPrice(newValue * price, type);
  };

  const myFunc = (val) => {
    if ((val * 100) / max < 50) {
      return Math.ceil((val * 100) / max);
    } else if ((val * 100) / max > 50) {
      return Math.floor((val * 100) / max);
    } else {
      return Math.floor((val * 100) / max);
    }
  };

  return (
    <div>
      <input
        className="color-slider"
        style={{
          background: `linear-gradient(90deg, ${color || "#333333"} ${myFunc(
            value
          )}%, ${secColor || "#f43b00"} ${myFunc(value)}%)`,
        }}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleOnChange}
        step="1"
      />
      <h1>{`${Math.floor(value)} ${measure || "totalt"}`}</h1>
    </div>
  );
};
