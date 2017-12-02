import moment from 'moment';

const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date', // date or amount
	startDate: moment().startOf('month').add(-1, 'month'),
	endDate: moment().endOf('month').add(1, 'month')
};

export default (state = filtersReducerDefaultState, action) => {
	switch (action.type){
		default:
			return state;
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.lookFor
			};
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount'
			};
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			};
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			};
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate
			};
	}
};