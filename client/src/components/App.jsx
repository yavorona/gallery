// main app file assembling all components
import axios from "axios";
import React, { Component } from "react";
import BottomPanel from "./BottomPanel.jsx";
import SidePanel from "./SidePanel.jsx";
import MainGallery from "./MainGallery.jsx";
import RightArrow from "./RightArrow.jsx";
import LeftArrow from "./LeftArrow.jsx";
import FullView from "./FullView.jsx";

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
    this.goToPrevPhoto = this.goToPrevPhoto.bind(this);
    this.goToNextPhoto = this.goToNextPhoto.bind(this);
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
    console.log(event.target.src);
    this.setState({
      displayedPhoto: `${event.target.src}`
    });
  }

  goToPrevPhoto(e) {
    e.preventDefault();
    let current = this.state.thumbnails.indexOf(this.state.displayedPhoto);
    if (current === 0) {
      let newDisplay = this.state.thumbnails[9];
      console.log("replacing current: ", current, "with: ", newDisplay);
      this.setState({
        displayedPhoto: newDisplay
      });
    } else {
      let newDisplay = this.state.thumbnails[current - 1];
      console.log("replacing current: ", current, "with: ", newDisplay);
      this.setState({
        displayedPhoto: newDisplay
      });
    }
  }

  goToNextPhoto(e) {
    e.preventDefault();
    let current = this.state.thumbnails.indexOf(this.state.displayedPhoto);
    if (current === 9) {
      let newDisplay = this.state.thumbnails[0];
      console.log("replacing current: ", current, "with: ", newDisplay);
      this.setState({
        displayedPhoto: newDisplay
      });
    } else {
      let newDisplay = this.state.thumbnails[current + 1];
      console.log("replacing current: ", current, "with: ", newDisplay);
      this.setState({
        displayedPhoto: newDisplay
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="buttonText">
          <div className="rightArrow">
            <RightArrow goToNextPhoto={this.goToNextPhoto} />
          </div>
          <div className="leftArrow">
            <LeftArrow goToPrevPhoto={this.goToPrevPhoto} />
          </div>
          <div className="fullViewButton"></div>
        </div>
        <div className="leftPanels">
          <div className="mainGallery">
            <MainGallery display={this.state.displayedPhoto} />
          </div>
          <div className="thumbnailPanel">
            <div className="bottomPanel1">
              <BottomPanel
                row="1"
                changeDisplay={this.changeDisplay}
                thumbnails={this.state.thumbnails}
              />
            </div>
            <div className="bottomPanel2">
              <BottomPanel
                row="2"
                changeDisplay={this.changeDisplay}
                thumbnails={this.state.thumbnails}
              />
            </div>
          </div>
        </div>
        <div className="rightPanels">
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
