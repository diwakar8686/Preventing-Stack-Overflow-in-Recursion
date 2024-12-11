function factorial(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        console.log("Invalid input");
        return null;
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));  
console.log(factorial(0));  
console.log(factorial(-5));  
console.log(factorial("string"));  
console.log(factorial(5.5));  
 