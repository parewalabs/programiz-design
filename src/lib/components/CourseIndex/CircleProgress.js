import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import correct from "../../icons/correct.svg";
import correctColor from "../../icons/correctColor.svg";

const CircleProgress = (props) => {
  const checked = props.percentage === 100 ? correctColor : correct;
  return (
    <div style={{ width: "20px" }}>
      <CircularProgressbarWithChildren
        value={props.percentage}
        styles={buildStyles({
          pathColor: "#0556F3",
          trailColor: "#D3DCE6",
          backgroundColor: "#FFFFF",
        })}
      >
        <img src={checked} alt="checked" />
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircleProgress;
