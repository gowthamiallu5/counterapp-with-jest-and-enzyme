import React from "react";
import { shallow } from "enzyme";
import Counter from "./Counter";


describe('counter Component', () => {
    const wrapper = shallow(<Counter />);
    
    it('Should render without errors', () => {
        expect(wrapper.length).toBe(1);
    });

    it('initial value should be zero', () => {
        const initialvalueelement = wrapper.find(".Countvalue");
        const result = initialvalueelement.text();
        expect(result).toBe("0");
    });


    it('onclick of increment',()=>{
        const incrementbutton = wrapper.find(".incrementbutton");
        incrementbutton.simulate("click");
        const initialvalueelement = wrapper.find(".Countvalue");
        const result = initialvalueelement.text();
        expect(result).toBe("1");

    })

});


