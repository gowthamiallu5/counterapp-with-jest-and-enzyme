import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";


describe('Header Component', () => {
    const wrapper = shallow(<Header />);
    
    it('Should render without errors', () => {
        expect(wrapper.length).toBe(1);
    });

    it('text of span', () => {
        const span = wrapper.find("span");
        const result = span.text();
        expect(result).toBe("POC Header");;
    });

});


