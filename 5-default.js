"use strict";

const fnNew = (a, b = "Hello", c = 5) => {
	return console.dir(({a, b, c}))
}

fnNew(1, 2, 3);
fnNew(1, "Hi");
fnNew();

const fnOld = (a, b, c) => {
	b = b || "Hello",
	c = c || 5
	return console.dir({ a, b, c})
}

fnOld(1, 2, 3);
fnOld(1, "Hi");
fnOld();

const fnHash = (args) => {
	args.a = args.a || [7, 25, 10];
	args.b = args.b || "Hello";
	args.c = args.c || 100;
	console.dir(args)
}

fnHash({a: [1, 2, 3], b: "Hi", c: 5})
fnHash({b: "Hi", c: 5})
fnHash({c: 7})