import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import storeDummyData from '../fixtures/storeDummyData.js';

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
			expense={storeDummyData[4]}
		/>
	);
});

test('should render EditExpensePage correctly', ()=>{
	expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', ()=>{
	wrapper.find('ExpenseForm').prop('onSubmit')( storeDummyData[4] );
	expect( history.push ).toHaveBeenLastCalledWith('/');
	expect(editExpense).toHaveBeenLastCalledWith( storeDummyData[4].id, storeDummyData[4] );
});

test('should handle removeExpense', ()=>{
	wrapper.find('button').prop('onClick')( storeDummyData[4].id );
	expect( history.push ).toHaveBeenCalledWith('/');
});
