"use strict";

(function f1() {
	console.log("f1")
})();

(function() {
	console.log("anonymous");
})();

(() => {
	console.log("lambda")
})();

{
	console.log("block");
}