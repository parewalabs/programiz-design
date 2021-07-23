import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CircleProgress from './CircleProgress';
import { Accordion } from '../../';
import { sectionDetailPageLink } from '../../utils/helper';

const CourseIndex = props => {
  const {
    course: {
      title,
      sectionContent
    },
    className
  } = props;
  const HeaderComponent = /*#__PURE__*/React.createElement("h4", {
    title: title,
    className: "color-text-main"
  }, title);
  return /*#__PURE__*/React.createElement(Accordion, {
    headerComponent: HeaderComponent,
    className: className
  }, /*#__PURE__*/React.createElement("ul", {
    className: "list list--progress py-6x px-10x"
  }, sectionContent && sectionContent.map(section => {
    return /*#__PURE__*/React.createElement("li", {
      className: classNames('list__row'),
      key: section.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "list__progress-container"
    }, /*#__PURE__*/React.createElement(CircleProgress, {
      percentage: 0
    })), sectionDetailPageLink(section.sectionContentType, section.id, section.title, section.sectionId));
  })));
};

CourseIndex.propTypes = {
  /** Course Data */
  course: PropTypes.object,

  /** Extra classes */
  className: PropTypes.string
};
CourseIndex.defaultProps = {
  course: {},
  className: ''
};
export default CourseIndex;