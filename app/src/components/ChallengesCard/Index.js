import "../../index.css";
import React from "react";
import challengesIcon from "../../icons/challengesIcon.svg";
import ellipse from "../../icons/ellipse.svg";
import newTag from "../../icons/newTag.svg";

const ChallengesCard = (props) => {
  return (
    <div className="w-160 h-200 rounded border-2 text-primary-blue focus:ring-2 hover:border-main">
      <div className="mx-4 mt-4">
        <div className=" h-5 w-37 border border-seperator rounded-xl flex items-center justify-center float-right">
          <span className="align-middle text-sm font-bold text-warning">
            +{props.challengePoints}
          </span>
        </div>
        <div className="h-14 relative flex">
          {props.newChallange ? (
            <img src={newTag} alt="" className="absolute left-3 -top-1" />
          ) : (
            ""
          )}
          <img src={challengesIcon} alt="" className="" />
        </div>
        <h3 className="text-xl mt-8">{props.challengeName}</h3>
        <div className="pt-2">
          {props.tags.map((tag, index) => {
            return (
              <li
                className="text-sm text-caption text-opacity-60 inline"
                key={index}
              >
                <img
                  src={ellipse}
                  alt=""
                  className={index === 0 ? "hidden inline" : "inline"}
                />{" "}
                {tag}{" "}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChallengesCard;
