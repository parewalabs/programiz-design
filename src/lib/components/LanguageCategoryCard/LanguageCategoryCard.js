import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import { Card, Icons, Button } from 'lib';
import { FiArrowRight } from "react-icons/fi";
import { VIEW, PROGRAMMING } from "lib/language/Card.language";
import { LCCvector1, LCCvector2, LCCvector3, LCCvector4, LCCvector5, LCCvector6 } from 'lib/images/image';

const LanguageCategoryCard = (props) => {

  const { languageCode, language, vector, customClickEvent, type, className } = props;

  let vector1 = 0;
  let vector2 = 0;
  if (vector === 1) {
    vector1 = LCCvector1;
    vector2 = LCCvector2;
  } else if (props.vector === 2) {
    vector1 = LCCvector3;
    vector2 = LCCvector4;
  } else {
    vector1 = LCCvector5;
    vector2 = LCCvector6;
  }

  const LanguageCard = () => (
    <Card className={classNames("Language-card", className)}>
      <Button onClick={customClickEvent} type="clear" className="Language-card__button">
        <div
          className="Language-card__cover"
          style={{
            backgroundImage: `url(${vector1}), url(${vector2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top left, top right",
          }}
        >
          <Icons
            iconName={languageCode}
            alt={language}
            className="mb-6x"
          />
          <h5 className="fs-body16 text-uppercase color-text-main text-demibold mb-5x">
            <p>{language}</p> { PROGRAMMING }
          </h5>
      
          <span className="d-flex align-items-center color-primary-base text-medium">
            { VIEW }
            <FiArrowRight className="Language-card__icon ml-1x"/>
          </span>
        </div>
      </Button>
    </Card>
  );

  const AllLanguageCard = () => (
    <Card className={classNames("Language-card", className)}>
      <Button onClick={customClickEvent} type="clear" className="Language-card__button">
        <div className="Language-card__cover">
          <div className="d-flex align-items-end">
            <span className="fs-article text-bold color-primary-base">View all Languages</span>
            <FiArrowRight className="Language-card__icon Language-card__icon--all-card color-primary-base"/>
          </div>
        </div>
      </Button>
    </Card>
  );

  return (
    type === "All" ? AllLanguageCard() : LanguageCard()
  );
};

LanguageCategoryCard.propTypes = {
  /** Code of the Language*/
  languageCode: PropTypes.string,
  /** Language Title */
  language: PropTypes.string,
  /** Type of card. Available Option "All" or ""  */
  type: PropTypes.string,
  /** Shape Vector. Available Option 1 or "" */
  vector: PropTypes.string,
  /** Extra Classname */
  classNames: PropTypes.string,
  /** Custom Click Event Listener*/
  customClickEvent: PropTypes.func,
}

LanguageCategoryCard.defaultProps = {
  languageCode: "",
  language: "",
  vector: "1",
  customClickEvent: "",
  type: "",
  classNames:""
}

export default LanguageCategoryCard;
