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

// handle text change

test('should handle text change', ()=>{
	wrapper
		.find('input[data-test-id="list-filters-criteria"]')
		.prop('onChange')( {target: { value: filters_1.text } } )
	;
	expect(setTextFilter).toHaveBeenCalledWith(filters_1.text);
}); 


// test('should sort by date', ()=>{}); 
// test('should sort by amount', ()=>{}); 
// test('should should handle date changes', ()=>{}); 
// test('should should handle date focus changes', ()=>{}); 

