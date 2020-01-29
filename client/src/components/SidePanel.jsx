import React from "react";

import SubGallery from "./SubGallery.jsx";

class SidePanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ verticalAlign: "baseline" }}>
        <h1>Side Panel</h1>
        <SubGallery name="Dining" />
        <SubGallery name="Room/suite" />
        <SubGallery name="Traveler" />
      </div>
    );
  }
}

export default SidePanel;
