import React from "react";
import icon from "./question-mark.svg";
import "./radio-choice.styles.scss";
import { BoldHeader } from "../../typography/bold-header/bold-header.component";

export const RadioChoice = ({
  image,
  header,
  background,
  isActive,
  handleClick,
  id,
}) => {
  // Makes the currently clicked radiobutton active, by using the callback-function from its parent to set the state to its ID.
  const makeActive = () => {
    handleClick(id);
  };

  return (
    <div
      onClick={makeActive}
      className={`radio-choice ${isActive && "active"} ${
        isActive === false && "grayed"
      }`}
      style={{ backgroundColor: background }}
    >
      <div className="radio-choice_dot"></div>
      <div className="radio-choice_image">
        {/* <img src={`./${image}`} alt="radio icon" /> */}
        <img
          src={`https://martinfjeld.github.io/price-calculation/ropert.svg`}
          alt="radio icon"
        />
      </div>
      <div className="radio-choice_header">
        <BoldHeader small text={header} />
      </div>
    </div>
  );
};

RadioChoice.defaultProps = {
  image: icon,
};
