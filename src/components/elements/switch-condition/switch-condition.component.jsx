import React, { useState } from "react";
import "./switch-condition.styles.scss";

export const SwitchCondition = ({
  yesLabel,
  noLabel,
  setPrice,
  price,
  type,
}) => {
  const [condition, setCondition] = useState([0, false]);

  const handleClick = () => {
    let newCondition = [condition[1] ? 0 : price, !condition[1]];
    setCondition(newCondition);
    setPrice(newCondition[0], type);
  };

  return (
    <div>
      <div
        className={`switch-condition ${condition[1] && "active"}`}
        onClick={handleClick}
      >
        <div className="switch-condition_thumb"></div>
      </div>
      <h1 className="switch-condition_header">
        {condition[1] ? yesLabel : noLabel}
      </h1>
    </div>
  );
};
