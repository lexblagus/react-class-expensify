export default (expenses) => (
	expenses.reduce(
		(acc, itm) => (
			acc + itm.amount
		), 0
	)
);