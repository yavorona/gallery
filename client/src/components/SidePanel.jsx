import React from "react";

import Thumbnail from "./Thumbnail.jsx";

class SidePanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ verticalAlign: "baseline" }}>
        <h1>Side Panel</h1>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
    );
  }
}

export default SidePanel;
