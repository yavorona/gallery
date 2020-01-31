// main app file assembling all components
import axios from "axios";
import React, { Component } from "react";
import BottomPanel from "./BottomPanel.jsx";
import SidePanel from "./SidePanel.jsx";
import MainGallery from "./MainGallery.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedPhoto: "",
      thumbnails: [],
      dining: [],
      traveler: [],
      roomSuite: []
    };
    this.changeDisplay = this.changeDisplay.bind(this);
  }

  componentDidMount() {
    let random = randomNum();
    axios.get(`/gallery/${random}`).then(res => {
      console.log("client recieved response: ", res);
      let urls = res.data;
      this.setState({
        thumbnails: urls.main,
        dining: urls.dining,
        traveler: urls.traveler,
        roomSuite: urls.roomsuite,
        displayedPhoto: urls.main[0]
      });
    });
  }

  changeDisplay(event) {
    event.preventDefault();
    this.setState({
      displayedPhoto: `${event.target.value}`
    });
  }

  render() {
    return (
      <div className="container">
        <div className="mainGallery">
          <MainGallery display={this.state.displayedPhoto} />
        </div>
        <div className="bottomPanel1">
          <BottomPanel
            row="2"
            changeDisplay={this.changeDisplay}
            thumbnails={this.state.thumbnails}
          />
        </div>
        <div className="bottomPanel2">
          <BottomPanel
            row="1"
            changeDisplay={this.changeDisplay}
            thumbnails={this.state.thumbnails}
          />
        </div>
        <div className="sidePanel">
          <SidePanel
            dining={this.state.dining}
            traveler={this.state.traveler}
            roomSuite={this.state.roomSuite}
          />
        </div>
      </div>
    );
  }
}

let randomNum = () => {
  return Math.floor(Math.random() * 5 + 1);
};

export default App;
