import React from "react";
import PropTypes from 'prop-types'
import classNames from "classnames";

const Card = (props) => {
  const { children, hasShadow } = props;
  
  return (
    <div className={classNames("card", { "card--shadowed": hasShadow})} {...props}>
      { children }
    </div>
  );
};

Card.propTypes = {
  /** Adds Shadow to the Card */
  hasShadow: PropTypes.bool,
}

Card.defaultProps = {
  hasShadow: false
}

export default Card;
