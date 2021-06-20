import React from "react";
import EdtiProfilePopup from "./EditProfilePopup";
import Avatar from "../Avatar/Index";

const Profile = (props) => {
  return (
    <div>
      <div className="flex items-center pb-4">
        <Avatar
          username={props.userInfo.fullName}
          profilePic={props.userInfo.profilePic}
          size="w-120 h-120"
        />
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
