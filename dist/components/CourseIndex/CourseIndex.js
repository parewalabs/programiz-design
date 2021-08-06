import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CircleProgress from './CircleProgress';
import { Accordion } from '../../';
import { EXPAND_ALL, COURSE_INDEX, COLLAPSE_ALL } from '../../language/CourseCard.language';
import Button from '../Button/Button';

const CourseIndex = props => {
  const [isExpanded, expandCollapsible] = useState(false);
  const {
    courseToc,
    className,
    goToSectionContent
  } = props;

  const expandCollapsibleFunc = event => {
    event.preventDefault();
    expandCollapsible(!isExpanded);
  };

  const HeaderComponent = title => {
    return /*#__PURE__*/React.createElement("h4", {
      title: title,
      className: "color-text-main"
    }, title);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-end mb-4x pt-14x justify-content-between"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "fs-h2main fs-h2main-md color-text-main"
  }, COURSE_INDEX), /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "mb-1x",
    onClick: expandCollapsibleFunc
  }, !isExpanded ? EXPAND_ALL : COLLAPSE_ALL)), courseToc && courseToc.sections && courseToc.sections.map(sections => /*#__PURE__*/React.createElement(Accordion, {
    key: sections.id,
    headerComponent: HeaderComponent(sections.title),
    className: classNames('mb-2x', {
      className
    }),
    isOpen: isExpanded
  }, /*#__PURE__*/React.createElement("ul", {
    className: "list list--progress py-6x px-10x"
  }, sections && sections.sectionContent.map(section => {
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
  })))));
};

CourseIndex.propTypes = {
  /** Course Data */
  courseToc: PropTypes.object,

  /** Extra classes */
  className: PropTypes.string,

  /** Go to the section function*/
  goToSectionContent: PropTypes.func
};
CourseIndex.defaultProps = {
  courseToc: {},
  className: '',
  goToSectionContent: () => {}
};
export default CourseIndex;