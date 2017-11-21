import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage  from '../../components/NotFoundPage';
import storeDummyData from '../fixtures/storeDummyData';


test('Should render NotFoundPage', ()=>{
	//console.log( {...storeDummyData[0]} );
	
	const wrapper = shallow(
		<NotFoundPage />
	);
	
	expect(wrapper).toMatchSnapshot();
});

