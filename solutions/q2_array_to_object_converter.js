/* Write a Program to convert an array of objects to an object
	based on a given key */

  // Speed up calls to hasOwnProperty
let hasOwnProperty = Object.prototype.hasOwnProperty;

function isEmpty(obj) {
    // null and undefined are "empty"
    if (obj === null) { return true; }

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) { return false; }
    if (obj.length === 0) { return true; }

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== 'object') { return true; }

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (let key in obj) {
        if (hasOwnProperty.call(obj, key)) {return false; }
    }

    return true;
}


	const convert = (array) =>{
		let retObj = (Array.isArray(array) ? array : []).reduce((obj, item) => {
			obj[item.role] = item;
			return obj;
        }, {});
        if (isEmpty(retObj)) {
            return null;
        }
        return retObj;
	};
/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
