import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';
import { COMPLETE } from 'lib/language/CourseCard.language';

const ProgressBar = (props) => {
  const {completion, className} = props;
  return(
    <div className={classNames("progress-bar", className)}>
      <p className="progress-bar__count">
        {completion}% {COMPLETE}
      </p>
      <div className="progress-bar__track">
        <div className="progress-bar__bar" style={{ width: completion + '%'}}/>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  /** Completion Value for progress bar*/
  completion: PropTypes.number,
  /** Extra classes*/
  className: PropTypes.string,
}

ProgressBar.defaultProps = {
  completion: 0,
  className: "",
}

export default ProgressBar;