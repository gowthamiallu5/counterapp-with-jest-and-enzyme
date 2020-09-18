import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";


describe('Footer Component', () => {
    const wrapper = shallow(<Footer />);
    
    it('Should render without errors', () => {
        expect(wrapper.length).toBe(1);
    });

    it('text of span', () => {
        const span = wrapper.find("span");
        const result = span.text();
        expect(result).toBe("footertext");;
    });

});


