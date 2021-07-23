import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CircleProgress from './CircleProgress';
import { Accordion } from '../../';

import { sectionDetailPageLink } from '../../utils/helper';

const CourseIndex = (props) => {
  const {
    course: { title, sectionContent },
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
        {sectionContent &&
          sectionContent.map((section) => {
            return (
              <li className={classNames('list__row')} key={section.id}>
                <div className="list__progress-container">
                  <CircleProgress percentage={0} />
                </div>
                {sectionDetailPageLink(
                  section.sectionContentType,
                  section.id,
                  section.title,
                  section.sectionId
                )}
              </li>
            );
          })}
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
