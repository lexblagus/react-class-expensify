import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header.js';

let wrapper, startLogout;

beforeEach(() => {
	startLogout = jest.fn(); // spie
	wrapper = shallow(
		<Header startLogout={startLogout} />
	);
});


test('should render Header',()=>{
	//const renderer = new ReactShallowRenderer();
	//renderer.render(<Header />);
	//expect(renderer.getRenderOutput()).toMatchSnapshot();
	
	//const wrapper = shallow(
	//	<Header startLogout={startLogout} />
	//);
	
	//expect(wrapper.find('NavLink').length).toBe(5);
	expect( wrapper ).toMatchSnapshot();
});


test('call startLogout on button click',()=>{
	
	wrapper
		.find('[data-test-id="header-logout-button"]')
		//.prop('onClick')()
		.simulate('click')
	;
	expect( startLogout ).toHaveBeenCalled();
});


