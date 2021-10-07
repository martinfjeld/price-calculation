import React from "react";
import PropTypes from "prop-types";
import { GiantHeader } from "../../typography/giant-header/giant-header.component";
import "./total-price.styles.scss";

/**
 * Component that takes in an object to accumulate through it to get the total price via. its values.
 *
 * @param {object} prices Object to accumulate
 *
 */

export const TotalPrice = ({ prices }) => {
  return (
    <GiantHeader
      after=",-"
      text={Object.values(prices).reduce((a, b) => a + b)}
    />
  );
};

TotalPrice.propTypes = {
  /** Makes the background dark */
  prices: PropTypes.object,
};
