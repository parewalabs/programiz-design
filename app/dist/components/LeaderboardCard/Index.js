import "../../index.css";
import React from "react";
import avatar from "../../images/avatar.png";
import avatar1 from "../../images/avatar1.png";

const LeaderboardCard = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-350 h-auto rounded-md border text-primary-blue focus:ring-2 hover:border-main"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl leading-9 font-semibold text-primary-blue text-center pt-8"
  }, "Leaderboard"), props.topUsers.map((topUser, index) => {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "w-full px-6 pt-4 flex"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 text-sm inline-block flex items-center"
    }, topUser.rank, "."), /*#__PURE__*/React.createElement("div", {
      className: "px-2 w-full inline-block flex"
    }, /*#__PURE__*/React.createElement("img", {
      src: avatar,
      className: "w-9 h-9 rounded-full",
      alt: topUser.name
    }), /*#__PURE__*/React.createElement("div", {
      className: "p-2 text-base font-normal inline-block align-middle"
    }, topUser.name)), /*#__PURE__*/React.createElement("div", {
      className: "pt-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-5 w-37 inline-block border border-seperator rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "align-middle text-sm font-bold text-warning"
    }, topUser.score))));
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 pb-10"
  }, props.realtiveUsers.map((realtiveUser, index) => {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: realtiveUser.active === true ? "px-6 py-1 w-full border-l-2 border-secondary flex first:bg-compiler-base" : "px-6 py-1 w-full flex"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 text-sm inline-block flex items-center"
    }, realtiveUser.rank, "."), /*#__PURE__*/React.createElement("div", {
      className: "px-2 w-full inline-block flex"
    }, /*#__PURE__*/React.createElement("div", {
      className: realtiveUser.active === true ? "items-center p-0.5 rounded-full border border-secondary" : "items-center"
    }, /*#__PURE__*/React.createElement("img", {
      src: realtiveUser.active === true ? avatar1 : avatar,
      className: "w-9 h-9 rounded-full",
      alt: realtiveUser.name
    })), /*#__PURE__*/React.createElement("div", {
      className: realtiveUser.active === true ? "p-2 text-base font-normal inline-block align-middle font-semibold" : "p-2 text-base font-normal inline-block align-middle"
    }, realtiveUser.name)), /*#__PURE__*/React.createElement("div", {
      className: "pt-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-5 w-37 inline-block border border-seperator rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "align-middle text-sm font-bold text-warning"
    }, realtiveUser.score))));
  }))));
};

export default LeaderboardCard;