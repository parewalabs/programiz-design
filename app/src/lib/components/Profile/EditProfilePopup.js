import React from "react";
import { useState } from "react";
import Buttons from "../Buttons/Index";
import Icons from "../Icons/index";

const EdtiProfilePopup = (props) => {
  const [disabledButton, setDisabledButton] = useState(true);
  const [showModal, setShowModal] = React.useState(false);

  const popupToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Buttons
        otherClass="text-link bg-shades20 py-3 px-4"
        customClickEvent={() => popupToggle()}
      >
        <span className="justify-center flex">
          Edit Profile{" "}
          <Icons iconName="edit" alt="edit profile" className="inline pl-2" />
        </span>
      </Buttons>
      {showModal ? (
        <>
          <div className="justify-center pt-2 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="w-327 lg:w-730 h-705 rounded-md border-2 bg-white mt-10">
              <div className="flex justify-center">
                <div className="w-28 h-28 rounded-full bg-blue-400 mt-10">
                  {props.userInfo.profilePic !== "" && (
                    <img
                      src={props.userInfo.profilePic}
                      className="w-28 h-28 rounded-full"
                      alt={props.userInfo.fullName}
                    />
                  )}
                </div>
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
                      defaultValue={props.userInfo.fullName}
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
                      defaultValue={props.userInfo.email}
                      onChange={() => setDisabledButton(false)}
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <Buttons
                      otherClass="saveChange bg-main text-white text-base px-4 py-3"
                      disabled={disabledButton}
                      type="button"
                      customClickEvent={() => popupToggle}
                    >
                      Save Changes
                    </Buttons>
                  </div>
                </form>
              </div>
            </div>
            <span className="flex items-start">
              <Icons
                iconName="cross"
                alt="close"
                className="cursor-pointer"
                customClickEvent={() => popupToggle()}
              />
            </span>
          </div>
          <div className="opacity-1.5 fixed inset-0 z-20 bg-popup"></div>
        </>
      ) : null}
    </>
  );
};

export default EdtiProfilePopup;
