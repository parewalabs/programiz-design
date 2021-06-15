import React from "react";
import Icons from "../Icons";
import LCCvector1 from "../../images/LCCvector1.svg";
import LCCvector2 from "../../images/LCCvector2.svg";
import LCCvector3 from "../../images/LCCvector3.svg";
import LCCvector4 from "../../images/LCCvector4.svg";
import LCCvector5 from "../../images/LCCvector5.svg";
import LCCvector6 from "../../images/LCCvector6.svg";

const LanguageCategoryCard = (props) => {
  let vector1 = "";
  let vector2 = "";
  if (props.vector === 1) {
    vector1 = LCCvector1;
    vector2 = LCCvector2;
  } else if (props.vector === 2) {
    vector1 = LCCvector3;
    vector2 = LCCvector4;
  } else {
    vector1 = LCCvector5;
    vector2 = LCCvector6;
  }
  return (
    <div
      className="w-160 h-200 rounded border-2 text-primary-blue focus:ring-2 hover:border-main relative bg-white"
      style={{
        backgroundImage: `url(${vector1}), url(${vector2})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left, top right",
      }}
    >
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
