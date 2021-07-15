import React from "react";
import PropTypes from "prop-types"; //language Icons

import python from "../../icons/python.svg";
import c from "../../icons/c.svg";
import cpp from "../../icons/cpp.svg";
import java from "../../icons/java.svg";
import js from "../../icons/js.svg";
import das from "../../icons/dsa.svg";
import csharp from "../../icons/csharp.svg";
import kotlin from "../../icons/kotlin.svg";
import swift from "../../icons/swift.svg";

const Icons = props => {
  const {
    iconName,
    className,
    customClickEvent
  } = props;

  const selectIcon = iconName => {
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

  return /*#__PURE__*/React.createElement("img", {
    src: selectIcon(iconName),
    alt: iconName,
    className: className,
    onClick: customClickEvent
  });
};

Icons.propTypes = {
  /** Code of the Language*/
  iconName: PropTypes.string,

  /** Extra Classname */
  classNames: PropTypes.string,

  /** Custom Click Event Listener*/
  customClickEvent: PropTypes.func
};
Icons.defaultProps = {
  iconName: "",
  classNames: ""
};
export default Icons;