import React from "react";
import completed from "../../images/completed.png";

const CompletedPopup = (props) => {
  return (
    <div className="w-705 h-730 border border-seperator">
      <div className="w-full relative text-center">
        <h2 className="text-xl text-primary-blue font font-semibold absolute pt-8 left-2/4 -ml-20">
          Successfully
          <br />
          Completed {props.type === "challenge" ? "Challenge" : "Lesson"}
        </h2>

        <img src={completed} className="" alt="completed successfull" />
      </div>

      <div className="px-24">
        <div className={props.type !== "challenge" ? "hidden" : ""}>
          <p className="flex justify-center text-base text-primary-blue pt-10 pb-8">
            We added {props.score} points to your leaderboard
          </p>
          <hr className="flex justify-center border border-seperator" />
        </div>

        <div className="flex justify-center pt-10">
          <p className="text-base text-primary-blue ">Up Next:</p>
        </div>
        <h2 className="text-xl text-primary-blue font font-semibold flex justify-center pt-2">
          {props.next}
        </h2>
        <div className="pt-4 flex justify-center ">
          <button className="bg-main text-white font-semibold rounded py-3 px-20">
            Start the {props.type === "challenge" ? "Challenge" : "Quiz"}
          </button>
        </div>
        <span className="pt-4 flex justify-center text-link text-xs font-normal">
          Go back to the{" "}
          {props.type === "challenge" ? "Challenge" : "Course Index"}
        </span>
      </div>
    </div>
  );
};

export default CompletedPopup;
