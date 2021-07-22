import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SidebarCourseIndex from './SidebarCourseIndex';
import { useState, useEffect, useRef } from 'react';
import { ProgressBar } from '../../';
import { FiMenu } from 'react-icons/fi';

const SidebarToc = props => {
  const sideBarRef = useRef(null);
  const {
    courseTitle,
    completion,
    toc
  } = props;
  const [hasShadow, setShadow] = useState(false);
  const [isCollapsed, setCollapse] = useState(false);
  useEffect(() => {
    sideBarRef.current.addEventListener('scroll', event => {
      if (event.target.scrollTop > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    });
  }, []);

  const collapseSidebar = () => {
    setCollapse(!isCollapsed);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classNames('sidebar-wrapper', {
      'sidebar-wrapper--collapsed': isCollapsed
    })
  }, /*#__PURE__*/React.createElement("button", {
    onClick: collapseSidebar,
    className: "course-sidebar-button"
  }, /*#__PURE__*/React.createElement(FiMenu, {
    className: "course-sidebar-icon"
  })), /*#__PURE__*/React.createElement("div", {
    className: classNames('course-sidebar'),
    ref: sideBarRef
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames('course-sidebar__head', {
      'course-sidebar__head--shadow': hasShadow
    })
  }, /*#__PURE__*/React.createElement("h3", {
    className: "fs-h3 color-text-main mb-2x"
  }, courseTitle), /*#__PURE__*/React.createElement(ProgressBar, {
    completion: completion
  }), /*#__PURE__*/React.createElement("p", {
    className: "fs-body14 color-text-main mt-8x pb-2x"
  }, "Course Index")), toc && toc.map(toc => {
    return /*#__PURE__*/React.createElement(SidebarCourseIndex, {
      course: toc,
      key: toc.id
    });
  })));
};

SidebarToc.propTypes = {
  /** Course Title */
  courseTitle: PropTypes.string,

  /** Course Completion */
  completion: PropTypes.number,

  /** Content Array for lessons */
  toc: PropTypes.array
};
SidebarToc.defaultProps = {
  courseTitle: '',
  completion: 0,
  toc: []
};
export default SidebarToc;