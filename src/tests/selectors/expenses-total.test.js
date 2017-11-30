import selectExpensesTotal from '../../selectors/expenses-total';
import testData from '../fixtures/dummyStore02.js';

//console.log(  selectExpensesTotal(testData)  );

test('Should return zero for no expenses', ()=>{
	const result = selectExpensesTotal( [] );
	expect(result).toEqual( 0 );
});

test('Should return one expense', ()=>{
	const result = selectExpensesTotal( [ testData[0] ] );
	expect(result).toEqual( 195 );
});

test('Should return sum of expenses', ()=>{
	const result = selectExpensesTotal( testData );
	expect(result).toEqual( 114195 );
});
