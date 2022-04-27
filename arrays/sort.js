//Sorts elements of an array lexicograpgically

let nums = [6, 5, 4, 3, 23, 32]

nums.sort()

//Sort number by checking negative and positive value
function sortNumbers(n1, n2) {
    return n1 - n2
}

console.log(nums)

console.log(nums.sort(sortNumbers))