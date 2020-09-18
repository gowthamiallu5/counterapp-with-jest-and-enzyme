import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import App from "./App";


describe('App Component', () => {
    const wrapper = shallow(<App />);
    it("footer exists",()=>{
        const footer = wrapper.find(Footer);
        expect(footer.exists()).toBe(true);
    })  
})