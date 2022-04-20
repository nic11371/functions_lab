'use strict';

const hash = () => {
	const data = {};
	Object.defineProperty(data, 'add', {
		enumerable: false,
		value(key, value) {
			data[key] = value;
			return data;
		}
	});
	return data;
}

console.dir(hash()
.add('name', 'Nick')
.add('city', 'Tula')
.add('born', 30))