import React from "react";
import certificateSmall from "../../images/certificateSmall.png";
import artwork from "../../images/artwork.png";
import Buttons from "../Buttons/Index";

const CourseProgressCard = (props) => {
  return (
    <div className="w-327 lg:w-730 h-auto border-2 border-separate rounded focus:ring-2 hover:border-secondary relative">
      <img
        src={artwork}
        alt="artwork"
        className="w-273 h-20 absolute pt-0 right-3.5"
      />
      <div className="pt-10 pl-10">
        <h2 className="text-3xl font-bold text-primary-blue">
          {props.complete === "0%"
            ? "Take your first step today!"
            : "Good to see you back!"}
        </h2>
        <div className="float-right pr-8">
          <img src={certificateSmall} alt="cerificate" />
        </div>
        <p className="text-sm text-primary-blue pt-4">
          {props.complete} Complete
        </p>
        <div className="relative pt-2 pr-28">
          <div className="overflow-hidden h-1 flex rounded bg-primary-blue bg-opacity-10">
            <div
              className="rounded bg-main w-1/4"
              style={{ width: props.complete }}
            ></div>
          </div>
        </div>
        <p className="text-sm text-primary-blue pt-4 truncate">
          {props.message}
        </p>
        <div className="pt-4 pb-10">
          <Buttons
            otherClass="bg-main text-white py-3 px-4"
            customClickEvent={props.customClickEvent}
          >
            {props.complete === "0%" ? "Start" : "Continue"} Learning
          </Buttons>
        </div>
      </div>
    </div>
  );
};

export default CourseProgressCard;
