import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { removeExpense } from '../actions/expenses';


const ExpenseListItem = ({dispatch, id, description, notes, amount, createdAt}) => (
	<div className="card">
		<div className="card-content">
			<div className="columns is-mobile">
				<div className="column" title={createdAt}>
					{ moment(createdAt).format('DD-MM-YYYY') }
				</div>
				<div className="column">
					<b>
						{description}
					</b>
					{notes !== '' ? <br /> : ''}
					<i>
						<Link to={`/edit/${id}`} >
							{notes}
						</Link>
					</i>
					<br />
					<small>
						(
							<a
								href="javascript:;"
								className="___button ___is-small is-danger"
								onClick = {() => {
									dispatch(removeExpense({id}));
								}}
								aria-label="remove"
							>delete</a>
						)
					</small>
				</div>
				<div className="column">
					<b>$ {amount / 100}</b>
				</div>
			</div>
		</div>
	</div>
);

export default connect()(ExpenseListItem);
