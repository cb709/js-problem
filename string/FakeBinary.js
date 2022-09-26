
let str = '1234567'
const fakeBin = (str) => str.split('').map(e => e < 5 ? '0':'1').join('')

let array = [1,2,3,5,0]

let result = array.map(e => e < 5 ? 0:1)
// console.log(str.split('').map(e => e < 5 ? '0':'1').join(''))

console.log(result)