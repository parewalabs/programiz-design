import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Accordion } from '../../';
import CircleProgress from '../CourseIndex/CircleProgress';
import { sectionDetailPageLink } from '../../utils/helper';

const SidebarCourseIndex = (props) => {
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
    <Accordion
      headerComponent={HeaderComponent}
      className={classNames('accordion--sidebar', className)}
    >
      <ul className="list list--progress list--progress--sidebar py-4x px-6x">
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

SidebarCourseIndex.propTypes = {
  /** Data array for the component*/
  course: PropTypes.object,
  /** Extra classes*/
  className: PropTypes.string,
};

SidebarCourseIndex.defaultProps = {
  course: [],
  className: '',
};

export default SidebarCourseIndex;
