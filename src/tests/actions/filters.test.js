import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

test('should generate set start action object', ()=>{
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
});

test('should generate set end action object', ()=>{
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	});
});


// setTextFilter
// sortByDate
// sortByAmount

test('should filter by default text', ()=>{
	const val = '';
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		lookFor: val
	});
});

test('should filter by given text', ()=>{
	const val = 'look for this';
	const action = setTextFilter(val);
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		lookFor: val
	});
});


test('should sort by text', ()=>{
	const action = sortByDate();
	expect(action).toEqual({
		type: 'SORT_BY_DATE'
	});
});


test('should sort by amount', ()=>{
	const action = sortByAmount();
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT'
	});
});
