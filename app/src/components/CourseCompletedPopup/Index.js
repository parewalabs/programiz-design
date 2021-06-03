import React from "react";
import completed from "../../images/completed.png";
import certificate from "../../images/certificate.png";
import Buttons from "../Buttons/Index";

const CourseCompletedPopup = (props) => {
  return (
    <div className="w-705 h-1145 border border-seperator rounded">
      <div className="w-full relative text-center">
        <h2 className="text-xl text-primary-blue font font-semibold absolute pt-8 left-2/4 -ml-20">
          Successfully
          <br />
          Completed Course
        </h2>

        <img src={completed} alt="Completed Successfully" />
      </div>

      <div className="px-24">
        <h3 className="pt-16 flex justify-center text-xl font-semibold text-primary-blue">
          Your Course Certificate
        </h3>
        <div className="mt-2 border-4 border-compiler-base rounded shadow-certificate">
          <img src={certificate} alt="certificate" />
        </div>
        <div className="pt-4 flex justify-center ">
          <Buttons otherClass="text-link py-3 px-6 border border-main">
            Download Course Certificate
          </Buttons>
        </div>
        <hr className="flex justify-center border border-seperator mt-10" />

        <div className="flex justify-center pt-10">
          <p className="text-base text-primary-blue ">Up Next:</p>
        </div>
        <h2 className="text-xl text-primary-blue font font-semibold flex justify-center pt-2">
          {props.next}
        </h2>
        <div className="pt-4 flex justify-center ">
          <Buttons otherClass="bg-main text-white py-3 px-16">
            Browse More Courses
          </Buttons>
        </div>
        <span className="pt-4 flex justify-center text-link text-xs font-normal">
          Go back to the Course Index
        </span>
      </div>
    </div>
  );
};

export default CourseCompletedPopup;
