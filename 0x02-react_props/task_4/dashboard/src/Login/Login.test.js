import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";

describe("Login test", () => {
    it("Login render without crashing", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toEqual(true);
    });
    it("Login have 2 input tags and 2 label tags", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find("label")).toHaveLength(2);
        expect(wrapper.find("input")).toHaveLength(2);
    });
});