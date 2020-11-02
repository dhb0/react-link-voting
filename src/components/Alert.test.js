import React from 'react';
import Alert from './Alert';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("Alert prop testing",()=>{
    test('taking the prop succesfully',()=>{
        const wrapper = shallow(<Alert message="naber"/>)
        const div = wrapper.find('div.alert')
        expect(div.text()).toBe('naber')
    })
})