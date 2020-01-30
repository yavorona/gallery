import React from "react";
import { render, mount, shallow } from "enzyme";
import SidePanel from "../client/src/components/SidePanel";
import SubGallery from "../client/src/components/SubGallery";
import App from "../client/src/components/App.jsx";

describe("<SidePanel />", () => {
  it("renders three <SubGallery/> child components", () => {
    const wrapper = shallow(<SidePanel />);
    expect(wrapper.find(SubGallery)).to.have.lengthOf(3);
  });
});

describe("<App />", () => {
  it("renders three <SubGallery/> child components", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("h1")).toExist();
  });
});
