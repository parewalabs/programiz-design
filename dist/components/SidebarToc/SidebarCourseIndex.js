import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Accordion } from '../../';
import CircleProgress from '../CourseIndex/CircleProgress';
import Button from '../Button/Button';

const SidebarCourseIndex = props => {
  const {
    course: {
      title,
      sectionContent
    },
    className,
    goToSectionContent
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
    return /*#__PURE__*/React.createElement(Button, {
      type: "clear",
      key: section.id,
      onClick: () => goToSectionContent(section.sectionContentType, section.id, section.sectionId)
    }, /*#__PURE__*/React.createElement("li", {
      className: classNames('list__row')
    }, /*#__PURE__*/React.createElement("div", {
      className: "list__progress-container"
    }, /*#__PURE__*/React.createElement(CircleProgress, {
      percentage: 0
    })), section.title));
  })));
};

SidebarCourseIndex.propTypes = {
  /** Data array for the component*/
  course: PropTypes.object,

  /** Extra classes*/
  className: PropTypes.string,

  /** Go to the section function*/
  goToSectionContent: PropTypes.func
};
SidebarCourseIndex.defaultProps = {
  course: [],
  className: '',
  goToSection: () => {}
};
export default SidebarCourseIndex;