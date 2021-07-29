import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Accordion } from '../../';
import CircleProgress from '../CourseIndex/CircleProgress';

const SidebarCourseIndex = props => {
  const {
    course: {
      title,
      sectionContent
    },
    className,
    goToSection
  } = props;
  const HeaderComponent = /*#__PURE__*/React.createElement("h4", {
    title: title,
    className: "color-text-main"
  }, title);
  return /*#__PURE__*/React.createElement(Accordion, {
    headerComponent: HeaderComponent,
    className: classNames('accordion--sidebar', className)
  }, /*#__PURE__*/React.createElement("ul", {
    className: "list list--progress list--progress--sidebar py-4x px-6x"
  }, sectionContent && sectionContent.map(section => {
    return /*#__PURE__*/React.createElement("li", {
      className: classNames('list__row'),
      key: section.id,
      onClick: () => goToSection(section.sectionContentType, // lesson or quiz or example
      section.id, // section content id
      section.sectionId)
    }, /*#__PURE__*/React.createElement("div", {
      className: "list__progress-container"
    }, /*#__PURE__*/React.createElement(CircleProgress, {
      percentage: 0
    })), section.title);
  })));
};

SidebarCourseIndex.propTypes = {
  /** Data array for the component*/
  course: PropTypes.object,

  /** Extra classes*/
  className: PropTypes.string,

  /** Go to the section function*/
  goToSection: PropTypes.func
};
SidebarCourseIndex.defaultProps = {
  course: [],
  className: '',
  goToSection: () => {}
};
export default SidebarCourseIndex;