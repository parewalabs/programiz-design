import React from "react";
import vector from "../../images/Vector.png";

const ExamplesCard = (props) => {
  return (
    <div className="w-255 h-132 rounded border-2 text-primary-blue focus:ring-2 hover:border-tertiary relative">
      <div className="px-6 pt-6">
        <h4 className="text-lg text-primary-blue">{props.name}</h4>
      </div>
      <img src={vector} className="absolute -top-0 -right-2" alt="examples" />
    </div>
  );
};

export default ExamplesCard;
