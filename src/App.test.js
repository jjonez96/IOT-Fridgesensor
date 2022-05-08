import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Temperature from "/Temperature";

configure({ adapter: new Adapter() });

describe("Testing Temperature", () => {
  it("Should return one div", () => {
    const wrapper = shallow(<Temperature />);
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
describe("Testing Logo", () => {
  it("Should render GoStop Logo", () => {
    const wrapper = shallow(<Temperature />);
    expect(wrapper.find("GoStop")).toHaveLength(1);
  });
});
describe("Testing H2", () => {
  it("Should retuen one H2", () => {
    const wrapper = shallow(<Temperature />);
    expect(wrapper.find("h2")).toHaveLength(1);
  });
});
