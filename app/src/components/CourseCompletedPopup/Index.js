import React from "react";
import completed from "../../images/completed.png";
import certificate from "../../images/certificate.png";

const CourseCompletedPopup = (props) => {
  return (
    <div className="w-705 h-1145 border border-seperator rounded">
      <div className="w-full relative text-center">
        <h2 className="text-xl text-primary-blue font font-semibold absolute pt-8 left-2/4 -ml-20">
          Successfully
          <br />
          Completed Course
        </h2>

        <img src={completed} className="" />
      </div>

      <div className="px-24">
        <h3 className="pt-16 flex justify-center text-xl font-semibold text-primary-blue">
          Your Course Certificate
        </h3>
        <div className="mt-2 border-4 border-compiler-base rounded shadow-certificate">
          <img src={certificate} />
        </div>
        <div className="pt-4 flex justify-center ">
          <button className="text-link font-semibold rounded py-2 px-6 border border-main">
            Download Course Certificate
          </button>
        </div>
        <hr className="flex justify-center border border-seperator mt-10" />

        <div className="flex justify-center pt-10">
          <p className="text-base text-primary-blue ">Up Next:</p>
        </div>
        <h2 className="text-xl text-primary-blue font font-semibold flex justify-center pt-2">
          {props.next}
        </h2>
        <div className="pt-4 flex justify-center ">
          <button className="w-350 bg-main text-white font-semibold rounded py-3">
            Browse More Courses
          </button>
        </div>
        <a className="pt-4 flex justify-center text-link text-xs font-normal">
          Go back to the Course Index
        </a>
      </div>
    </div>
  );
};

export default CourseCompletedPopup;
