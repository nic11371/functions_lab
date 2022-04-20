"use strict";

const fs = require('fs');

const printLine = (fileName, lineNumber) => {
	const content = fs.readFileSync(fileName).toString();
	const lines = content.split('\n');
	const line = lines[lineNumber - 1];
	if(line === undefined) return false;
	console.dir({
		fileName, lineNumber, line
	});
}
printLine('./12-comments.js', 5)