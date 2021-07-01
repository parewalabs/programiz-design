import React from "react";
import ellipse from "../../icons/ellipse.svg";
import Icons from "../Icons";
import courseVector1 from "../../images/courseVector1.png";
import courseVector2 from "../../images/courseVector2.svg";

const CourseCard = (props) => {
  const SelectVector = (vectorType) => {
    switch (vectorType) {
      case 1:
        return courseVector1;
      default:
        return courseVector2;
    }
  };
  let vector = {
    backgroundImage: `url(${SelectVector(props.vector)})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
  };
  return (
    <div
      className="w-327 lg:w-350 h-236 rounded border-2 text-primary-blue focus:ring-2 hover:border-secondary relative bg-white"
      style={vector}
    >
      <div className="mx-5 mt-5">
        <h3 className="font-normal text-22 leading-30 font-semibold text-primary-blue">
          {props.courseName}
        </h3>
        <div className="pt-2">
          <Icons iconName="book" alt="book" className="inline" />
          {props.tags.map((tag, index) => {
            return (
              <li
                className="text-sm text-caption inline text-opacity-60"
                key={index}
              >
                <img
                  src={ellipse}
                  alt="tags"
                  className={index === 0 ? "hidden inline" : "inline"}
                />{" "}
                {tag}
                {"  "}
              </li>
            );
          })}
        </div>
        {props.complete && (
          <div>
            <p className="pt-4 text-xs font-normal">
              {props.complete} Complete
            </p>
            <div className="relative pt-2 pb-4 pr-7">
              <div className="overflow-hidden h-1 flex rounded bg-primary-blue bg-opacity-10">
                <div
                  className="rounded bg-secondary w-1/4"
                  style={{ width: props.complete }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <span
          onClick={props.customClickEvent}
          className="text-link text-sm cursor-pointer"
        >
          Continue Learning{" "}
          <Icons iconName="rightarrow" alt="rightarrow" className="inline" />
        </span>
      </div>
    </div>
  );
};

export default CourseCard;
