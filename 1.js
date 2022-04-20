'use strict'
//declaration
function inc(a) {
	return a + 1;
}
//expression
const sum = function(a, b) {
	return a + b;
};
//lyambda expression
const max = (a, b) => (a > b ? a : b);

//lyambda 
const avg = (a, b) => {
	const s = sum(a, b);
	return s / 2;
};

console.log('inc(5) = ' + inc(5));
console.log('sum(1, 3) = ' + sum(1, 3));
console.log('max(8, 6) = ' + max(8, 6));
console.log('avg(8, 6) = ' + avg(8, 6))