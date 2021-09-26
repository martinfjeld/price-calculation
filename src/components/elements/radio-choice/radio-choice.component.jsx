import React from "react";
import icon from "./question-mark.svg";
import "./radio-choice.styles.scss";

export const RadioChoice = ({
  image,
  header,
  background,
  isActive,
  handleClick,
  id,
}) => {
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
        <img src={image} alt="radio icon" />
      </div>
      <div className="radio-choice_header">
        <h2>{header}</h2>
      </div>
    </div>
  );
};

RadioChoice.defaultProps = {
  image: icon,
};
