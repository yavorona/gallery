// file for Main display gallery component

import React from "react";

class MainGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.display !== this.props.display) {
      this.setState({
        display: this.props.display
      });
      console.log("display set to: ", this.state.display);
    }
  }
  render() {
    return (
      <div className="displayWrap">
        <div className="mainDisplay">
          <img src={this.state.display}></img>
        </div>
        <div className="arrow"></div>
        <span>></span>
      </div>
    );
  }
}

export default MainGallery;
