import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList }  from '../../components/expenseList';
import storeDummyData from '../fixtures/storeDummyData';


test('Should render ExpenseList with expenses', ()=>{
	const wrapper = shallow(
		<ExpenseList expenses={storeDummyData} />
	);
	
	expect(wrapper).toMatchSnapshot();
});

test('Should render empty ExpenseList', ()=>{
	const wrapper = shallow(
		<ExpenseList expenses={[]} />
	);
	
	expect(wrapper).toMatchSnapshot();
});