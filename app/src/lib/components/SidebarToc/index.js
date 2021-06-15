import React from "react";
import Icons from "../Icons/index";
import SidebarCourseIndex from "./SidebarCourseIndex";

const SidebarToc = (props) => {
  return (
    <div className="w-72 h-full bg-sidebar">
      <div className="px-6 pt-6">
        <Icons iconName="burgerMenu" alt="Menu" className="float-right" />
        <h3 className="text-primary-blue text-22 leading-30 font-semibold pt-14">
          {props.courseTitle}
        </h3>
        <p className="text-primary-blue text-sm font-normal pt-2">
          {props.complete} Complete
        </p>
        <div className="relative pt-2">
          <div className="overflow-hidden h-1 flex rounded bg-primary-blue bg-opacity-10">
            <div
              className="rounded bg-main w-1/4"
              style={{ width: props.complete }}
            ></div>
          </div>
        </div>
        <p className="text-primary-blue text-sm font-normal pt-8 items-start pb-2">
          Course Index
        </p>
      </div>
      {props.toc &&
        props.toc.map((toc) => {
          return <SidebarCourseIndex course={toc} key={toc.id} />;
        })}
    </div>
  );
};

export default SidebarToc;
