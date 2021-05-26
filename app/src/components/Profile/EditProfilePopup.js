import React from "react";
import { useState } from "react";
import avatar from "../../images/avatar1.png";

const EdtiProfilePopup = () => {
  const [disabledButton, setDisabledButton] = useState(true);
  return (
    <div className="w-730 h-705 rounded-md border-2">
      <div className="flex justify-center">
        <img
          src={avatar}
          alt="avatar"
          className="h-28 w-28 rounded-full mt-10 "
        />
      </div>
      <div className="flex justify-center mt-2">
        <button className="text-link font-semibold rounded py-2 px-4 border border-main">
          Change Photo
        </button>
      </div>
      <div className="pt-6 px-44">
        <form>
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
            <button
              className="saveChange bg-main disabled:opacity-50 text-white text-base font-semibold py-3 px-4 rounded"
              disabled={disabledButton}
              type="button"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EdtiProfilePopup;
