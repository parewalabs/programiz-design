import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";
const Popup = /*#__PURE__*/forwardRef((props, ref) => {
  const [isShown, togglePopup] = useState(false);
  const {
    children
  } = props;
  useImperativeHandle(ref, () => ({
    togglePopupFunc() {
      togglePopup(!isShown);
    }

  }));
  useEffect(function setupListener() {
    const detectEscape = event => {
      if (event.key === "Escape") {
        togglePopup(false);
      }
    };

    window.addEventListener("keyup", detectEscape);
    return function cleanupListener() {
      window.removeEventListener("keyup", detectEscape);
    };
  });
  return /*#__PURE__*/React.createElement(AnimatePresence, null, isShown && /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    className: "popup-container"
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      y: "100%",
      opacity: 0,
      x: "-50%"
    },
    animate: {
      y: 0,
      opacity: 1,
      x: "-50%"
    },
    exit: {
      y: "100%",
      opacity: 0,
      x: "-50%"
    },
    className: "popup"
  }, /*#__PURE__*/React.createElement("button", {
    className: "popup__button",
    onClick: () => togglePopup(!isShown)
  }, /*#__PURE__*/React.createElement(FiX, {
    className: "popup__icon"
  })), /*#__PURE__*/React.createElement("div", {
    className: "popup__container"
  }, children))));
});
Popup.propTypes = {
  /** Contents of the Popup*/
  children: PropTypes.node
};
Popup.defaultProps = {
  children: ""
};
export default Popup;