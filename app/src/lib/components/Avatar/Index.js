import React from "react";

const Avatar = (props) => {
  return (
    <div className={`relative flex ${props.className}`}>
      <div className={`rounded-full bg-blue-400 ${props.size}`}>
        {props.profilePic !== "" && (
          <img
            src={props.profilePic}
            alt={props.username}
            className={`rounded-full ${props.size}`}
          />
        )}
      </div>
    </div>
  );
};

export default Avatar;
