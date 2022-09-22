/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, undefined, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
For input [], you should return [].
*/

const countPositivesSumNegatives = (input) => {

    if( !input || input.length == 0) {
        return []
    } else {
        let positiveCount = 0;
        let negativeSum = 0;
        input.map((element)=> {
            if(element > 0) {
                positiveCount++;
            }
            else if (element < 0) {
                negativeSum = negativeSum + element;
            }
        })
        return [positiveCount, negativeSum]
    }
}

let result1 = countPositivesSumNegatives(null)

// console.log(result1)

//2nd method

function countPositivesSumNegativesV2 (input) {
    return (input && input.length ) ? [ input.filter( p => p > 0).length , input.filter( p => p < 0).reduce( (a,b) => a + b , 0) ] : []
}

let result2 = countPositivesSumNegativesV2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])

console.log(result2)