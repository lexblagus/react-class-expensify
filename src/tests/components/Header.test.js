import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import Header from '../../components/Header.js';

test('should render Header',()=>{
	//const renderer = new ReactShallowRenderer();
	//renderer.render(<Header />);
	//expect(renderer.getRenderOutput()).toMatchSnapshot();
	
	const wrapper = shallow(
		<Header />
	);
	
	//expect(wrapper.find('NavLink').length).toBe(5);
	expect( wrapper ).toMatchSnapshot();
});