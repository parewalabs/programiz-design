import React from "react";
import PropTypes from "prop-types";
import { progressCardArtWork, SmallCertificate } from "lib/images/image";
import { Button, Card, ProgressBar } from "lib";
import { FIRST_STEP, SEE_YOU_BACK, LEARNING, START, CONTINUE } from "lib/language/Card.language";

const CourseProgressCard = props => {
  const {
    completion,
    message,
    customClickEvent
  } = props;
  return /*#__PURE__*/React.createElement(Card, {
    shadowed: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-10x progress-card",
    style: {
      backgroundImage: `url(${progressCardArtWork})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "90% 0px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "fs-h2 color-text-main mb-4x"
  }, completion === 0 ? FIRST_STEP : SEE_YOU_BACK), /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 mr-6x"
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    className: "mb-2x",
    completion: completion
  }), /*#__PURE__*/React.createElement("p", {
    className: "fs-body14 text-primary-blue mb-6x"
  }, message)), /*#__PURE__*/React.createElement("img", {
    src: SmallCertificate,
    alt: "cerificate",
    className: "progress-card__image"
  })), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: customClickEvent,
    className: "btn--block-sm"
  }, completion === 0 ? START : CONTINUE, " ", LEARNING)));
};

CourseProgressCard.propTypes = {
  /** Completion Percentage */
  completion: PropTypes.number,

  /** Message to Show on the card */
  message: PropTypes.string,

  /** Custom Click Event Listener */
  customClickEvent: PropTypes.func
};
CourseProgressCard.defaultProps = {
  completion: 0,
  message: "",
  customClickEvent: ""
};
export default CourseProgressCard;