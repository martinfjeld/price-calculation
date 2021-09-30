import React, { useState } from "react";
import { BoldHeader } from "../../typography/bold-header/bold-header.component";
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
  priceList,
}) => {
  const [value, setValue] = useState(min);

  const handleOnChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    const newValue2 = priceList[newValue][1];
    setPrice(newValue2, type);
  };

  const myFunc = (val) => {
    if ((val * 100) / (priceList.length - 1) < 50) {
      return Math.ceil((val * 100) / (priceList.length - 1));
    } else if ((val * 100) / (priceList.length - 1) > 50) {
      return Math.floor((val * 100) / (priceList.length - 1));
    } else {
      return Math.floor((val * 100) / (priceList.length - 1));
    }
  };

  return (
    <div className="color-slider">
      <input
        className="color-slider_bar"
        style={{
          background: `linear-gradient(90deg, ${color || "#333333"} ${myFunc(
            value
          )}%, ${secColor || "var(--red-color)"} ${myFunc(value)}%)`,
        }}
        type="range"
        min={0}
        max={priceList.length - 1}
        value={value}
        onChange={handleOnChange}
        step="1"
      />
      <BoldHeader text={`${priceList[value][0]} ${measure || ""}`} />
    </div>
  );
};
