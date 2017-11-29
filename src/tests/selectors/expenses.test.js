import selectExpenses from '../../selectors/Expenses';
import moment from 'moment';
import testData from '../fixtures/dummyStore01.js';

const dummyFilter = {
	text: 'desc',
	sortBy: 'amount',
	startDate: undefined,
	endDate: undefined
};


test('Should FILTER by CUSTOM TEXT and ORDER by AMOUNT', ()=>{
	const result = selectExpenses(
		testData,
		dummyFilter
	);
	expect(result).toEqual([
		testData[7],
		testData[6],
		testData[5],
		testData[4],
		testData[3],
	])
});


test('Should FILTER by START DATE', ()=>{
	const result = selectExpenses(
		testData,
		{
			text: undefined,
			sortBy: undefined,
			startDate: moment(1511215827),
			endDate: undefined
		}
	);
	expect(result).toEqual([
		testData[3],
		testData[4],
		testData[5],
		testData[6],
		testData[7],
	]);
});

test('Should FILTER by END DATE', ()=>{
	const result = selectExpenses(
		testData,
		{
			text: undefined,
			sortBy: undefined,
			startDate: undefined,
			endDate: moment(1511215827)
		}
	);
	expect(result).toEqual([
		testData[0],
		testData[1],
		testData[2],
		testData[3],
	]);
});

test('Should FILTER by DATE', ()=>{
	const result = selectExpenses(
		testData,
		{
			text: undefined,
			sortBy: undefined,
			startDate: moment(1511215827).startOf('day'),
			endDate: moment(1511215827).endOf('day')
		}
	);
	expect(result).toEqual([
		testData[3]
	]);
});


test('Should SORT by DATE', ()=>{
	const result = selectExpenses(
		testData,
		{
			text: undefined,
			sortBy: 'date',
			startDate: undefined,
			endDate: undefined
		}
	);
	expect(result).toEqual([
		testData[7],
		testData[6],
		testData[5],
		testData[4],
		testData[3],
		testData[2],
		testData[1],
		testData[0],
	]);
});

test('Should SORT by AMOUNT', ()=>{
	const result = selectExpenses(
		testData,
		{
			text: undefined,
			sortBy: 'amount',
			startDate: undefined,
			endDate: undefined
		}
	);
	expect(result).toEqual([
		testData[1],
		testData[0],
		testData[7],
		testData[6],
		testData[5],
		testData[4],
		testData[3],
		testData[2],
	]);
});