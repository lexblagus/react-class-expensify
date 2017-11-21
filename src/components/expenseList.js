import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
	<div className="container">
		<h3 className="title is-3">
			List
			<span className="title is-4">
				{' '}
				with
				{' '}
				{props.expenses.length}
				{' '}
				item{props.expenses.length>1?'s':''}
			</span>
		</h3>
		{
			props.expenses.length === 0 ? (
				<div className="notification is-warning">
					nothing right now
				</div>
			) : (
				props.expenses.map(
					(expense) => (
						<ExpenseListItem key={expense.id} {...expense} />
					)
				)
			)
		}
	</div>
);

const mapStateToProps = (state) => ({
	expenses: selectExpenses(state.expenses,state.filters)
});


export default connect(mapStateToProps)(ExpenseList);
