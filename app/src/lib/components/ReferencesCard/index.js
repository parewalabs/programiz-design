import React from "react";
import vector from "../../images/Vector.png";

const ReferencesCard = (props) => {
  return (
    <div
      className="w-255 h-132 rounded border-2 text-primary-blue focus:ring-2 hover:border-tertiary relative cursor-pointer"
      onClick={props.customClickEvent}
    >
      <div className="px-6 pt-6">
        <h4 className="text-lg text-primary-blue">{props.name}</h4>
        <p className="pt-2 text-sm">{props.description}</p>
      </div>
      <img src={vector} className="absolute -top-0 -right-2" alt="examples" />
    </div>
  );
};

export default ReferencesCard;
