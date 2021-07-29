import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Accordion } from '../../';
import CircleProgress from '../CourseIndex/CircleProgress';
import Button from '../Button/Button';

const SidebarCourseIndex = (props) => {
  const {
    course: { title, sectionContent },
    className,
    goToSectionContent,
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
              <li className={classNames('list__row')}>
                <div className="list__progress-container">
                  <CircleProgress percentage={0} />
                </div>
                <Button
                  type="clear"
                  key={section.id}
                  onClick={() =>
                    goToSectionContent(section.sectionContentType, section.id)
                  }
                  className={classNames('list__label truncate', {
                    'text-bold': 0,
                  })}
                >
                  {section.title}
                </Button>
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
  /** Go to the section function*/
  goToSectionContent: PropTypes.func,
};

SidebarCourseIndex.defaultProps = {
  course: [],
  className: '',
  goToSection: () => {},
};

export default SidebarCourseIndex;
