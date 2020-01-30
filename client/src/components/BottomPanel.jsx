// file for assembling bottom panel with clickable thumbnails to render main display photo

import React from "react";
import Thumbnail from "./Thumbnail.jsx";

class BottomPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    let thumbnails = this.props.thumbnails;
    return (
      <div className="bottomContainer">
        {thumbnails.map(thumbnail => {
          this.state.counter++;
          return (
            <div>
              <Thumbnail counter={this.state.counter} img={thumbnail} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default BottomPanel;
