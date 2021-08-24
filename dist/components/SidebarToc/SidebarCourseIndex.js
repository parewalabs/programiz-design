import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Accordion } from '../../';
import Button from '../Button/Button';
import { FaLock } from 'react-icons/fa';
import CircleProgress from '../CourseIndex/CircleProgress';
import { CONTENT_LOCKED } from '../../language/CourseCard.language';

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
  }, sectionContent && sectionContent != null ? sectionContent.map(section => {
    return /*#__PURE__*/React.createElement("li", {
      className: classNames('list__row'),
      key: `${section.id}${Object.keys(section.sectionContentType)[0]}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "list__progress-container"
    }, /*#__PURE__*/React.createElement(CircleProgress, {
      percentage: section.completion
    })), /*#__PURE__*/React.createElement(Button, {
      type: "clear",
      onClick: () => goToSectionContent(section.sectionContentType, section.id, section.sectionId),
      className: classNames('list__label truncate', {
        'text-bold': 0
      })
    }, section.title));
  }) : /*#__PURE__*/React.createElement("div", {
    className: "lock-content"
  }, /*#__PURE__*/React.createElement(FaLock, {
    className: "mr-2x"
  }), " ", CONTENT_LOCKED)));
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