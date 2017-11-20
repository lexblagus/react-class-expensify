const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;


test('should add two numbers', ()=>{
	const result = add(1,2);
	const expected = 3;
	expect(result).toBe(expected);
});


test('should create default greeting', ()=>{
	const result = generateGreeting();
	const expected = 'Hello Anonymous';
	expect(result).toBe(expected);
});

test('should create greeting with name', ()=>{
	const result = generateGreeting('Nham');
	const expected = 'Hello Nham';
	expect(result).toBe(expected);
});

