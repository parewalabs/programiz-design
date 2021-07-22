import React from 'react';
import PropTypes from 'prop-types';

import { Card, ProgressBar, Button } from '../../';
import { FiBook, FiArrowRight } from 'react-icons/fi';
import { courseVector1, courseVector2 } from '../../images/image';
import { START_LEARNING } from '../../language/CourseCard.language';

const CourseCard = (props) => {
  const { courseName, completion, customClickEvent, vector, tags } = props;

  let vectorType = {};
  if (vector === 1) {
    vectorType = {
      backgroundImage: `url(${courseVector1})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right bottom',
    };
  } else {
    vectorType = {
      backgroundImage: `url(${courseVector2})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right bottom',
    };
  }
  return (
    <Card style={vectorType} className="course-card-main">
      <Button
        type="clear"
        onClick={customClickEvent}
        className="course-card-main__button"
      >
        <div className="course-tile">
          <h3 className="fs-h3 color-text-main mb-2x">{courseName}</h3>
          {tags && (
            <div className="bookmarks mb-4x">
              <div className="bookmarks__node">
                <FiBook className="bookmarks__icon" /> {tags.chapters}
              </div>
              <div className="bookmarks__dot" />
              <div className="bookmarks__node">{tags.courseTitle}</div>
              <div className="bookmarks__dot" />
              <div className="bookmarks__node">{tags.courseDifficulty}</div>
            </div>
          )}
          {completion && completion > 0 ? (
            <ProgressBar completion={completion} className="mb-4x" />
          ) : (
            ''
          )}
          <span className="d-flex align-items-center fs-body14 color-primary-base">
            {START_LEARNING}
            <FiArrowRight className="ml-1x" />
          </span>
        </div>
      </Button>
    </Card>
  );
};

CourseCard.propTypes = {
  /** Name of the Course*/
  courseName: PropTypes.string,
  /** Completion progress of the course */
  completion: PropTypes.number,
  /** Shape Vector. Available Option 1 or "" */
  vector: PropTypes.number,
  /** Tags for the course, <br> { "chapters": "", "courseTitle": "", "courseDifficulty": "" } */
  tags: PropTypes.object,
  /** Custom Click Event Listener */
  customClickEvent: PropTypes.func,
};

CourseCard.defaultProps = {
  courseName: '',
  completion: 0,
  customClickEvent: () => {},
  vector: 1,
  tags: '',
};

export default CourseCard;
