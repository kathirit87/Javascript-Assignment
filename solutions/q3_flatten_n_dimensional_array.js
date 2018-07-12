/* Write a Program to Flatten a given n-dimensional array */

const flatten = (testObj) => {
	function flattenDeep(currVal) {
		return currVal.reduce((b, c) => b.concat(Array.isArray(c) ? flattenDeep(c) : c), []);
	}
	let flattened = (Array.isArray(testObj) ? testObj : []).reduce(
		(acc, curr) => acc.concat(Array.isArray(curr) ? flattenDeep(curr) : curr), []);
	if(flattened.length === 0) {
		return null;
	}
	return flattened;
	};
/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
