import React from "react";
import path from "../../images/paths.png";
import {Button} from "lib";

const ExampleSuggestionCard = (props) => {
  return (
    <div className="lg:w-730 w-327 h-210 rounded border-2 text-primary-blue relative">
      <div className="pt-8 px-8">
        <p className="text-base text-primary-blue">Example Suggestion:</p>
        <h3 className="text-xl text-primary-blue font-semibold">
          {props.name}
        </h3>
        <div className="pt-4 flex ">
          <Button
            customClickEvent={props.customClickEvent}
            otherClass="bg-main text-white py-3 px-12"
          >
            Start
          </Button>
        </div>
      </div>
      <img
        src={path}
        alt="design"
        className="absolute -bottom-0.5 -right-0.5"
      />
    </div>
  );
};

export default ExampleSuggestionCard;
