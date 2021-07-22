import React from 'react';
import { Card, Button } from '../../';
import PropTypes from 'prop-types';
import { vector } from '../../images/image';

const SavedItemsCard = props => {
  const {
    customClickEvent,
    type,
    name
  } = props;
  return /*#__PURE__*/React.createElement(Card, {
    className: "saved-card",
    style: {
      backgroundImage: `url(${vector})`
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: customClickEvent,
    type: "clear",
    className: "saved-card__button p-6x"
  }, /*#__PURE__*/React.createElement("p", {
    className: "fs-body14 text-capitalized color-text-main"
  }, type), /*#__PURE__*/React.createElement("h4", {
    className: "fs-h4 color-text-main"
  }, name)));
};

SavedItemsCard.propTypes = {
  /** Data value for item type*/
  type: PropTypes.string,

  /** Data value for lesson name*/
  name: PropTypes.string,

  /** Custom Click Event Listener*/
  customClickEvent: PropTypes.func
};
SavedItemsCard.defaultProps = {
  type: '',
  name: '',
  customClickEvent: ''
};
export default SavedItemsCard;