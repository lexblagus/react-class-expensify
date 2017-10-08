import React from 'react';

const EditExpensePage = (props) => {
	console.log(props);
	return (
		<div>
			This is EditExpensePage for id <b>{props.match.params.id}</b>
		</div>
	);
}

export default EditExpensePage;
