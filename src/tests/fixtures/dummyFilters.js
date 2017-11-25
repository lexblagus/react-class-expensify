import moment from 'moment';

const filters_0 = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filters_1 = {
	text: 'Desc',
	sortBy: 'amount',
	startDate: moment( 1511215827 ).add(1, 'day'),
	endDate: moment( 1511215827 ).add(3, 'days')
};

export { filters_0 , filters_1 };