/* Write a Program to convert an array of objects to an object
	based on a given key */


	const convert = (array) => 
		(Array.isArray(array) ? array : []).reduce((obj, item) => {
			obj[item.role] = item
			return obj
		  }, {});

	
/* 	function objArray(array){
		(Array.isArray(array) ? array : []).reduce((obj, item) => {
			obj[item.role] = item
			return obj
		  }, {});
	 }  */
//console.log(JSON.stringify(peopleObject));
/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;