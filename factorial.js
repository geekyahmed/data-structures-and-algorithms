//Function to get the factorial of a given number n

function getFactorial(n){
    let product = 1;

    for(let i = n; i >= 1; i--){
        product *= i
    }

    return product
}

console.log(getFactorial(4))