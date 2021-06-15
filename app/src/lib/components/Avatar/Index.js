import React from "react";
import avatar from "../../images/avatar.png";

const Avatar = (props) => {
  return (
    <div className="relative flex">
      <img src={avatar} alt={props.username} className="w-9 rounded-full" />
      <div className=" h-5 w-37 bg-white border border-seperator rounded-xl flex items-center justify-center absolute left-0 -bottom-1">
        <span className="align-middle text-sm font-bold text-warning">
          {props.score}
        </span>
      </div>
    </div>
  );
};

export default Avatar;
