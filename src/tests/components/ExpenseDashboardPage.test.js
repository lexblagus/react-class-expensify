import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage  from '../../components/ExpenseDashboardPage';
import storeDummyData from '../fixtures/storeDummyData';


test('Should render ExpenseDashboardPage', ()=>{
	//console.log( {...storeDummyData[0]} );
	
	const wrapper = shallow(
		<ExpenseDashboardPage />
	);
	
	expect(wrapper).toMatchSnapshot();
});

