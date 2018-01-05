import uuid from 'uuid';
import db from '../firebase/firebase.js';



export const setExpenses = (expenses) => ({
	type: 'SET_EXPENSES',
	expenses
});

export const startSetExpenses = () => { // load expenses from database
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return db.ref(`users/${uid}/expenses`).once('value').then((snapshot)=>{
			const expenses = [];
			snapshot.forEach((childSnapshot) => {
				expenses.push({
					id: childSnapshot.key,
					...childSnapshot.val()
				});
			})
			dispatch(
				setExpenses(expenses)
			);
		});
	};
};




export const addExpense = (expense) => ({
	type: 'ADD_EXPENSE',
	expense
});

export const startAddExpense = (expenseData = {}) => {
	return (dispatch, getState) => {
		const {
			description = '',
			notes = '',
			amount = 0,
			createdAt = 0
		} = expenseData;
		
		const expense = {description, notes, amount, createdAt};
		const uid = getState().auth.uid;
		return db.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
			dispatch(addExpense({
				id: ref.key,
				...expense
			}))
		});
	};
};




export const removeExpense = ({
	id = ''
} = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

export const startRemoveExpense = ({id=''}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return db.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
			console.log('…response from server');
			dispatch(removeExpense({id}));
		}).catch((err)=>{
			console.log('…error in server:', err);
		});
	};
};




export const editExpense = (
	id,
	updates
) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

export const startEditExpense = (
	id,
	updates
) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return db.ref(`users/${uid}/expenses/${id}`).update(
			updates
		).then(()=>{
			console.log('…response from server');
			dispatch(editExpense(id,updates));
		}).catch((err)=>{
			console.log('…error in server:', err);
		})
	}
}

