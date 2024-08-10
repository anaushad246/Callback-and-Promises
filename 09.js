// Fetch data from the API
fetch('https://jsonplaceholder.typicode.com/posts/123456789')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => {
        console.error('Error fetching data:', error);
        document.body.innerHTML = `<h1>Error</h1><p>${error.message}</p>`;
    });