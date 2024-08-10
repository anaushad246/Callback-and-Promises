function logTitlesInAlphabeticalOrder(titles) {
    titles.sort();
    titles.forEach(title => console.log(title));
}

function arrangeBookTitlesInAlphabeticalOrder(books, callback) {
    const bookTitles = books.map(book => book.title);
    callback(bookTitles);
}

// Example usage:
const books = [
    { title: 'Book C', author: 'Author C', year: 2020 },
    { title: 'Book A', author: 'Author A', year: 2018 },
    { title: 'Book B', author: 'Author B', year: 2019 }
];

arrangeBookTitlesInAlphabeticalOrder(books, logTitlesInAlphabeticalOrder);
