/** Perform an operation on each element of an array and return a new array
    It takes a function as the argument
**/

//Add 5 to each grades n
function add(n) {
    return n += 5
}

//Get the first letter of a string
function get(word){
    return word[0]
}

let n = [2, 4, 6, 8, 10, 12]
let words = ['as', 'soon', 'as', 'possible']

let newGrades = n.map(add)
let acronym = words.map(get)

console.log(newGrades)

console.log(acronym.join(''))