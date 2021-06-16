import React from "react";
import completed from "../../images/completed.png";
import Buttons from "../Buttons/Index";

const CompletedPopup = (props) => {
  return (
    <div className="lg:w-705 w-327 h-autp border border-seperator bg-white">
      <div className="w-full relative text-center">
        <h2 className="text-xl text-primary-blue font font-semibold absolute pt-8 left-2/4 -ml-20">
          Successfully
          <br />
          Completed {props.type === "challenge" ? "Challenge" : "Lesson"}
        </h2>

        <img src={completed} className="" alt="completed successfull" />
      </div>

      <div className="flex flex-col justify-center">
        <div className={props.type !== "challenge" ? "hidden" : ""}>
          <p className="flex justify-center text-base text-primary-blue pt-10 pb-8">
            We added {props.score} points to your leaderboard
          </p>
          <hr className="flex justify-center border border-seperator bg-seperator mx-20" />
        </div>

        <div className="flex justify-center pt-10">
          <p className="text-base text-primary-blue ">Up Next:</p>
        </div>
        <h2 className="text-xl text-primary-blue font font-semibold flex justify-center pt-2">
          {props.next}
        </h2>
        <div className="pt-4 flex justify-center ">
          <Buttons otherClass="bg-main text-white py-3 px-20">
            Start the {props.type === "challenge" ? "Challenge" : "Quiz"}
          </Buttons>
        </div>
        <span className="pt-4 pb-40 flex justify-center text-link text-xs font-normal">
          Go back to the{" "}
          {props.type === "challenge" ? "Challenge" : "Course Index"}
        </span>
      </div>
    </div>
  );
};

export default CompletedPopup;
