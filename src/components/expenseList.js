import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
	<div className="container">
		<h2 className="title is-2">
			List
			<span className="title is-4">
				{' '}
				with
				{' '}
				{props.expenses.length}
				{' '}
				item{props.expenses.length>1?'s':''}
			</span>
		</h2>
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
