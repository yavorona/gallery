import React from "react";

class SubGallery extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Sub Gallery</h3>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default SubGallery;
