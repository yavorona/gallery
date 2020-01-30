// file to generate each thumbnail in BottomPanel

import React from "react";

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: {
        "grid-row": `${this.props.counter} / ${this.props.counter + 1}`
      }
    };
  }
  render() {
    let thumbStyle = {
      maxWidth: "4rem",
      "grid-row": `${this.props.counter} / ${this.props.counter + 1}`
    };
    console.log("current position is: ", this.state.position);
    return (
      <div>
        <div className="thumbnail">
          <a href={this.props.img}>
            <img style={thumbStyle} src={this.props.img}></img>
          </a>
        </div>
      </div>
    );
  }
}

export default Thumbnail;
