/* Write a program to build a `Pyramid of stars` of given height */

const pyramid = (rows) => {
    //var rows = 6; 
    let pyramidVal="";
    for (var i = 1; i <= rows; i++) {
        for (var k = 1; k <= (rows - i); k++) {
            pyramidVal=+"  ";
        }
        for (var j = 1; j <= i; j++) {
            pyramidVal=+"* ";
        }
        pyramidVal=+" \n";
    }
     return pyramidVal;
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

module.exports = pyramid;
