import React from "react";
import SaveItemVector1 from "../../images/SaveItemVector1.svg";
import SaveItemVector2 from "../../images/SaveItemVector2.svg";
import SaveItemVector3 from "../../images/SaveItemVector3.svg";
import SaveItemVector4 from "../../images/SaveItemVector4.svg";

const SavedItemsCard = (props) => {
  const SelectVector = (vectorType) => {
    switch (vectorType) {
      case 1:
        return SaveItemVector1;
      case 2:
        return SaveItemVector2;
      case 3:
        return SaveItemVector3;
      default:
        return SaveItemVector4;
    }
  };
  let vector = {
    backgroundImage: `url(${SelectVector(props.vector)})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom",
  };
  return (
    <div
      className="w-255 h-132 rounded border-2 text-primary-blue focus:ring-2 hover:border-tertiary relative cursor-pointer bg-white"
      onClick={props.customClickEvent}
      style={vector}
    >
      <div className="px-6 pt-6">
        <p className="text-sm">{props.type}</p>
        <h4 className="text-lg text-primary-blue truncate" title={props.name}>
          {props.name}
        </h4>
      </div>
    </div>
  );
};

export default SavedItemsCard;
