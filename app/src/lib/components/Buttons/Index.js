import React from "react";

const Buttons = (props) => {
  return (
    <div className="">
      <button
        className={
          "text-base disabled:opacity-50 font-semibold rounded " +
          props.otherClass
        }
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Buttons;
