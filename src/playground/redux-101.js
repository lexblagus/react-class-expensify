import { createStore } from 'redux';




const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const setCount = ({ count } = {}) => ({
	type: 'SET',
	count
});

const resetCount = () => ({
	type: 'RESET'
});




const countReducer = (
	state = {count: 0},
	action
) => {
	console.log('run');
	switch (action.type){
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			};
		case 'RESET':
			return {
				count: 0
			};
		case 'SET':
			return action.count ? {
				count: action.count
			} : state;
		default: 
			return state;
	}
};



const store = createStore( countReducer );




const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});




store.dispatch(
	incrementCount({ incrementBy: 5 })
); // 5

store.dispatch(
	incrementCount()
); // 6

//store.dispatch({ type: 'RESET' });
store.dispatch(
	resetCount()
);
// 0

store.dispatch(
	decrementCount()
); // -1

store.dispatch(
	decrementCount({ decrementBy: 10 })
); // -11

store.dispatch({
	type: 'SET'
}); // 11

store.dispatch(
	setCount({
		type: 'SET',
		count: 101
	})
); // 101

store.dispatch(
	setCount({
		type: 'SET'
	})
); // 101

store.dispatch({ type: 'RESET' });
// 0
