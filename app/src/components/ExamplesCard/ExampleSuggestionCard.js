import React from "react";
import path from "../../images/paths.png";

const ExampleSuggestionCard = (props) => {
  return (
    <div className="w-730 h-210 rounded border-2 text-primary-blue relative">
      <div className="pt-8 pl-8">
        <p className="text-base text-primary-blue">Example Suggestion:</p>
        <h3 className="text-xl text-primary-blue font-semibold">
          {props.name}
        </h3>
        <div className="pt-4 flex ">
          <button className="bg-main text-white font-semibold rounded py-3 px-12">
            Start
          </button>
        </div>
      </div>
      <img src={path} alt="design" className="absolute -top-0.5 -right-0.5" />
    </div>
  );
};

export default ExampleSuggestionCard;
