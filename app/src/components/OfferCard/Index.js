import React from "react";
import refer from "../../icons/refer.svg";

const OfferCard = () => {
  return (
    <div className="w-350 h-200 rounded border-2 text-primary-blue focus:ring-2 hover:border-main">
      <div className="pt-6 px-4">
        <span className="float-left pr-4">
          <img src={refer} alt="refer and get pro" />
        </span>
        <div className="pl-4 py-1">
          <h1 className="text-2xl font-semibold">Refer & Get PRO!!!</h1>
          <p className="text-sm">
            For every friend you invite, get 5 days of PRO for free.
          </p>
        </div>
      </div>
      <div className="pt-5 px-4">
        <button className="w-full bg-blue-100 text-link font-semibold rounded py-3">
          Start Inviting
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
