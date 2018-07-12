/*   Write a program to build a `Pyramid of stars` of given height */
const buildPyramid = (param) => {
    let stars = '';
    for(let ikey = 0; ikey < param; ikey = ikey + 1) {
         let output = '';
         for(let jkey = 0; jkey < param - ikey; jkey = jkey + 1) {
             output = output + ' ';
         }
         for(let kKey = 0; kKey <= ikey; kKey = kKey + 1) {
            output = output + '* ';
         }
          output = output + ' \n';
          stars = stars + output;
     }
     return stars;
};
/*   For example,
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
