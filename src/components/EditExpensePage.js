import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
	return (
		<div>
			<section className="section">
				<div className="container">
					{
						props.expense &&
						<div>
							<h2 className="title is-2">
								Edit
								<span className="title is-4">
									&nbsp;
									{props.expense.id}
								</span>
							</h2>
							<div className="card">
								<div className="card-content">
									<ExpenseForm
										expense={props.expense}
										onSubmit={
											(expense)=>{
												console.log('updated expense',expense);
												props.dispatch(
													editExpense(
														props.expense.id,
														{...expense}
													)
												);
												props.history.push('/');
											}
										}
									/>
									<button
										className="button is-small is-danger"
										onClick = {() => {
											props.dispatch(
												removeExpense(
													{id: props.expense.id}
												)
											);
											props.history.push('/');
										}}
									>Delete</button>
								</div>
							</div>
						</div>
					}
					{
						!props.expense &&
						<div>
							<h2 className="title is-2">
								Item not found
							</h2>
						</div>
					}
				</div>
			</section>
		</div>
	);
}

const mapStateToProps = (state, props) => ({
	expense: state.expenses.find(
		(expense) => (expense.id === props.match.params.id)
	)
});

export default connect( mapStateToProps )( EditExpensePage );
