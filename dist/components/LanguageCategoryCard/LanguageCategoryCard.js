import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Card, Icons, Button } from '../../';
import { FiArrowRight } from 'react-icons/fi';
import { VIEW, PROGRAMMING } from '../../language/Card.language';
import { LCCvector1, LCCvector2, LCCvector3, LCCvector4, LCCvector5, LCCvector6 } from '../../images/image';

const LanguageCategoryCard = props => {
  const {
    languageCode,
    language,
    vector,
    customClickEvent,
    type,
    className
  } = props;
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

  const LanguageCard = () => /*#__PURE__*/React.createElement(Card, {
    className: classNames('Language-card', className)
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: customClickEvent,
    type: "clear",
    className: "Language-card__button"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Language-card__cover",
    style: {
      backgroundImage: `url(${vector1}), url(${vector2})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top left, top right'
    }
  }, /*#__PURE__*/React.createElement(Icons, {
    iconName: languageCode,
    alt: language,
    className: "mb-6x"
  }), /*#__PURE__*/React.createElement("h5", {
    className: "fs-body16 text-uppercase color-text-main text-demibold mb-5x"
  }, /*#__PURE__*/React.createElement("p", null, language), " ", PROGRAMMING), /*#__PURE__*/React.createElement("span", {
    className: "d-flex align-items-center color-primary-base text-medium"
  }, VIEW, /*#__PURE__*/React.createElement(FiArrowRight, {
    className: "Language-card__icon ml-1x"
  })))));

  const AllLanguageCard = () => /*#__PURE__*/React.createElement(Card, {
    className: classNames('Language-card', className)
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: customClickEvent,
    type: "clear",
    className: "Language-card__button"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Language-card__cover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-end"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fs-article text-bold color-primary-base"
  }, "View all Languages"), /*#__PURE__*/React.createElement(FiArrowRight, {
    className: "Language-card__icon Language-card__icon--all-card color-primary-base"
  })))));

  return type === 'All' ? AllLanguageCard() : LanguageCard();
};

LanguageCategoryCard.propTypes = {
  /** Code of the Language*/
  languageCode: PropTypes.string,

  /** Language Title */
  language: PropTypes.string,

  /** Type of card. Available Option "All" or ""  */
  type: PropTypes.string,

  /** Shape Vector. Available Option 1 or "" */
  vector: PropTypes.number,

  /** Extra Classname */
  classNames: PropTypes.string,

  /** Custom Click Event Listener*/
  customClickEvent: PropTypes.func
};
LanguageCategoryCard.defaultProps = {
  languageCode: '',
  language: '',
  vector: 1,
  customClickEvent: null,
  type: '',
  classNames: ''
};
export default LanguageCategoryCard;