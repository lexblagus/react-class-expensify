import React from 'react';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import { connect } from 'react-redux';

export const ExpensesSummary = ({qtt,tot}) => (
	<div>
		<h3 className="title is-3">
			List
			<span className="title is-4">
				{' '}
				with
				{' '}
				{qtt}
				{' '}
				item{qtt>1?'s':''}
				{' '}
				$ {tot}
			</span>
		</h3>
	</div>
);

const mapStateToProps = (state) => ({
		'tot': expensesTotal(selectExpenses(state.expenses,state.filters)),
		'qtt': selectExpenses(state.expenses,state.filters).length
});


export default connect(mapStateToProps)(ExpensesSummary);

//export default ExpensesSummary;