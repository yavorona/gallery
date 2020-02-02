import React from "react";
const RightArrow = props => {
  let caret = ">";
  return (
    <div className="rightArrowShadow" onClick={props.goToNextPhoto}>
      <div className="nextArrow">
        <i className="fa fa-angle-right"></i>
      </div>
    </div>
  );
};

export default RightArrow;
