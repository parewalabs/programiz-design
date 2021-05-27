import React from "react";

const Buttons = (props) => {
  return (
    <div className="">
      <button
        className={
          "text-base " +
          props.bgColor +
          " " +
          props.textColor +
          " " +
          props.border +
          " " +
          " disabled:opacity-50 font-semibold rounded py-3 px-4"
        }
        disabled={props.disabled}
      >
        {props.children}
      </button>
      {/*
      
      <button className="bg-blue-100 text-link ">
        Offer Button
      </button>*/}
    </div>
  );
};

export default Buttons;
