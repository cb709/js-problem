/*
Problem: Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/


// method 1
// function digitize(n) {
//   let numberString = n.toString();
//   let result = [];
//   for (let i = numberString.length - 1; i >= 0; i--) {
//     result.push(parseInt(numberString[i]));
//   }
//   return result;
// }


//method 2
function digitize(n) {
    return String(n).split('').reverse().map(element => Number(element))
}


console.log(digitize(35231));

