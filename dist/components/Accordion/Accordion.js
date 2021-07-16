import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = props => {
  const {
    headerComponent,
    children,
    className
  } = props;
  const [isActive, setActive] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("accordion", className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "accordion__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames("accordion__title", {
      "accordion__title--active": isActive
    }),
    onClick: () => setActive(!isActive)
  }, headerComponent, /*#__PURE__*/React.createElement(FiChevronDown, {
    className: "accordion__chevron"
  })), /*#__PURE__*/React.createElement(AnimatePresence, {
    initial: false
  }, isActive && /*#__PURE__*/React.createElement(motion.div, {
    initial: "collapsed",
    animate: "open",
    exit: "collapsed",
    variants: {
      open: {
        opacity: 1,
        height: "auto"
      },
      collapsed: {
        opacity: 0,
        height: 0
      }
    },
    transition: {
      type: "spring",
      stiffness: 1000,
      damping: 100
    },
    className: "accordion__content"
  }, children))));
};

Accordion.propTypes = {
  /** Title or html elements */
  headerComponent: PropTypes.node,
  children: PropTypes.node
};
Accordion.defaultProps = {
  headerComponent: "",
  children: ""
};
export default Accordion;