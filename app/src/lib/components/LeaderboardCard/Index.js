import "../../index.css";
import React from "react";

const LeaderboardCard = (props) => {
  return (
    <div className="w-350 h-auto rounded-md border text-primary-blue focus:ring-2 hover:border-main">
      <h1 className="text-2xl leading-9 font-semibold text-primary-blue text-center pt-8">
        Leaderboard
      </h1>
      {props.topUsers.map((topUser) => {
        return (
          <div
            key={topUser.leaderboardUser.userId}
            className="w-full px-6 pt-4 flex"
          >
            <div className="w-14 text-sm flex items-center">
              {topUser.rank}.
            </div>
            <div className="px-2 w-full h-full flex">
              <div className="w-9 h-9 rounded-full bg-blue-400">
                {topUser.leaderboardUser.profilePic !== "" && (
                  <img
                    src={topUser.leaderboardUser.profilePic}
                    className="w-9 h-9 rounded-full"
                    alt={topUser.leaderboardUser.fullName}
                  />
                )}
              </div>
              <div className="pl-2 text-base font-normal flex items-center">
                {topUser.leaderboardUser.fullName}
              </div>
            </div>
            <div className="pt-2">
              <div className="h-5 w-auto px-2 inline-block border border-seperator rounded-xl flex items-center justify-center">
                <span className="align-middle text-sm font-bold text-warning">
                  {topUser.score}
                </span>
              </div>
            </div>
          </div>
        );
      })}
      <div className="mt-2 pb-10">
        {props.realtiveUsers.map((realtiveUser) => {
          let active = false;
          if (
            realtiveUser.leaderboardUser.userId === Number(props.loggedInId)
          ) {
            active = true;
          }
          return (
            <div
              key={realtiveUser.leaderboardUser.userId}
              className={`px-5 py-1 w-full flex ${
                active === true
                  ? "border-l-2 border-secondary bg-compiler-base"
                  : ""
              }`}
            >
              <div className="w-14 text-sm flex items-center">
                {realtiveUser.rank}.
              </div>
              <div
                className={`w-full flex ${
                  active === true ? "px-1 w-full flex" : "px-2"
                }`}
              >
                <div
                  className={`items-center ${
                    active === true
                      ? "p-0.5 rounded-full border border-secondary"
                      : ""
                  }`}
                >
                  <div className="w-9 h-9 rounded-full bg-blue-400">
                    {realtiveUser.leaderboardUser.profilePic !== "" && (
                      <img
                        src={realtiveUser.leaderboardUser.profilePic}
                        className="w-9 h-9 rounded-full"
                        alt={realtiveUser.leaderboardUser.fullName}
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`pl-2 text-base font-normal flex items-center ${
                    active === true ? "font-semibold" : ""
                  }`}
                >
                  {realtiveUser.leaderboardUser.fullName}
                </div>
              </div>
              <div className="pt-2">
                <div className="h-5 w-auto px-2 border border-seperator rounded-xl flex items-center justify-center">
                  <span className="align-middle text-sm font-bold text-warning">
                    {realtiveUser.score}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeaderboardCard;
