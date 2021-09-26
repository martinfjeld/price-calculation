import React, { useState } from "react";
import "./calculator.styles.scss";
import { RadioChoices } from "../radio-choices/radio-choices.component";
import { ColorSlider } from "../../elements/color-slider/color-slider.component";
export const Calculator = () => {
  const [prices, setPrice] = useState({
    type: 0,
    length: 0,
    persons: 0,
    animation: 0,
    stills: 0,
    locations: 0,
  });

  const getPrice = (price, priceCat) => {
    const newPrices = {
      ...prices,
      [priceCat]: price,
    };

    setPrice(newPrices);
    let prevPrices = newPrices;
    console.log(prevPrices);
  };
  return (
    <div className="calculator">
      <RadioChoices
        setPrice={getPrice}
        choices={[
          { header: "Reklame", background: "var(--green-color)", price: 80000 },
          {
            header: "Kundecase",
            background: "var(--blue-color)",
            price: 100000,
          },
          {
            header: "Brand Video",
            background: "var(--orange-color)",
            price: 200000,
          },
        ]}
      />
      <ColorSlider
        price={2000}
        min={0}
        max={15}
        color="var(--yellow-color)"
        type="length"
        measure="min."
        setPrice={getPrice}
      />

      <ColorSlider
        price={10000}
        min={0}
        max={8}
        color="var(--blue-color)"
        type="persons"
        setPrice={getPrice}
        measure="stk."
      />
      <h1>{Object.values(prices).reduce((a, b) => a + b)}</h1>
    </div>
  );
};
