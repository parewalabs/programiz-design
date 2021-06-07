import React from "react";

const Avatar = (props) => {
  return (
    <div className={`relative flex  ${props.otherClass}`}>
      <div className="w-9 h-9 rounded-full bg-blue-400">
        {props.profilePic !== "" && (
          <img
            src={props.profilePic}
            alt={props.username}
            className="w-9 rounded-full"
          />
        )}
      </div>
      <div className=" h-5 w-37 bg-white border border-seperator rounded-xl flex items-center justify-center absolute left-0 -bottom-1">
        <span className="align-middle text-sm font-bold text-warning">
          {props.score === undefined ? 0 : props.score}
        </span>
      </div>
    </div>
  );
};

export default Avatar;
