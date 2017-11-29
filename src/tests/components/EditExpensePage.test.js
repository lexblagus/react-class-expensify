import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import dummyStore01 from '../fixtures/dummyStore01.js';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
	editExpense = jest.fn(); // spie
	removeExpense = jest.fn(); // spie
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage
			editExpense={editExpense}
			removeExpense={removeExpense}
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
	expect(editExpense).toHaveBeenLastCalledWith( dummyStore01[4].id, dummyStore01[4] );
});

test('should handle removeExpense', ()=>{
	wrapper
		.find('[data-test-id="edit-expense-remove"]')
		.prop('onClick')( dummyStore01[4].id );
	expect( history.push ).toHaveBeenCalledWith('/');
});
