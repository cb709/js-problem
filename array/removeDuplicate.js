// Problem: Remove Duplicate form an array

//With out using array methods

const testArray = [2,3,4,5,6,3,3,4,5,6,7]

function removeDuplicate(testArray) {
    let n = testArray.length;
    for( let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            if(testArray[i] == testArray[j]){
                for(let k = j; k < n -1; k++ ){
                    testArray[k] = testArray[k+1]
                }
                n--;
                j--;
            }
        }
    }
    testArray.length = n;
}
removeDuplicate(testArray)
console.log(testArray)




// Crating a new array 
const array = [1, 2, 3, 4, 5, 7, 2, 5, 6];
let result = []
for (let i = 0; i < array.length; i++) {
    if(result.indexOf(array[i]) < 0 ){
        result.push(array[i])
    }
}
// console.log(result)

// Using splice
//Changing the original array
const newArray = [1,2,3,4,1,2,3,5,6,7]

for( let i = 0; i < newArray.length ; i++) {
    let foundNumber = newArray.indexOf(newArray[i],i+1)
    if(foundNumber >= 0) {
        newArray.splice(foundNumber,1)
    }
}
// console.log(newArray)



