import React from "react";
import { useState } from "react";
import Icons from "../Icons/index";
import "./SidebarCourseIndex.css";
import CircleProgress from "../CourseIndex/CircleProgress";

const SidebarCourseIndex = (props) => {
  const [isActive, setActive] = useState(false);
  const [downarrow, setDownarrow] = useState("");
  const [uparrow, setUparrow] = useState("hidden");

  const toggleClass = () => {
    setActive(!isActive);
    setDownarrow(downarrow === "" ? "hidden" : "");
    setUparrow(uparrow === "hidden" ? "" : "hidden");
  };

  return (
    <div className="sidebarAccordion w-72 h-full">
      <div
        className={`contentBx border-t border-seperator ${
          isActive === true ? "active" : ""
        }`}
      >
        <div
          className={`label h-12 px-6 cursor-pointer flex justify-between ${
            isActive === true
              ? "bg-primary-blue bg-opacity-20 text-primary-blue"
              : ""
          }`}
          onClick={toggleClass}
        >
          <h3
            className="text-primary-blue text-lg leading-7 font-medium truncate overflow-hidden flex items-center"
            title={props.course.title}
          >
            {props.course.title}
          </h3>
          <div className="flex justify-end pl-2">
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
                    <a
                      href={`/lesson/${lesson.id}/details`}
                      className="truncate ml-2"
                      title={lesson.title}
                    >
                      {lesson.title}
                    </a>
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
                <a
                  href={`/quiz/${props.course.quiz.id}`}
                  className="truncate ml-2"
                  title={props.course.quiz.title}
                >
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

export default SidebarCourseIndex;
