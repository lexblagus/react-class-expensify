import filtersReducer from '../../reducers/filters.js';
import moment from 'moment';

test('Expected DEFAULT FILTER values', () => {
	const state = filtersReducer(
		undefined,
		{type: '@@INIT'}
	);
	
	expect( state ).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});


test('Expected SET_TEXT_FILTER', () => {
	const state = filtersReducer(
		undefined,
		{
			type: 'SET_TEXT_FILTER',
			lookFor: 'Nham',
		}
	);
	
	expect( state.text ).toEqual('Nham');
});


test('Expected SORT_BY_AMOUNT', () => {
	const state = filtersReducer(
		undefined,
		{
			type: 'SORT_BY_AMOUNT',
		}
	);
	expect( state.sortBy ).toEqual('amount');
});


test('Expected SORT_BY_DATE', () => {
	const state = filtersReducer(
		undefined,
		{
			type: 'SORT_BY_DATE',
			startDate: moment().startOf('month')
		}
	);
	expect( state.sortBy ).toEqual('date');
});


test('Expected SET_START_DATE', () => {
	const state = filtersReducer(
		undefined,
		{
			type: 'SET_START_DATE',
			startDate: moment().startOf('month')
		}
	);
	expect( state.startDate ).toEqual(
		moment().startOf('month')
	);
});


test('Expected SET_END_DATE', () => {
	const state = filtersReducer(
		undefined,
		{
			type: 'SET_END_DATE',
			endDate: moment().endOf('month')
		}
	);
	expect( state.endDate ).toEqual( moment().endOf('month') );
});

