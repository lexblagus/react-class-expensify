import React from 'react';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import ExpenseList from './ExpenseList';


const ExpenseDashboardPage = () => (
	<div>
		<section className="section">
			<div className="container">
				<h2 className="title is-2">View</h2>
				<div className="card">
					<div className="card-content">
						<ExpenseListFilters />
						<ExpensesSummary />
						<ExpenseList />
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default ExpenseDashboardPage;
