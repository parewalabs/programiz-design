import React from "react";
import Icons from "../Icons";

const LanguageCategoryCard = (props) => {
  return (
    <div className="w-160 h-200 rounded border-2 text-primary-blue focus:ring-2 hover:border-main">
      <div className="mx-5 mt-6">
        <Icons
          iconName={props.languageCode}
          alt={props.language}
          className="inline"
        />
        <h5 className="font-normal text-base mt-7 uppercase font-semibold text-primary-blue">
          {props.language} Programming
        </h5>
        <span
          onClick={props.customClickEvent}
          className="text-link mt-6 text-sm pt-4 cursor-pointer"
        >
          View{" "}
          <Icons iconName="rightarrow" alt="rightarrow" className="inline" />
        </span>
      </div>
    </div>
  );
};

export default LanguageCategoryCard;
