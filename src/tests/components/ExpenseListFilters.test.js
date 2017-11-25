import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters }  from '../../components/expenseListFilters';
import { filters_0, filters_1 } from '../fixtures/dummyFilters';

let wrapper, setTextFilter, sortByDate, sortByAmount, sortByStartDate, sortByEndDate;

beforeEach(()=>{
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();
	sortByStartDate = jest.fn();
	sortByEndDate = jest.fn();
	
	wrapper = shallow(
		<ExpenseListFilters
			filters={filters_0}
			setTextFilter={setTextFilter}
			sortByDate={sortByDate}
			sortByAmount={sortByAmount}
			sortByStartDate={sortByStartDate}
			sortByEndDate={sortByEndDate}
		/>
	);
});

test('render ExpenseListFilters with data 0', ()=>{
	expect(wrapper).toMatchSnapshot();
});

test('render ExpenseListFilters with data 1', ()=>{
	
	wrapper.setProps({
		filters: filters_1
	});
	expect(wrapper).toMatchSnapshot();
}); 