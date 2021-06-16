import React from "react";
import EdtiProfilePopup from "./EditProfilePopup";
import Avatar from "../Avatar/Index";

const Profile = props => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center pb-4"
  }, /*#__PURE__*/React.createElement(Avatar, {
    username: props.userInfo.fullName,
    profilePic: props.userInfo.profilePic,
    size: "w-120 h-120"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pl-4"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-primary-blue text-4xl leading-54 font-bold"
  }, props.userInfo.fullName), /*#__PURE__*/React.createElement("h4", {
    className: "text-primary-blue text-base leading-6 font-medium"
  }, props.userInfo.email))), /*#__PURE__*/React.createElement(EdtiProfilePopup, {
    userInfo: props.userInfo
  }));
};

export default Profile;