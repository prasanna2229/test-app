import React from "react";
import { shallow } from "enzyme";
import Props from "./props";

describe("Props", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Props />);
    expect(wrapper).toMatchSnapshot();
  });
});
