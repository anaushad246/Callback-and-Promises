function manipulateString(inputString) {
    const manipulatedString = inputString.toUpperCase();

    return function logString() {
        console.log(`The manipulated string is: ${manipulatedString}`);
    };
}


const logManipulatedString = manipulateString("hello world");
logManipulatedString();
