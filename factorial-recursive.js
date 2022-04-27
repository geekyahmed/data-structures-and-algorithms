//Function to get factorial of n using recursion

function getFactorialByResursion(n) {
    if (n === 1)
        return n
    else
        return n * getFactorialByResursion(n - 1)
}
console.log(getFactorialByResursion(4))
