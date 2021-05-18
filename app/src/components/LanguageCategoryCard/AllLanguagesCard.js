import "../../index.css";
import React from "react";
import rightarrow from "../../icons/rightarrow.svg";

const AllLanguagesCard = () => {
  return (
    <div className="w-160 h-200 rounded border-2 text-primary-blue focus:ring-2 hover:border-main">
      <div className="ml-5 mt-20">
        <a href="#" className="text-link mt-6 text-lg font-bold pt-4">
          View all Languages{" "}
          <img src={rightarrow} alt="" className="inline h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default AllLanguagesCard;
