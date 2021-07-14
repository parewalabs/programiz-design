import React from "react";
import { Card, Button } from "lib";
import PropTypes from "prop-types";

import {vector} from "lib/images/image";

const SavedItemsCard = (props) => {

  const { customClickEvent, type, name} = props;

  return (
    <Card className="saved-card" style={{backgroundImage: `url(${vector})`}}>
      <Button onClick={customClickEvent} type="clear" className="saved-card__button p-6x">
        <p className="fs-body14 text-capitalized color-text-main">{type}</p>
        <h4 className="fs-h4 color-text-main">{name}</h4>
      </Button>
    </Card>
  );
};

SavedItemsCard.propTypes = {
  /** Data value for item type*/
  type: PropTypes.string,
  /** Data value for lessong name*/
  name: PropTypes.string,
  /** Custom Click Event Listener*/
  customClickEvent: PropTypes.func,
};

SavedItemsCard.defaultProps = {
  type: "",
  name: "",
  customClickEvent: "",
};

export default SavedItemsCard;
