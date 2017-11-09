import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';


const ExpenseListFilters = (props) => (
	<div>
		<input
			type="text"
			value={props.filters.text}
			onChange={(e) => {
				props.dispatch(setTextFilter(e.target.value));
			}}
			
		/>
		<select
			value={props.filters.sortBy}
			onChange={(evt) => {
				if(evt.target.value === 'date'){
					props.dispatch(sortByDate());
				} else if(evt.target.value === 'amount'){
					props.dispatch(sortByAmount());
				}
			}}
		>
			<option value="amount">Amount</option>
			<option value="date">Date</option>
		</select>
	</div>
);

const mapStateToProps = (state) => ({
	filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
