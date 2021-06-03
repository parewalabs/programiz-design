import React from "react";

const PopularExamplesCard = (props) => {
  return (
    <div className="w-255 h-132 rounded border-2 text-primary-blue focus:ring-2 hover:border-2 hover:border-tertiary relative">
      <div className="bg-main p-0.5 rounded-t-md absolute w-full -top-0.5"></div>
      <div className="px-6 pt-6">
        <h4 className="text-lg text-primary-blue">{props.name}</h4>
      </div>
    </div>
  );
};

export default PopularExamplesCard;
