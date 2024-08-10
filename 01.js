function doubleNumbers(numbers, callback) {
    const doubledNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        const doubledNumber = callback(numbers[i]);
        doubledNumbers.push(doubledNumber);
    }

    return doubledNumbers;
}

// Define the callback function
function doubleNumber(number) {
    return number * 2;
}


const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(numbers, doubleNumber);

console.log(doubledNumbers); 