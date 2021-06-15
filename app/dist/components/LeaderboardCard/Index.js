import "../../index.css";
import React from "react";

const LeaderboardCard = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-350 h-auto rounded-md border text-primary-blue focus:ring-2 hover:border-main"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl leading-9 font-semibold text-primary-blue text-center pt-8"
  }, "Leaderboard"), props.topUsers && props.topUsers.users.map(topUser => {
    return /*#__PURE__*/React.createElement("div", {
      key: topUser.leaderboardUser.userId,
      className: "w-full px-6 pt-4 flex"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 text-sm flex items-center"
    }, topUser.rank, "."), /*#__PURE__*/React.createElement("div", {
      className: "px-2 w-full h-full flex"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 rounded-full bg-blue-400"
    }, topUser.leaderboardUser.profilePic !== "" && /*#__PURE__*/React.createElement("img", {
      src: topUser.leaderboardUser.profilePic,
      className: "w-9 h-9 rounded-full",
      alt: topUser.leaderboardUser.fullName
    })), /*#__PURE__*/React.createElement("div", {
      className: "pl-2 text-base font-normal flex items-center"
    }, topUser.leaderboardUser.fullName)), /*#__PURE__*/React.createElement("div", {
      className: "pt-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-5 w-auto px-2 inline-block border border-seperator rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "align-middle text-sm font-bold text-warning"
    }, topUser.score))));
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 pb-10"
  }, props.realtiveUsers && props.realtiveUsers.users.map(realtiveUser => {
    let active = false;

    if (realtiveUser.leaderboardUser.userId === Number(props.loggedInId)) {
      active = true;
    }

    return /*#__PURE__*/React.createElement("div", {
      key: realtiveUser.leaderboardUser.userId,
      className: `px-5 py-1 w-full flex ${active === true ? "border-l-2 border-secondary bg-compiler-base" : ""}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 text-sm flex items-center"
    }, realtiveUser.rank, "."), /*#__PURE__*/React.createElement("div", {
      className: `w-full flex ${active === true ? "px-1 w-full flex" : "px-2"}`
    }, /*#__PURE__*/React.createElement("div", {
      className: `items-center ${active === true ? "p-0.5 rounded-full border border-secondary" : ""}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 rounded-full bg-blue-400"
    }, realtiveUser.leaderboardUser.profilePic !== "" && /*#__PURE__*/React.createElement("img", {
      src: realtiveUser.leaderboardUser.profilePic,
      className: "w-9 h-9 rounded-full",
      alt: realtiveUser.leaderboardUser.fullName
    }))), /*#__PURE__*/React.createElement("div", {
      className: `pl-2 text-base font-normal flex items-center ${active === true ? "font-semibold" : ""}`
    }, realtiveUser.leaderboardUser.fullName)), /*#__PURE__*/React.createElement("div", {
      className: "pt-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-5 w-auto px-2 border border-seperator rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "align-middle text-sm font-bold text-warning"
    }, realtiveUser.score))));
  })));
};

export default LeaderboardCard;