//Function to get all the sum of numbers in an array given as n
function getSumOfNumbers(n) {
    let sum = 0;

    for (let i = 0; i < n.length; i++) {
        sum += n[i]
    }

    return sum
}

console.log(getSumOfNumbers([40, 20, 15, 15, 10]))