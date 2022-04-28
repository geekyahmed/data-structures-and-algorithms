/** Perform an operation on each element of an array and returns an array that matches the boolean function
    It takes a function as the argument
**/

//Checks the numbers in n are even
function isEven(n) {
    return n % 2 === 0
}

//Checks the numbers in n are even
function isOdd(n) {
    return n % 2 !== 0
}

let n = [2, 4, 6, 8, 10, 12, 7, 9, 13, 75]

let evens = n.filter(isEven)

let odd = n.filter(isOdd)

console.log('All even number: ' + evens)

console.log('All odd number: ' + odd)