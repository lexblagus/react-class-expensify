import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage  from '../../components/NotFoundPage';
import dummyStore01 from '../fixtures/dummyStore01';


test('Should render NotFoundPage', ()=>{
	//console.log( {...dummyStore01[0]} );
	
	const wrapper = shallow(
		<NotFoundPage />
	);
	
	expect(wrapper).toMatchSnapshot();
});

