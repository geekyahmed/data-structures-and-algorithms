//Creates a 2d array using the arguments; num of rows, nums of cols and value
Array.matrix = function (numrows, numcols, initial) {
    let arr = []
    for (let i = 0; i < numrows; i++) {
        let cols = [];

        for (let j = 0; j < numcols; j++) {
            cols[j] = initial
        }
        arr[i] = cols
    }
    return arr
}

let nums = Array.matrix(5, 5, 9)
let names = Array.matrix(4, 6, "")

names[2][2] = 'Matt'
names[1][4] = 'Windy'

console.log(nums)

console.log(names)