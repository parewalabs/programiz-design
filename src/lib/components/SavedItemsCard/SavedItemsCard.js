import React from 'react';
import PropTypes from 'prop-types';

import { Card, Button } from '../../';
import { vector } from '../../images/image';
import { FiTrash } from "react-icons/fi";

const SavedItemsCard = (props) => {
  const { customClickEvent, type, name, removeFunction } = props;

  return (
    <Card className="saved-card" style={{ backgroundImage: `url(${vector})` }}>
      <Button type="placeholder" className="saved-card__remove" onClick={removeFunction}>
        <FiTrash className="saved-card__icon"/>
      </Button>
      <Button
        onClick={customClickEvent}
        type="clear"
        className="saved-card__button p-6x"
      >
        <p className="fs-body14 text-capitalized color-text-main">{type}</p>
        <h4 className="fs-h4 color-text-main">{name}</h4>
      </Button>
    </Card>
  );
};

SavedItemsCard.propTypes = {
  /** Data value for item type*/
  type: PropTypes.string,
  /** Data value for lesson name*/
  name: PropTypes.string,
  /** Custom Click Event Listener*/
  customClickEvent: PropTypes.func,
  /** Function to remove item from saved list*/
  removeFunction: PropTypes.func
};

SavedItemsCard.defaultProps = {
  type: '',
  name: '',
  customClickEvent: () => {},
  removeFunction: () => {}
};

export default SavedItemsCard;
