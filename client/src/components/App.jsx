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
      displayedPhoto: "url",
      thumbnails: []
    };
  }
  componentDidMount() {
    axios.get("/gallery").then(res => {
      console.log("client recieved response: ", res);
      this.setState({
        displayedPhoto: res.data[1],
        thumbnails: res.data
      });
      console.log("thumbnails set to: ", this.state.thumbnails);
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <MainGallery display={this.state.displayedPhoto} />
        </div>
        <div className="bottomContainer">
          <BottomPanel thumbnails={this.state.thumbnails} />
        </div>
        <div>
          <SidePanel />
        </div>
      </div>
    );
  }
}

export default App;
