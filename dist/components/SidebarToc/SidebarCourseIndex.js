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
    className
  } = props;
  const HeaderComponent = /*#__PURE__*/React.createElement("h4", {
    title: title,
    className: "color-text-main"
  }, title); // get link section's detail page

  const sectionDetailPageLink = (sectionContentType, sectionId, sectionTitile) => {
    for (const contentType of Object.values(sectionContentType)) {
      const contentTypeName = contentType.toLowerCase();
      const href = `/${contentTypeName}/${sectionId}/details`;
      const link = /*#__PURE__*/React.createElement("a", {
        href: href,
        className: classNames('list__label truncate', {
          'text-bold': 0
        }),
        title: sectionTitile
      }, sectionTitile);
      return link;
    }
  };

  return /*#__PURE__*/React.createElement(Accordion, {
    headerComponent: HeaderComponent,
    className: classNames('accordion--sidebar', className)
  }, /*#__PURE__*/React.createElement("ul", {
    className: "list list--progress list--progress--sidebar py-4x px-6x"
  }, sectionContent && sectionContent.map(section => {
    return /*#__PURE__*/React.createElement("li", {
      className: classNames('list__row'),
      key: section.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "list__progress-container"
    }, /*#__PURE__*/React.createElement(CircleProgress, {
      percentage: 0
    })), sectionDetailPageLink(section.sectionContentType, section.id, section.title));
  })));
};

SidebarCourseIndex.propTypes = {
  /** Data array for the component*/
  course: PropTypes.object,

  /** Extra classes*/
  className: PropTypes.string
};
SidebarCourseIndex.defaultProps = {
  course: [],
  className: ''
};
export default SidebarCourseIndex;