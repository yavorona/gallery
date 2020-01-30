// file for Main display gallery component

import React from "react";

class MainGallery extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img style={{ maxWidth: "30rem" }} src={this.props.display}></img>
      </div>
    );
  }
}

export default MainGallery;
