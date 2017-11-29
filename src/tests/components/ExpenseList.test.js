import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList }  from '../../components/expenseList';
import dummyStore01 from '../fixtures/dummyStore01';


test('Should render ExpenseList with expenses', ()=>{
	const wrapper = shallow(
		<ExpenseList expenses={dummyStore01} />
	);
	
	expect(wrapper).toMatchSnapshot();
});

test('Should render empty ExpenseList', ()=>{
	const wrapper = shallow(
		<ExpenseList expenses={[]} />
	);
	
	expect(wrapper).toMatchSnapshot();
});