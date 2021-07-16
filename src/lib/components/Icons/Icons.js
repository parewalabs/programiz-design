import React from "react";
import PropTypes from "prop-types";

import {python, c, cpp, java, js, das, csharp, kotlin, swift} from "lib/icons/icon";

const Icons = (props) => {
  const {iconName, className, customClickEvent} = props;
  const selectIcon = (iconName) => {
    switch (iconName) {
      case "python":
        return python;
      case "c":
        return c;
      case "cpp":
        return cpp;
      case "java":
        return java;
      case "js":
        return js;
      case "dsa":
        return das;
      case "csharp":
        return csharp;
      case "kotlin":
        return kotlin;
      case "swift":
        return swift;
      default:
        return "";
    }
  };
  return (
    <img
      src={selectIcon(iconName)}
      alt={iconName}
      className={className}
      onClick={customClickEvent}
    />
  );
};

Icons.propTypes = {
  /** Code of the Language*/
  iconName: PropTypes.string,
  /** Extra Classname */
  classNames: PropTypes.string,
  /** Custom Click Event Listener*/
  customClickEvent: PropTypes.func,
};

Icons.defaultProps = {
  iconName: "",
  classNames: "",
};

export default Icons;
