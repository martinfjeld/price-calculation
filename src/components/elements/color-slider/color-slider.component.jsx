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
  // The current value of where the thumb is positioned.
  const [value, setValue] = useState(min);

  // Handling when the value changes, and sets the new state.
  const handleOnChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    const newValue2 = priceList[newValue][1];
    setPrice(newValue2, type);
  };

  // Rounds the number, depending on where the thumb is, so that it doesn't go out of balance and expose the colorsplit hiding in the middle of the thumb
  const splitMagnet = (val) => {
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
          background: `linear-gradient(90deg, ${
            color || "#333333"
          } ${splitMagnet(value)}%, ${
            secColor || "var(--red-color)"
          } ${splitMagnet(value)}%)`,
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
