import React from "react";
import shape from "../../images/Shape.png";
import Buttons from "../Buttons/Index";

const ChallengesPageCard = (props) => {
  return (
    <div className="lg:w-730 w-327  h-210 rounded border-2 text-primary-blue focus:ring-2 hover:border-main relative">
      <div className="pt-8 pl-8 absolute">
        <p className="text-base text-primary-blue">
          {props.challengeTaken === true
            ? "Resume your last challenge:"
            : "Start first challenge:"}
        </p>
        <h3 className="text-xl font-semibold text-primary-blue">
          Store Item and Access it
        </h3>
        <Buttons otherClass="bg-main text-white py-3 px-12 mt-4">Start</Buttons>
      </div>
      <img src={shape} className="absolute top-8 right-4" alt="design shape" />
    </div>
  );
};

export default ChallengesPageCard;
