/** Perform an operation on each element of an array and return true if all the elements pass the condition and false if otherwise 
    It takes a function as the argument
**/

//Checks all the numbers in n and output true if all the numbers in n are even
function isEven(n) {
    return n % 2 === 0
}

let n = [2, 4, 6, 8, 10, 12]

let even = n.every(isEven)

if (even)
    console.log('All numbers are even')
else
    console.log('Not all numbers are even')
