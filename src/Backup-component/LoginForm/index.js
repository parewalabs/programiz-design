import React, { useState } from "react";
import {Button} from "lib";

const LoginForm = (props) => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    props.loginUser(details);
  };

  return (
    <form className="w-327 lg:w-445 bg-white" onSubmit={submitHandler}>
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
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
          required
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
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
          required
        />
      </div>
      <div className="">
        <Button
          otherClass="saveChange bg-main text-white text-base px-4 py-3"
          type="submit"
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
