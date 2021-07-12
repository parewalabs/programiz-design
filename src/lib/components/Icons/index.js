import React from "react";

//language Icons
import python from "../../icons/python.svg";
import c from "../../icons/c.svg";
import cpp from "../../icons/cpp.svg";
import java from "../../icons/java.svg";
import js from "../../icons/js.svg";
import das from "../../icons/dsa.svg";
import csharp from "../../icons/csharp.svg";
import kotlin from "../../icons/kotlin.svg";
import swift from "../../icons/swift.svg";

const Icons = (props) => {
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
      src={selectIcon(props.iconName)}
      alt={props.alt}
      className={props.className}
      onClick={props.customClickEvent}
    />
  );
};

export default Icons;
