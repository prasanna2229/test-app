import React from "react";
import { shallow } from "enzyme";
import Reset from "./reset";

describe("Reset", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Reset />);
    expect(wrapper).toMatchSnapshot();
  });
});
