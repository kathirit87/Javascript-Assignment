/* Write a Program to Flatten a given n-dimensional array */

const flatten = (testObj) => {
	//var testObj = [1, [2, 3], [[4, 5], [6, 7]], [[[8, 9], 10]]];

	var flattened = testObj.reduce(
		(a, b) => a.concat(Array.isArray(b) ?  flatten(b) : b ), 
		[]
	);
	


function flatten(b) {
	return b.reduce(
	(b, c) => b.concat(Array.isArray(c) ?  flatten(c) : c ), 
	[]
);
}
	console.log(JSON.stringify(flattened));
	
	
};

	 
/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
