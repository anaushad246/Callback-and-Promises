function greet(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject("Name is required");
        } else {
            const greetingMessage = `Hello, ${name}!`;
            resolve(greetingMessage);
        }
    });
}


greet("Mithun")
    .then((greeting) => console.log(greeting))
    .catch((error) => console.error(error));
