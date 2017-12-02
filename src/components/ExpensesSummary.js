import React from 'react';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import { connect } from 'react-redux';

const ExpensesSummary = (props) => (
	<div>
		<h3 className="title is-3">
			List
			<span className="title is-4">
				{' '}
				with
				{' '}
				{props.qtt}
				{' '}
				item{props.qtt>1?'s':''}
				{' '}
				$ {props.tot}
			</span>
		</h3>
	</div>
);

const mapStateToProps = (state) => ({
		'tot': expensesTotal(selectExpenses(state.expenses,state.filters)),
		'qtt': selectExpenses(state.expenses,state.filters).length
});

//export default ExpensesSummary;
export default connect(mapStateToProps)(ExpensesSummary);
