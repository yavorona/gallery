// file to generate each thumbnail in BottomPanel

import React from "react";

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.customId = "thumb" + this.props.counter;
  }
  render() {
    return (
      <div
        onClick={this.props.changeDisplay}
        className={"row" + this.props.row + `${this.customId}`}
      >
        <img className="thumbImage" src={this.props.img}></img>
      </div>
    );
  }
}

export default Thumbnail;
