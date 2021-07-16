import React from "react";
import refer from "../../icons/refer.svg";
import {Button} from "lib";

const OfferCard = (props) => {
  return (
    <div className="w-327 lg:w-350 h-200 rounded border-2 text-primary-blue focus:ring-2 hover:border-main bg-white">
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
        <Button
          otherClass="w-full bg-shades20 text-link py-3"
          customClickEvent={props.customClickEvent}
        >
          Start Inviting
        </Button>
      </div>
    </div>
  );
};

export default OfferCard;
