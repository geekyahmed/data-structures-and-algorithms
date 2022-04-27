/** Perform an operation on each element of an array and return true if one or more of the elements pass the condition
    It takes a function as the argument
**/

//Checks all the numbers in n and output true if some of the numbers in n are even
function isEven(n) {
    return n % 2 === 0
}

let n = [2, 4, 6, 8, 10, 12, 20, 22, 17]

let someEven = n.some(isEven)

if (someEven)
    console.log('Some numbers are even')
else
    console.log('Not all numbers are even')
