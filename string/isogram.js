// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)



// const checkIsogram = (string) => {
//     // return string.toUpperCase().split('').filter((element, index, array) => array.indexOf(element) != index).length == 0 ? true : false
//     let duplicates = 0;
//     let value = string.toUpperCase().split('').filter((element, index, array) => array.indexOf(element) != index).map((item,index, array) => {if (array.indexOf(item) == index){
//         duplicates++;
//     }} );
//     return duplicates;
// }

// const checkIsogram = (string) => {
//     return string.toUpperCase().split('').filter((element, index, array) => array.indexOf(element) != index).length == 0 ? true : false
// }


function checkIsogram (string) {
    const array = string.toUpperCase().split('');
    let duplicates = []
    for(let i = 0; i < array.length; i++) {
        if(array.indexOf(array[i]) != array.lastIndexOf(array[i]))
        if(!duplicates.includes(array[i])){
            duplicates.push(array[i])
        }
    }
    return duplicates.length;
}

// checkIsogram('mdddoOsseeffffea');
console.log(checkIsogram('Dermatoglyphics'))
console.log(checkIsogram('aba'))
console.log(checkIsogram('mdddoOsseeffffea'))

