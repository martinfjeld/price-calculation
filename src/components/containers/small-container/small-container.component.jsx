import React from "react";
import { SkinnyHeader } from "../../typography/skinny-header/skinny-header.component";
import "./small-container.styles.scss";
export const SmallContainer = ({ children, header, row, clean }) => {
  let hasFifty = false;

  for (let child = 0; child < children.length; child++) {
    const element = children[child];
    if (element.type.name === "SmallFiftyContainer") {
      hasFifty = true;
      break;
    }
  }

  return (
    <div
      className={`small-container${hasFifty ? " contains-fifty" : ""}${
        row ? " row" : ""
      }${clean ? " clean" : ""}`}
    >
      {!hasFifty && <SkinnyHeader text={header} />}
      {children}
    </div>
  );
};
