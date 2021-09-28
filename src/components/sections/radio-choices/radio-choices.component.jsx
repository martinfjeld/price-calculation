import React, { useState } from "react";
import { RadioChoice } from "../../elements/radio-choice/radio-choice.component";
import "./radio-choices.styles.scss";

export const RadioChoices = ({ choices, setPrice, addClass }) => {
  const [radios, setRadios] = useState([...choices]);

  const newRadios = [...radios];

  // Set the currently clicked radio to active, and the rest to inactive
  const makeActive = (id) => {
    newRadios.map((radio, index) => {
      return index === id ? (radio.isActive = true) : (radio.isActive = false);
    });

    // Set the state to value from the newly mapped array
    setRadios(newRadios);

    // Set the new current price

    setPrice(radios[id].price, "type");
  };

  return (
    <div className={`radio-choices ${addClass || ""}`}>
      {
        // Map through the objects from state and make components of them
        radios.map((choice, index) => {
          return (
            <RadioChoice
              key={index}
              id={index}
              handleClick={makeActive}
              header={choice.header}
              background={choice.background}
              image={choice.image}
              isActive={choice.isActive}
              price={choice.price}
            />
          );
        })
      }
    </div>
  );
};
