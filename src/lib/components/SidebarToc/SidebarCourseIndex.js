import React from "react";
import PropTypes from 'prop-types'
import classNames from "classnames";

import { Accordion } from "lib";
import CircleProgress from "../CourseIndex/CircleProgress";

const SidebarCourseIndex = (props) => {

  const { course: {title, lessons, quiz}, className} = props;

  const HeaderComponent = (
    <h4 title={title} className="color-text-main">{title}</h4>
  );

  return (
    <Accordion headerComponent={HeaderComponent} className={classNames("accordion--sidebar",className)}>
      <ul className="list list--progress list--progress--sidebar py-4x px-6x">
        { lessons 
          && lessons.map((lesson) => {
            return (
              <li
                className={classNames("list__row")}
                key={lesson.id}
              >
                <div className="list__progress-container">
                  <CircleProgress percentage={lesson.progressPercentage}/>
                </div>
                <a
                  href={`/lesson/${lesson.id}/details`}
                  className={classNames("list__label truncate", {"text-bold" : lesson.progress })}
                  title={lesson.title}
                >
                  {lesson.title}
                </a>
              </li>
            );
          })}
        {props.course.quiz && (
          <li
            className={classNames("list__row")}
            key={quiz.id}
          >
            <div className="list__progress-container">
              <CircleProgress percentage={quiz.progressPercentage}/>
            </div>
            <a
              href={`/quiz/${quiz.id}`}
              className={classNames("list__label truncate", {"text-bold" : quiz.progress })}
              title={quiz.title}
            >
              {quiz.title}
            </a>
          </li>
        )}
      </ul>
    </Accordion>
  );
};

SidebarCourseIndex.propTypes = {
  /** Data array for the component*/
  course: PropTypes.object,
  /** Extra classes*/
  className: PropTypes.string,
}

SidebarCourseIndex.defaultProps = {
  course: [],
  className: "",
}

export default SidebarCourseIndex;
