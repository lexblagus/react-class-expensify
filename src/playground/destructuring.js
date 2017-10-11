// Object destructuring

/*
const person = {
	name : 'Lex',
	age: 39,
	location: {
		city: 'São Paulo',
		temp: 27
	}
};

const {
	name: n = 'Anonymous', 
	age: a = 0, 
	location: l
} = person;

console.log(
	`${n} is ${a}`
);


//const  = person.location;

console.log(
	`In ${l.city} is ${l.temp}`
);

//console.log(`In ${l.c} is ${l.t}`);
//console.log(`In ${c} is ${t}`);
*/




// Array destructuring

const address = [
	'casa 2',
	207,
	'Pedro de Sousa Campos Filho',
	//'Vila Madalena',
	//'São Paulo',
	//'SP',
	//'Brazil'
];

/*
const [
	compl,
	num,
	logradouro,
	nb,
	city,
	state,
	country
] = address;
*/

const [,,,nb='NoPlace',city='Nowhere',state='None'] = address;

console.log(`You are at ${nb} in ${state}.`);