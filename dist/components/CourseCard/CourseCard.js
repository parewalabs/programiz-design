import React from 'react';
import PropTypes from 'prop-types';
import { Card, ProgressBar, Button } from '../../';
import { FiBook, FiArrowRight } from 'react-icons/fi';
import { courseVector1, courseVector2 } from '../../images/image';
import { START_LEARNING } from '../../language/CourseCard.language';

const CourseCard = props => {
  const {
    courseName,
    completion,
    customClickEvent,
    vector,
    tags
  } = props;
  let vectorType = {};

  if (vector === 1) {
    vectorType = {
      backgroundImage: `url(${courseVector1})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right bottom'
    };
  } else {
    vectorType = {
      backgroundImage: `url(${courseVector2})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right bottom'
    };
  }

  return /*#__PURE__*/React.createElement(Card, {
    style: vectorType,
    className: "course-card-main"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "clear",
    onClick: customClickEvent,
    className: "course-card-main__button"
  }, /*#__PURE__*/React.createElement("div", {
    className: "course-tile"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "fs-h3 color-text-main mb-2x"
  }, courseName), tags && /*#__PURE__*/React.createElement("div", {
    className: "bookmarks mb-4x"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bookmarks__node"
  }, /*#__PURE__*/React.createElement(FiBook, {
    className: "bookmarks__icon"
  }), " ", tags.chapters), /*#__PURE__*/React.createElement("div", {
    className: "bookmarks__dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bookmarks__node"
  }, tags.courseTitle), /*#__PURE__*/React.createElement("div", {
    className: "bookmarks__dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bookmarks__node"
  }, tags.courseDifficulty)), completion && /*#__PURE__*/React.createElement(ProgressBar, {
    completion: completion,
    className: "mb-4x"
  }), /*#__PURE__*/React.createElement("span", {
    className: "d-flex align-items-center fs-body14 color-primary-base"
  }, START_LEARNING, /*#__PURE__*/React.createElement(FiArrowRight, {
    className: "ml-1x"
  })))));
};

CourseCard.propTypes = {
  /** Name of the Course*/
  courseName: PropTypes.string,

  /** Completion progress of the course */
  completion: PropTypes.string,

  /** Shape Vector. Available Option 1 or "" */
  vector: PropTypes.number,

  /** Tags for the course, <br> { "chapters": "", "courseTitle": "", "courseDifficulty": "" } */
  tags: PropTypes.object,

  /** Custom Click Event Listener */
  customClickEvent: PropTypes.func
};
CourseCard.defaultProps = {
  courseName: '',
  completion: '',
  customClickEvent: '',
  vector: '1',
  tags: ''
};
export default CourseCard;