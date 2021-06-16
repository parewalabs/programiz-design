import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import correct from "../../icons/correct.svg";
import correctColor from "../../icons/correctColor.svg";

const CircleProgress = props => {
  const checked = props.percentage === 100 ? correctColor : correct;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "20px"
    }
  }, /*#__PURE__*/React.createElement(CircularProgressbarWithChildren, {
    value: props.percentage,
    styles: buildStyles({
      pathColor: "#0556F3",
      trailColor: "#D3DCE6",
      backgroundColor: "#FFFFF"
    })
  }, /*#__PURE__*/React.createElement("img", {
    src: checked,
    alt: "checked"
  })));
};

export default CircleProgress;