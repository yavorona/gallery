import React from "react";

import Thumbnail from "./Thumbnail.jsx";

class SidePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomSuite: "",
      traveler: "",
      dining: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.roomSuite !== this.props.roomSuite) {
      this.setState({
        roomSuite: this.props.roomSuite,
        traveler: this.props.traveler,
        dining: this.props.dining
      });
    }
  }

  render() {
    return (
      <div className="sidePanel">
        <div className="wrap">
          <img
            className="roomSideThumbnail"
            src={this.state.roomSuite[0]}
          ></img>
          <div className="text">
            <span>
              Rooms/Suites<br></br>
              (5)
            </span>
          </div>
        </div>
        <div className="middleBorder">
          <div className="wrapMiddle">
            <img
              className="travelerSideThumbnail"
              src={this.state.traveler[0]}
            ></img>
            <div className="textMiddle">
              <span>
                Traveler
                <br></br>
                (5)
              </span>
            </div>
          </div>
        </div>
        <div className="wrap">
          <img className="diningSideThumbnail" src={this.state.dining[1]}></img>
          <div className="text">
            <span>
              Dining
              <br></br>
              (5)
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SidePanel;
