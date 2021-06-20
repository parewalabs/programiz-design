import React from "react";

const WelcomeMessage = (props) => {
  return (
    <div className="w-327 lg:w-full">
      <h1 className="text-primary-blue text-4xl leading-54 font-bold">
        Welcome{props.createdJustNow === true ? " Back" : ""}, {props.userName}
      </h1>
      <p className="text-primary-blue text-opacity-80 text-sm leading-4 font-normal">
        Learn to code with our wide range of coding courses. Try examples, solve
        challenges & strengthen your skills.
      </p>
    </div>
  );
};

export default WelcomeMessage;
