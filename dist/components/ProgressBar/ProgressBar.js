import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { COMPLETE } from '../../language/CourseCard.language';

const ProgressBar = props => {
  const {
    completion,
    className
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('progress-bar', className)
  }, /*#__PURE__*/React.createElement("p", {
    className: "progress-bar__count"
  }, completion, "% ", COMPLETE), /*#__PURE__*/React.createElement("div", {
    className: "progress-bar__track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-bar__bar",
    style: {
      width: completion + '%'
    }
  })));
};

ProgressBar.propTypes = {
  /** Completion Value for progress bar*/
  completion: PropTypes.number,

  /** Extra classes*/
  className: PropTypes.string
};
ProgressBar.defaultProps = {
  completion: 0,
  className: ''
};
export default ProgressBar;