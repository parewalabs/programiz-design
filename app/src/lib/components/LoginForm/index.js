import React from "react";
import Buttons from "../Buttons/Index";

const LoginForm = (props) => {
  return (
    <form className="w-445 lg:mx-32" onSubmit={props.handleSubmit}>
      <div className="mb-6">
        <label
          className="block text-sm text-caption text-opacity-80 mb-2"
          htmlFor="UserEmail"
        >
          Email Address
        </label>
        <input
          className="border rounded w-full py-3 px-4 text-base text-primary-blue focus:outline-none focus:ring-2 focus:ring-main"
          id="UserEmail"
          type="text"
          placeholder="Email Address"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-sm text-caption text-opacity-80 mb-2"
          htmlFor="userName"
        >
          Password
        </label>
        <input
          className="border rounded w-full py-3 px-4 text-base text-primary-blue focus:outline-none focus:ring-2 focus:ring-main"
          id="userName"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="">
        <Buttons
          otherClass="saveChange bg-main text-white text-base px-4 py-3"
          type="submit"
        >
          Login
        </Buttons>
      </div>
    </form>
  );
};

export default LoginForm;
