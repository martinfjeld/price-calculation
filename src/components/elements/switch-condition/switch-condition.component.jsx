import React, { useState } from "react";
import "./switch-condition.styles.scss";

export const SwitchCondition = ({ yes, no, setPrice, price, type }) => {
  const [condition, setCondition] = useState([0, false]);

  let newCondition = [condition[1] ? 0 : price, !condition[1]];

  const handleClick = () => {
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
      <h1 className="switch-condition_header">{condition[1] ? yes : no}</h1>
    </div>
  );
};
