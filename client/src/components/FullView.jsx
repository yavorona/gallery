import React from "react";
const FullView = props => {
  let space = "";
  return (
    <div className="fullViewShadow">
      <div className="fullView" onClick={props.fullView}>
        View All
        <i className="fullViewButton"></i>
      </div>
    </div>
  );
};

export default FullView;
