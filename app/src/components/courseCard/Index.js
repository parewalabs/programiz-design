import "../../index.css";
import React from "react";
import rightarrow from "../../icons/rightarrow.svg";
import book from "../../icons/book.svg";
import ellipse from "../../icons/ellipse.svg";
import vector from "../../images/Vector2.png";

const CourseCard = (props) => {
  return (
    <div className="w-160 lg:w-350 h-236 rounded border-2 text-primary-blue focus:ring-2 hover:border-secondary relative">
      <div className="mx-5 mt-5">
        <h3 className="font-normal text-22 leading-30 font-semibold text-primary-blue">
          {props.courseName}
        </h3>
        <div className="pt-2">
          <img src={book} alt="book" className="inline" />
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
        <span href="#" className="text-link text-sm">
          Continue Learning <img src={rightarrow} alt="" className="inline" />
        </span>
      </div>
      <img
        src={vector}
        alt="profile Course"
        className="absolute top-0 -right-0"
      />
    </div>
  );
};

export default CourseCard;
