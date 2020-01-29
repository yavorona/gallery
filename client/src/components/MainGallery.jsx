import React from "react";

class MainGallery extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img src={this.props.picture}></img>
      </div>
    );
  }
}

export default MainGallery;
