import "../../index.css";
import React from "react";
import rightarrow from "../../icons/rightarrow.svg";
import python from "../../icons/python.svg";
import c from "../../icons/c.svg";
import cpp from "../../icons/cpp.svg";

const LanguageCategoryCard = (params) => {
  let language = "";
  if (params.language === "python") {
    language = python;
  } else if (params.language === "c") {
    language = c;
  } else {
    language = cpp;
  }
  return (
    <div className="w-160 h-200 rounded border-2 text-primary-blue focus:ring-2 hover:border-main">
      <div className="mx-5 mt-6">
        <div className="rounded-full w-9 h-35.71 items-center justify-center bg-main">
          <img src={language} alt="" className="inline" />
        </div>
        <h5 className="font-normal text-base mt-7 uppercase font-semibold text-primary-blue">
          {params.language} Programming
        </h5>
        <a href="#" className="text-link mt-6 text-sm pt-4">
          View <img src={rightarrow} alt="" className="inline" />
        </a>
      </div>
    </div>
  );
};

export default LanguageCategoryCard;
