import React from "react";
import Icons from "../Icons";
import ellipseActive from "../../icons/ellipseActive.svg";

const BottomNav = () => {
  const page = localStorage.getItem("page");
  return (
    <div className="w-full h-16 border">
      <div className="px-14 flex pt-2 pb-1">
        <div className="flex flex-col items-center justify-center">
          <Icons
            iconName="dashboard"
            alt="dashboard"
            className={page === "dashboard" ? "hidden" : "block"}
          />
          <Icons
            iconName="dashboardActive"
            alt="dashboardActive"
            className={page === "dashboard" ? "block" : "hidden"}
          />
          <span
            className={`text-base ${page === "dashboard" ? "text-link" : ""}`}
          >
            Dashboard
          </span>
          <img
            src={ellipseActive}
            alt="active"
            className={page === "dashboard" ? "block" : "hidden"}
          />
        </div>
        <div className="flex flex-col items-center justify-center px-7">
          <Icons
            iconName="course"
            alt="course"
            className={page === "course" ? "hidden" : "block"}
          />
          <Icons
            iconName="courseActive"
            alt="courseActive"
            className={page === "course" ? "block" : "hidden"}
          />
          <span
            className={`text-base ${
              page === "course" ? "text-link" : "text-primary-blue"
            }`}
          >
            Courses
          </span>
          <img
            src={ellipseActive}
            alt="tags"
            className={page === "course" ? "block" : "hidden"}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Icons
            iconName="compiler"
            alt="compiler"
            className={page === "compiler" ? "hidden" : "block"}
          />
          <Icons
            iconName="compilerActive"
            alt="compilerActive"
            className={page === "compiler" ? "block" : "hidden"}
          />
          <span
            className={`text-base ${
              page === "compiler" ? "text-link" : "text-primary-blue"
            }`}
          >
            Compiler
          </span>
          <img
            src={ellipseActive}
            alt="tags"
            className={page === "compiler" ? "block" : "hidden"}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
