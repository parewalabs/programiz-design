import React from "react";
import { useState } from "react";
import Icons from "../Icons/index";
import "./CourseIndex.css";
import CircleProgress from "./CircleProgress";

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
          <h3 className="text-primary-blue text-xl leading-30 font-medium inline truncate">
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
                    className={`StepProgress-item is-done hover:text-main cursor-pointer text-primary-blue mb-4 flex items-center ${
                      lesson.progress === true ? "font-bold" : ""
                    }`}
                    key={lesson.id}
                    onClick={props.customClickEvent}
                  >
                    <CircleProgress percentage={33} />
                    <a href={`/lesson/${lesson.id}/details`}>{lesson.title}</a>
                  </li>
                );
              })}
            {props.course.quiz && (
              <li
                className={`StepProgress-item is-done hover:text-main cursor-pointer text-primary-blue mb-4 flex items-center `}
                key={props.course.quiz.id}
                onClick={props.customClickEvent}
              >
                <CircleProgress percentage={0} />
                <a href={`/quiz/${props.course.quiz.id}`}>
                  {props.course.quiz.title}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseIndex;
