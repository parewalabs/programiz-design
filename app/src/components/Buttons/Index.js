import React from "react";

const Buttons = () => {
  return (
    <div className="">
      <button className="bg-main text-base text-white font-semibold rounded py-3 px-4 ">
        Primary
      </button>{" "}
      <button
        className="bg-main disabled:opacity-50 text-white text-base font-semibold py-3 px-4 rounded"
        disabled
      >
        Disabled
      </button>{" "}
      <button className="text-base text-link font-semibold rounded py-3 px-4 border border-main">
        Outline Button
      </button>{" "}
      <button className="bg-blue-100 text-link font-semibold rounded py-3 px-4">
        Offer Button
      </button>
    </div>
  );
};

export default Buttons;
