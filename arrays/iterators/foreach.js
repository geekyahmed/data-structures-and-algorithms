/** Perform an operation on each element of an array
    It takes a function as the argument
**/

//Gets the squares of each value of n
function square(n) {
    console.log(n + ':' + n * n)
}

let n = [5, 7, 6, 23, 9, 8]

n.forEach(square)
