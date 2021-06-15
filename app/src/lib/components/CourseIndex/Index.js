import React from "react";
import { useState } from "react";
import Icons from "../Icons/index";
import "./CourseIndex.css";

const CourseIndex = () => {
  const [isActive, setActive] = useState("");
  const [downarrow, setDownarrow] = useState("");
  const [uparrow, setUparrow] = useState("hidden");

  const toggleClass = () => {
    setActive(isActive === "" ? " active" : "");
    setDownarrow(downarrow === "" ? "hidden" : "");
    setUparrow(uparrow === "hidden" ? "" : "hidden");
  };

  return (
    <div className="accordion">
      <div
        className={`contentBx w-730 border border-seperator rounded ${isActive}`}
      >
        <div className="label px-6 py-2 cursor-pointer" onClick={toggleClass}>
          <h3 className="text-primary-blue text-xl leading-30 font-medium inline">
            Introduction
          </h3>
          <Icons
            iconName="downarrow"
            alt="downarrow"
            className={`float-right inline pt-1 ${downarrow}`}
          />
          <Icons
            iconName="uparrow"
            alt="uparrow"
            className={`float-right inline pt-1 ${uparrow}`}
          />
        </div>
        <div className="border-t border-separate content">
          <ul className="StepProgress">
            <li className="StepProgress-item is-done">Post a contest</li>
            <li className="StepProgress-item is-done">Award an entry</li>
            <li className="StepProgress-item current">Post a contest</li>
            <li className="StepProgress-item">Handover</li>
            <li className="StepProgress-item">Provide feedback</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseIndex;
