import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Card = props => {
  const {
    children,
    shadowed,
    className,
    style
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("card", className, {
      "card--shadowed": shadowed
    }),
    style: style
  }, children);
};

Card.propTypes = {
  /** Adds Shadow to the Card */
  shadowed: PropTypes.bool
};
Card.defaultProps = {
  shadowed: false
};
export default Card;