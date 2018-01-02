import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let wrapper, startLogin;

beforeEach(() => {
	startLogin = jest.fn(); // spie
	wrapper = shallow(
		<LoginPage startLogin={startLogin} />
	);
});


test('Should render LoginPage', ()=>{
	expect(wrapper).toMatchSnapshot();
});


test('call startLogin on button click',()=>{

	wrapper
		.find('[data-test-id="login-page-button"]')
		.prop('onClick')()
	;
	expect( startLogin ).toHaveBeenCalled();
});


