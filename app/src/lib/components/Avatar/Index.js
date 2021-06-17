import React from "react";

const Avatar = (props) => {
  return (
    <div className={`relative flex ${props.className}`}>
      <div className={`rounded-full overflow-hidden bg-blue-400 ${props.size}`}>
        {props.profilePic !== "" && (
          <img
            src={props.profilePic}
            alt={props.username}
            className="h-full w-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default Avatar;
