import React from "react";
const LeftArrow = props => {
  let space = "";
  return (
    <div className="leftArrowShadow" onClick={props.goToPrevPhoto}>
      <div className="leftArrow">
        <i className="fa fa-angle-left"></i>
      </div>
    </div>
  );
};

export default LeftArrow;
