import React from "react";
import { shallow } from "enzyme";
import Dcrmt from "./dcrmt";

describe("Dcrmt", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Dcrmt />);
    expect(wrapper).toMatchSnapshot();
  });
});
