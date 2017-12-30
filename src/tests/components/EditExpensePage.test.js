import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import dummyStore01 from '../fixtures/dummyStore01.js';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
	startEditExpense = jest.fn(); // spie
	startRemoveExpense = jest.fn(); // spie
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage
			startEditExpense={startEditExpense}
			startRemoveExpense={startRemoveExpense}
			history={history}
			expense={dummyStore01[4]}
		/>
	);
});

test('should render EditExpensePage correctly', ()=>{
	expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', ()=>{
	wrapper.find('ExpenseForm').prop('onSubmit')( dummyStore01[4] );
	expect( history.push ).toHaveBeenLastCalledWith('/');
	expect(startEditExpense).toHaveBeenLastCalledWith( dummyStore01[4].id, dummyStore01[4] );
});

test('should handle startRemoveExpense', ()=>{
	wrapper
		.find('[data-test-id="edit-expense-remove"]')
		.prop('onClick')( dummyStore01[4].id );
	expect( history.push ).toHaveBeenCalledWith('/');
});
