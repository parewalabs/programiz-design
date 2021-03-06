import React from "react";
import Icons from "../Icons";

const AllLanguagesCard = (props) => {
  return (
    <div className="w-160 h-200 rounded border-2 text-primary-blue focus:ring-2 hover:border-main bg-white">
      <div className="ml-5 mt-20 cursor-pointer">
        <span
          onClick={props.customClickEvent}
          className="text-link mt-6 text-lg font-bold pt-4"
        >
          View all Languages{" "}
        </span>
        <Icons
          iconName="rightarrow"
          alt="right arrow"
          className="inline w-6 "
        />
      </div>
    </div>
  );
};

export default AllLanguagesCard;
