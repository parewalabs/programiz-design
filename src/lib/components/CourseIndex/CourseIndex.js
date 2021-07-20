import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CircleProgress from './CircleProgress';
import { Accordion } from '../../';

const CourseIndex = (props) => {
  const {
    course: { title, lessons, quiz },
    className,
  } = props;

  const HeaderComponent = (
    <h4 title={title} className="color-text-main">
      {title}
    </h4>
  );

  return (
    <Accordion headerComponent={HeaderComponent} className={className}>
      <ul className="list list--progress py-6x px-10x">
        {lessons &&
          lessons.map((lesson) => {
            return (
              <li className={classNames('list__row')} key={lesson.id}>
                <div className="list__progress-container">
                  <CircleProgress percentage={lesson.progressPercentage} />
                </div>
                <a
                  href={`/lesson/${lesson.id}/details`}
                  className={classNames('list__label truncate', {
                    'text-bold': lesson.progress,
                  })}
                  title={lesson.title}
                >
                  {lesson.title}
                </a>
              </li>
            );
          })}
        {props.course.quiz && (
          <li className={classNames('list__row')} key={quiz.id}>
            <div className="list__progress-container">
              <CircleProgress percentage={quiz.progressPercentage} />
            </div>
            <a
              href={`/quiz/${quiz.id}`}
              className={classNames('list__label truncate', {
                'text-bold': quiz.progress,
              })}
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

CourseIndex.propTypes = {
  /** Course Data */
  course: PropTypes.object,
  /** Extra classes */
  className: PropTypes.string,
};

CourseIndex.defaultProps = {
  course: {},
  className: '',
};

export default CourseIndex;
