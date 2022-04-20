import React from "react";
import { shallow } from "enzyme";
import State from "./State";

describe("State", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<State />);
    expect(wrapper).toMatchSnapshot();
  });
});
