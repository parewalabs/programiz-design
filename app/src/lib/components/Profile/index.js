import React from "react";
import EdtiProfilePopup from "./EditProfilePopup";

const Profile = (props) => {
  return (
    <div>
      <div className="flex items-center pb-4">
        {/*<span
          className={`w-120 h-120 rounded-full bg-blue-400 ${
            props.userInfo.profilePic === "" ? "" : "hidden"
          }`}
        ></span>
        <img
          src={props.userInfo.profilePic}
          alt="name"
          className={`w-120 h-120 rounded-full ${
            props.userInfo.profilePic === "" ? "hidden" : ""
          }`}
        />*/}
        <div className="w-120 h-120 rounded-full bg-blue-400">
          {props.userInfo.profilePic !== "" && (
            <img
              src={props.userInfo.profilePic}
              className="w-120 h-120 rounded-full"
              alt={props.userInfo.fullName}
            />
          )}
        </div>
        <div className="pl-4">
          <h1 className="text-primary-blue text-4xl leading-54 font-bold">
            {props.userInfo.fullName}
          </h1>
          <h4 className="text-primary-blue text-base leading-6 font-medium">
            {props.userInfo.email}
          </h4>
        </div>
      </div>
      <EdtiProfilePopup userInfo={props.userInfo} />
    </div>
  );
};

export default Profile;
