import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
	<div>
		<h1>
			List
			{' '}
			{props.expenses.length}
			{' '}
			item{props.expenses.length>1?'s':''}
		</h1>
		{
			props.expenses.map(
				(expense) => (
					<ExpenseListItem key={expense.id} {...expense} />
				)
			)
		}
	</div>
);

const mapStateToProps = (state) => ({
	expenses: selectExpenses(state.expenses,state.filters)
});


export default connect(mapStateToProps)(ExpenseList);
