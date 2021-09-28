import React, { useState } from "react";
import "./calculator.styles.scss";
import { RadioChoices } from "../radio-choices/radio-choices.component";
import { ColorSlider } from "../../elements/color-slider/color-slider.component";
import { SwitchCondition } from "../../elements/switch-condition/switch-condition.component";
import { MarginSection } from "../margin-section/margin-section.component";
import { MarginSectionFifty } from "../margin-section-fifty/margin-section-fifty.component";
import { SVGSection } from "../SVG-section/SVG-section.component";
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
  };
  return (
    <div className="calculator">
      <MarginSection fifty first big>
        <MarginSectionFifty>
          <MarginSection first header="Type video">
            <RadioChoices
              setPrice={getPrice}
              choices={[
                {
                  header: "Reklame",
                  background: "var(--green-color)",
                  price: 80000,
                  image: "ropert.svg",
                },
                {
                  header: "Kundecase",
                  background: "var(--blue-color)",
                  price: 100000,
                  image: "ropert.svg",
                },
                {
                  header: "Brand Video",
                  background: "var(--orange-color)",
                  price: 200000,
                  image: "ropert.svg",
                },
              ]}
            />
          </MarginSection>
          <MarginSection header="Videolengde">
            <ColorSlider
              price={2000}
              min={0}
              max={15}
              color="var(--yellow-color)"
              type="length"
              setPrice={getPrice}
              priceList={[
                ["0 sek.", 0],
                ["15-30 sek.", 3000],
                ["30-60 sek.", 4000],
                ["1-2 min.", 8000],
                ["2-3 min.", 18000],
                ["3-4 min.", 40000],
                ["4+ min.", 100000],
              ]}
            />
          </MarginSection>

          <MarginSection header="Personer foran kamera">
            <ColorSlider
              price={10000}
              min={0}
              max={8}
              color="var(--blue-color)"
              type="persons"
              setPrice={getPrice}
              measure="stk."
              priceList={[
                ["0 ", 0],
                ["1 ", 0],
                ["2 ", 10000],
                ["3 ", 20000],
                ["4 ", 30000],
                ["5 ", 40000],
                ["6 ", 50000],
                ["7 ", 600000],
                ["8 ", 700000],
              ]}
            />
          </MarginSection>

          <MarginSection fifty borderBottom>
            <MarginSectionFifty header="Animasjon">
              <SwitchCondition
                yesLabel="YES!"
                noLabel="NOPE"
                setPrice={getPrice}
                type="animation"
                price={25000}
              />
            </MarginSectionFifty>
            <MarginSectionFifty header="Stillbilder">
              <SwitchCondition
                yesLabel="YES!"
                noLabel="NOPE"
                setPrice={getPrice}
                type="stills"
                price={35000}
              />
            </MarginSectionFifty>
          </MarginSection>
        </MarginSectionFifty>
        <MarginSectionFifty>
          <SVGSection
            setPrice={getPrice}
            type="locations"
            properties={[
              { name: "nordnorge", color: "#5ACF6C", price: 15000 },
              {
                name: "trondelag",
                display: "trøndelag",
                color: "#DBF035",
                price: 12500,
              },
              {
                name: "ostlandet",
                display: "østlandet",
                color: "#80ABFE",
                price: 10000,
              },
              { name: "vestlandet", color: "#FA9902", price: 14000 },
              {
                name: "sorlandet",
                display: "sørlandet",
                color: "#A84BEA",
                price: 13000,
              },
            ]}
          />
        </MarginSectionFifty>
      </MarginSection>
      <h1>{Object.values(prices).reduce((a, b) => a + b)}</h1>
    </div>
  );
};
