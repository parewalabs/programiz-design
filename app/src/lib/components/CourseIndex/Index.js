import React from "react";
import { useState } from "react";
import Icons from "../Icons/index";
import "./CourseIndex.css";

const CourseIndex = (props) => {
  const [isActive, setActive] = useState("");
  const [downarrow, setDownarrow] = useState("");
  const [uparrow, setUparrow] = useState("hidden");

  const toggleClass = () => {
    setActive(isActive === "" ? " active" : "");
    setDownarrow(downarrow === "" ? "hidden" : "");
    setUparrow(uparrow === "hidden" ? "" : "hidden");
  };

  return (
    <div className="accordion lg:w-730 w-327 mb-2">
      <div className={`contentBx border border-seperator rounded ${isActive}`}>
        <div
          className="label h-60 px-6 pt-3.5 cursor-pointer"
          onClick={toggleClass}
        >
          <h3 className="text-primary-blue text-xl leading-30 font-medium inline">
            {props.course.title}
          </h3>
          <div className="float-right">
            <Icons
              iconName="downarrow"
              alt="downarrow"
              className={`${downarrow}`}
            />
            <Icons iconName="uparrow" alt="uparrow" className={`${uparrow}`} />
          </div>
        </div>
        <div className="border-t border-separate content">
          <ul className="StepProgress">
            {props.course &&
              props.course.lessons.map((lesson) => {
                return (
                  <li
                    className={`StepProgress-item is-done hover:text-main cursor-pointer text-primary-blue mb-4 ${
                      lesson.progress === true ? "font-bold" : ""
                    }`}
                    key={lesson.id}
                    onClick={props.customClickEvent}
                  >
                    {lesson.title}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseIndex;
