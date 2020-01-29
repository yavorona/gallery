// main app file
import axios from "axios";
import React, { Component } from "react";
import BottomPanel from "./BottomPanel.jsx";
import SidePanel from "./SidePanel.jsx";
import MainGallery from "./MainGallery.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    axios
      .get("/gallery")
      .then(res => console.log("client recieved response: ", res));
  }

  render() {
    return (
      <div>
        Gallery Module
        <h1>Photo Gallery</h1>
        <MainGallery />
        <BottomPanel />
        <SidePanel />
      </div>
    );
  }
}

export default App;
