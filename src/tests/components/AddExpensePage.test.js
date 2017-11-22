import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import storeDummyData from '../fixtures/storeDummyData.js';

let onSubmit, history, wrapper;

beforeEach(() => {
	onSubmit = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<AddExpensePage
			onSubmit={onSubmit}
			history={history}
		/>
	);
});

test('should render AddExpensePage correctly', ()=>{
	expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', ()=>{
	wrapper.find('ExpenseForm').prop('onSubmit')( storeDummyData[4] );
	expect( history.push ).toHaveBeenCalledWith('/');
	expect(onSubmit).toHaveBeenCalledWith( storeDummyData[4] );
});
