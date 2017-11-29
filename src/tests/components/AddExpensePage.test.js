import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import dummyStore01 from '../fixtures/dummyStore01.js';

let addExpense, history, wrapper;

beforeEach(() => {
	addExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<AddExpensePage
			addExpense={addExpense}
			history={history}
		/>
	);
});

test('should render AddExpensePage correctly', ()=>{
	expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', ()=>{
	wrapper.find('ExpenseForm').prop('onSubmit')( dummyStore01[4] );
	expect( history.push ).toHaveBeenCalledWith('/');
	expect(addExpense).toHaveBeenCalledWith( dummyStore01[4] );
});
