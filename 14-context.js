'use strict';

const hash = () => {
	const data = {};
	let count = 0;
	return (key, value) => {
		data[key] = value;
		count++;
		console.log({count});
		return data;
	}
}

const f1 = hash();
f1("name", "Nick");
f1('city', "Tula");

const obj1 = f1('born', 31);
console.dir({obj1});
