/** Perform an operation on each element of an array and returns a single value after accumulating the succesive elements to the end of the array
    It takes a function as the argument
**/

//Adds up all the numbers in n
function add(total, value) {
    return total + value
}

//Join strings in an array
function concat(strings, item) {
    return strings + item
}

let n = [2, 4, 6, 8, 10, 12]

let words = ['this', 'is', 'a', 'book']

let totalVal = n.reduce(add)

let combinedSentence = words.reduce(concat)

//Reduce word array from right to left
let rtlSentence = words.reduceRight(concat)

console.log(totalVal)

console.log(combinedSentence)

console.log(rtlSentence)