import React from 'react';

const ExpenseListItem = ({description, amount, createdAt}) => (
	<div>
		<h2>{description}</h2>
		amount = {amount},
		createdAt = {createdAt}
	</div>
);

export default ExpenseListItem;
