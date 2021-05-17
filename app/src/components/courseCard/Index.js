import "../../index.css";
import React from "react";
import rightarrow from "../../icons/rightarrow.svg";
import book from "../../icons/book.svg";
import ellipse from "../../icons/ellipse.svg";

const CourseCard = (props) => {
  return (
    <div className="w-160 lg:w-350 h-236 rounded border-2 text-primary-blue focus:ring-2 hover:border-secondary">
      <div className="mx-5 mt-5">
        <h3 className="font-normal text-22 leading-30 font-semibold text-primary-blue">
          {props.courseName}
        </h3>
        <div className="pt-2">
          <span className="text-sm text-caption">
            <img src={book} alt="" className="inline w-13.33" />{" "}
            {props.chapters} Chapters
          </span>
          {"  "}
          {props.tags.map((tag, index) => {
            return (
              <li className="text-sm text-caption inline list-disc" key={index}>
                <img src={ellipse} alt="" className="inline" /> {tag}
                {"  "}
              </li>
            );
          })}
        </div>
        <a href="#" className="text-link text-sm pt-4">
          Start Learning <img src={rightarrow} alt="" className="inline" />
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
