/* Write a program to build a `Pyramid of stars` of given height */
const buildPyramid = (param) => {
    var stars ="";
    for(var i=0;i<param;i++) {
         var output="";
         for(var j=0;j<param-i;j++) {
             output+=" ";            
         }
         for(var k=0;k<=i;k++) {            
            output += "* ";
         }
          output += " \n";
          stars +=output;         
     }
     return stars;
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