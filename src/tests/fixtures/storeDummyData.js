import moment from 'moment';

export default [
	{ // 0
		id: '2da95af6-3181-4902-a9fd-ec52eff5203c',
		description: '1 water bill',
		notes: '',
		amount: 10000,
		createdAt: moment().add(-3, 'days')
	},
	{ // 1
		id: 'c9b3ec51-3b1b-40a3-904f-76ef27f79c80',
		description: '2 gas bill',
		notes: 'gas gas gas gas gas',
		amount: 109500,
		createdAt: moment().add(-2, 'days')
	},
	{ // 2
		id: 'e53d429d-0312-4dd3-aa8c-ed55d2229ae6',
		description: '3 rent',
		notes: 'rent rent rent rent ',
		amount: 0,
		createdAt: moment().add(-1, 'day')
	},
	{ // 3
		id: '5d94f325-5387-4406-9c42-45f250350180',
		description: 'Description A',
		notes: 'notes notes notes 1 ',
		amount: 100,
		createdAt: moment()
	},
	{ // 4
		id: 'adb329fa-d15a-4605-8e09-44f544a69230',
		description: 'Description B',
		notes: 'notes notes notes 2',
		amount: 200,
		createdAt: moment().add(1, 'day')
	},
	{ // 5
		id: '09afc748-8363-4a58-a16c-62bf952622fb',
		description: 'Description C',
		notes: 'notes notes notes 3',
		amount: 300,
		createdAt: moment().add(2, 'days')
	},
	{ // 6
		id: 'cea054a4-243d-42d3-a11c-dacd957df150',
		description: 'Description D',
		notes: 'notes notes notes 4',
		amount: 400,
		createdAt: moment().add(3, 'days')
	},
	{ // 7
		id: '1d42f8e6-0cc4-402f-a5cf-6ebf33d845f9',
		description: 'Description E',
		notes: 'notes notes notes 5',
		amount: 500,
		createdAt: moment().add(4, 'days')
	}
];
