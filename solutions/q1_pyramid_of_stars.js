/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (rows) => {
	//var rows = 6; 
    for (var i = 1; i <= rows; i++) {
        for (var k = 1; k <= (rows - i); k++) {
            document.write("&nbsp;");
        }
        for (var j = 1; j <= i; j++) {
            document.write("* ");
        }
        document.write("<br/>");
    }
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
