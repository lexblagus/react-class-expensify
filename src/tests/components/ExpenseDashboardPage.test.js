import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage  from '../../components/ExpenseDashboardPage';
import dummyStore01 from '../fixtures/dummyStore01';


test('Should render ExpenseDashboardPage', ()=>{
	//console.log( {...dummyStore01[0]} );
	
	const wrapper = shallow(
		<ExpenseDashboardPage />
	);
	
	expect(wrapper).toMatchSnapshot();
});

