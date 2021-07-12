import React from "react";
import PropTypes from 'prop-types'

import { Card } from 'lib'; 
import { FiBook, FiArrowRight } from "react-icons/fi";
import { courseVector1, courseVector2 } from "lib/images/image";

import { COMPLETE, START_LEARNING} from 'lib/language/CourseCard.language';
import Button from "../Button/Button";

const CourseCard = (props) => {

  const { courseName, completion, customClickEvent, vector, tags} = props;

  let vectorType = {};
  if (vector === 1) {
    vectorType = {
      backgroundImage: `url(${courseVector1})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right bottom",
    };
  } else {
    vectorType = {
      backgroundImage: `url(${courseVector2})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right bottom",
    };
  }
  return (
    <Card style={vectorType}>
      <div className="course-tile">
        <h3 className="fs-h3 color-text-main mb-2x">
          {courseName}
        </h3>
        { tags && (
          <div className="bookmarks mb-4x">
              <div className="bookmarks__node">
                <FiBook className="bookmarks__icon"/> { tags.chapters }
              </div>
              <div className="bookmarks__dot" />
              <div className="bookmarks__node">
                { tags.courseTitle }
              </div>
              <div className="bookmarks__dot" />
              <div className="bookmarks__node">
                { tags.courseDifficulty }
              </div>
          </div>
        )}
        {completion && (
          <div className="progress-bar mb-4x">
            <p className="progress-bar__count">
              {completion}% {COMPLETE}
            </p>
            <div className="progress-bar__track">
              <div className="progress-bar__bar" style={{ width: completion + '%'}}/>
            </div>
          </div>
        )}
        <Button type="clear" onClick={customClickEvent} className="d-flex align-items-center fs-body14 color-primary-base">
          { START_LEARNING }
          <FiArrowRight className="ml-1x"/>
        </Button>
      </div>
    </Card>
  );
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
  customClickEvent: PropTypes.func,
}

CourseCard.defaultProps = {
  courseName: "",
  completion: "",
  customClickEvent: "",
  vector: "1",
  tags: ""
}


export default CourseCard;
