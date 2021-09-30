import React from "react";
import icon from "./question-mark.svg";
import "./radio-choice.styles.scss";
import { URL } from "../../../config/_config";

import { BoldHeader } from "../../typography/bold-header/bold-header.component";

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
        <img src={`${URL}/${image}`} alt="radio icon" />
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
