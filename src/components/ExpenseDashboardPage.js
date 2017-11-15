import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';


const ExpenseDashboardPage = () => (
	<div>
		<section className="section">
			<div className="container">
				<h1 className="title is-1">View</h1>
				<div className="card">
					<div className="card-content">
						<ExpenseListFilters />
						<ExpenseList />
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default ExpenseDashboardPage;
