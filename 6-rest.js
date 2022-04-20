"use strict";

const f1 = (...rest) => {
	console.log(rest);
}

f1(1, 2, 3);

const f2 = (...args) => {
	args.forEach(arg => {
		const type = typeof arg;
		console.log("Type: " + type);
		if (type === 'object') {
			console.log("Value: " + JSON.stringify(arg))
		} else {
			console.log("Value: " + arg)
		}
	})
}

f2(1, "Nick", {field: 1 })