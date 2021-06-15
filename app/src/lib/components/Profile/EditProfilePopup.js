import React from "react";
import { useState } from "react";
import avatar from "../../images/avatar1.png";
import Buttons from "../Buttons/Index";

const EdtiProfilePopup = () => {
  const [disabledButton, setDisabledButton] = useState(true);
  return (
    <div className="w-327 lg:w-730 h-705 rounded-md border-2">
      <div className="flex justify-center">
        <img
          src={avatar}
          alt="avatar"
          className="h-28 w-28 rounded-full mt-10 "
        />
      </div>
      <div className="flex justify-center mt-2">
        <Buttons otherClass="text-link py-1.5 px-4 border border-main">
          Change Photo
        </Buttons>
      </div>
      <div className="pt-6 flex justify-center">
        <form className="w-full lg:mx-32 mx-10 ">
          <div className="mb-6">
            <label
              className="block text-sm text-caption text-opacity-80 mb-2"
              htmlFor="userName"
            >
              Full Name
            </label>
            <input
              className="border rounded w-full py-3 px-4 text-base text-primary-blue"
              id="userName"
              type="text"
              placeholder="Full Name"
              defaultValue="Bishal Mishra"
              onChange={() => setDisabledButton(false)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm text-caption text-opacity-80 mb-2"
              htmlFor="UserEmail"
            >
              Email Address
            </label>
            <input
              className="border rounded w-full py-3 px-4 text-base text-primary-blue"
              id="UserEmail"
              type="text"
              placeholder="Email Address"
              defaultValue="bishal@idealaya.com.np"
              onChange={() => setDisabledButton(false)}
            />
          </div>
          <div className="flex items-center justify-center">
            <Buttons
              otherClass="saveChange bg-main text-white text-base px-4 py-3"
              disabled={disabledButton}
              type="button"
            >
              Save Changes
            </Buttons>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EdtiProfilePopup;
