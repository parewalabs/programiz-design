import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CircleProgress from './CircleProgress';
import { Accordion } from '../../';
import {
  EXPAND_ALL,
  COURSE_INDEX,
  COLLAPSE_ALL,
} from '../../language/CourseCard.language';
import Button from '../Button/Button';

const CourseIndex = (props) => {
  const [isExpanded, expandCollapsible] = useState(false);

  const { courseToc, className, goToSectionContent } = props;

  const expandCollapsibleFunc = (event) => {
    event.preventDefault();
    expandCollapsible(!isExpanded);
  };

  const HeaderComponent = (title) => {
    return (
      <h4 title={title} className="color-text-main">
        {title}
      </h4>
    );
  };

  return (
    <>
      <div className="d-flex align-items-end mb-4x pt-14x justify-content-between">
        <h2 className="fs-h2main fs-h2main-md color-text-main">
          {COURSE_INDEX}
        </h2>
        <a href="/" className="mb-1x" onClick={expandCollapsibleFunc}>
          {!isExpanded ? EXPAND_ALL : COLLAPSE_ALL}
        </a>
      </div>

      {courseToc &&
        courseToc.sections &&
        courseToc.sections.map((sections) => (
          <Accordion
            key={sections.id}
            headerComponent={HeaderComponent(sections.title)}
            className={classNames('mb-2x', { className })}
            isOpen={isExpanded}
          >
            <ul className="list list--progress py-6x px-10x">
              {sections &&
                sections.sectionContent.map((section) => {
                  return (
                    <Button
                      type="clear"
                      key={section.id}
                      onClick={() =>
                        goToSectionContent(
                          section.sectionContentType,
                          section.id,
                          section.sectionId
                        )
                      }
                    >
                      <li className={classNames('list__row')}>
                        <div className="list__progress-container">
                          <CircleProgress percentage={0} />
                        </div>
                        {section.title}
                      </li>
                    </Button>
                  );
                })}
            </ul>
          </Accordion>
        ))}
    </>
  );
};

CourseIndex.propTypes = {
  /** Course Data */
  courseToc: PropTypes.object,
  /** Extra classes */
  className: PropTypes.string,
  /** Go to the section function*/
  goToSectionContent: PropTypes.func,
};

CourseIndex.defaultProps = {
  courseToc: {},
  className: '',
  goToSectionContent: () => {},
};

export default CourseIndex;
