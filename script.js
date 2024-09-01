//JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not 

function checkPrime(arr) {
    if(arr.length === 0){
        return "Array is empty";
    }
    const num = arr[0];
    if(num <= 1){
        return `${num} is not a prime number`;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return `${num} is not a prime number`;
        }
    }
    return `${num} is a prime number`;

}
//Find repeated element from an array.

function mostFrequentElement(arr) {
    if (arr.length === 0) return null;

    arr.sort((a, b) => a - b); 
    let count = 1; 
    let maxCount = 1;
    let mostFrequent = arr[0];

    let currentCount = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentCount++;
        } else {
            currentCount = 1;
        }

        if (currentCount > maxCount) {
            maxCount = currentCount;
            mostFrequent = arr[i];
        }
    }

    return mostFrequent;
}

// A for loop which iterates from 0 to 15, for each iteration it checks whether a number is odd or even.
function checkOddEven(i=0){
    
for(i; i <=15; i++){
    if(i % 2 === 0){
        console.log( i + ' is even number');
    }
    else if(i % 2 === 1){
        console.log( i + ' is odd number');
    }
}

}
//Write a JavaScript program to find the sum of squares of the elements of an array.
function sumOfSquares(arr) {
    let sum = 0;
    for(i = 0; i < arr.length; i++){
        sum += arr[i] * arr[i];
    }
    return `Sum of squares of the elements of an array is ${sum}`;
}