import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import SidebarCourseIndex from "./SidebarCourseIndex";
import { useState, useEffect, useRef } from "react";
import { ProgressBar } from "lib";
import { FiMenu } from "react-icons/fi"; 

const SidebarToc = (props) => {
  const sideBarRef = useRef(null);

  const {courseTitle, completion, toc} = props;
  const [hasShadow, setShadow] = useState(false);
  const [isCollapsed, setCollapse] = useState(false);
 
  useEffect(() => {
    sideBarRef.current.addEventListener("scroll", (event) => {
      if(event.target.scrollTop > 0) {
        setShadow(true);
      }else{
        setShadow(false);
      }
    });
  },[]);

  const collapseSidebar = () => {
    setCollapse(!isCollapsed);
  };

  return (
    <div className={classNames("sidebar-wrapper", {"sidebar-wrapper--collapsed": isCollapsed})}>
      <button onClick={collapseSidebar} className="course-sidebar-button">
        <FiMenu className="course-sidebar-icon" />
      </button>
      <div className={classNames("course-sidebar")} ref={sideBarRef}>
        <div className={classNames("course-sidebar__head", {"course-sidebar__head--shadow": hasShadow})}>
          <h3 className="fs-h3 color-text-main mb-2x">
            {courseTitle}
          </h3>
          <ProgressBar completion={completion} />
          <p className="fs-body14 color-text-main mt-8x pb-2x">
            Course Index
          </p>
        </div>
        {toc &&
          toc.map((toc) => {
            return <SidebarCourseIndex course={toc} key={toc.id} />;
          })}
      </div>
    </div>
  );
};

SidebarToc.propTypes = {
  /** Course Title */
  courseTitle: PropTypes.string,
  /** Course Completion */
  completion: PropTypes.string,
  /** Content Array for lessons */
  toc: PropTypes.array,
};

SidebarToc.defaultProps = {
  courseTitle: "",
  completion: 0,
  toc: [],
};


export default SidebarToc;
