/* Write a Program to Flatten a given n-dimensional array */

const flatten = (testObj) => {
	
	var flattened = (Array.isArray(testObj) ? testObj : []).reduce(
		(a, b) => a.concat(Array.isArray(b) ?  flatten(b) : b ), 
		[]
	);


	function flatten(b) {
		return b.reduce(
			(b, c) => b.concat(Array.isArray(c) ?  flatten(c) : c ), 
			[]
		);
	}
	
	if(flattened.length >0){
		return flattened;
	}else {
		return null;
	}
};

	 
/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
