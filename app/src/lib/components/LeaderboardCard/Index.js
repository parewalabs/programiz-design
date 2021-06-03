import "../../index.css";
import React from "react";
import avatar from "../../images/avatar.png";
import avatar1 from "../../images/avatar1.png";

const LeaderboardCard = (props) => {
  return (
    <div className="w-350 h-auto rounded-md border text-primary-blue focus:ring-2 hover:border-main">
      <div>
        <h1 className="text-2xl leading-9 font-semibold text-primary-blue text-center pt-8">
          Leaderboard
        </h1>
        {props.topUsers.map((topUser, index) => {
          return (
            <div key={index} className="w-full px-6 pt-4 flex">
              <div className="w-14 text-sm inline-block flex items-center">
                {topUser.rank}.
              </div>
              <div className="px-2 w-full inline-block flex">
                <img
                  src={avatar}
                  className="w-9 h-9 rounded-full"
                  alt={topUser.name}
                />
                <div className="p-2 text-base font-normal inline-block align-middle">
                  {topUser.name}
                </div>
              </div>
              <div className="pt-2">
                <div className="h-5 w-37 inline-block border border-seperator rounded-xl flex items-center justify-center">
                  <span className="align-middle text-sm font-bold text-warning">
                    {topUser.score}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        <div className="mt-2 pb-10">
          {props.realtiveUsers.map((realtiveUser, index) => {
            return (
              <div
                key={index}
                className={
                  realtiveUser.active === true
                    ? "px-6 py-1 w-full border-l-2 border-secondary flex first:bg-compiler-base"
                    : "px-6 py-1 w-full flex"
                }
              >
                <div className="w-14 text-sm inline-block flex items-center">
                  {realtiveUser.rank}.
                </div>
                <div className="px-2 w-full inline-block flex">
                  <div
                    className={
                      realtiveUser.active === true
                        ? "items-center p-0.5 rounded-full border border-secondary"
                        : "items-center"
                    }
                  >
                    <img
                      src={realtiveUser.active === true ? avatar1 : avatar}
                      className="w-9 h-9 rounded-full"
                      alt={realtiveUser.name}
                    />
                  </div>
                  <div
                    className={
                      realtiveUser.active === true
                        ? "p-2 text-base font-normal inline-block align-middle font-semibold"
                        : "p-2 text-base font-normal inline-block align-middle"
                    }
                  >
                    {realtiveUser.name}
                  </div>
                </div>
                <div className="pt-2">
                  <div className="h-5 w-37 inline-block border border-seperator rounded-xl flex items-center justify-center">
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
    </div>
  );
};

export default LeaderboardCard;
