import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters }  from '../../components/expenseListFilters';
import { filters_0, filters_1 } from '../fixtures/dummyFilters';

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(()=>{
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	
	wrapper = shallow(
		<ExpenseListFilters
			filters={filters_0}
			setTextFilter={setTextFilter}
			sortByDate={sortByDate}
			sortByAmount={sortByAmount}
			setStartDate={setStartDate}
			setEndDate={setEndDate}
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

test('should handle text change', ()=>{
	wrapper
		.find('[data-test-id="list-filters-criteria"]')
		.prop('onChange')( {target: { value: filters_1.text } } )
	;
	expect(setTextFilter).toHaveBeenLastCalledWith(filters_1.text);
}); 


test('should sort by date', ()=>{
	wrapper
		.find('[data-test-id="list-filters-sort"]')
		.prop('onChange')( {target: { value: filters_0.sortBy } } )
	;
	expect(sortByDate).toHaveBeenCalled();
}); 

test('should sort by amount', ()=>{
	wrapper
		.find('[data-test-id="list-filters-sort"]')
		.prop('onChange')( {target: { value: filters_1.sortBy } } )
	;
	expect(sortByAmount).toHaveBeenCalled();
});

test('should handle start date', ()=>{
	wrapper
		.find('DateRangePicker')
		.prop('onDatesChange')({
			startDate: filters_1.startDate,
			endDate: filters_1.endDate
		})
	;
	expect(setStartDate).toHaveBeenCalledWith(filters_1.startDate);
	expect(setEndDate).toHaveBeenCalledWith(filters_1.endDate);
});

test('should handle date focus changes', ()=>{
	wrapper
		.find('DateRangePicker')
		.prop('onFocusChange')('startDate')
	;
	expect(wrapper.state('calendarFocused')).toBe('startDate');
}); 


test('should handle date focus changes', ()=>{
	wrapper
		.find('DateRangePicker')
		.prop('onFocusChange')('endDate')
	;
	expect(wrapper.state('calendarFocused')).toBe('endDate');
}); 

