import React from "react";
import { shallow } from "enzyme";
import Incrmt from "./incrmt";

describe("Incrmt", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Incrmt />);
    expect(wrapper).toMatchSnapshot();
  });
});
