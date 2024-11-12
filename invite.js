window.onload = function () {
    console.log("Hello, World!");

    fetch('https://api.example.com/data')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON data from the response
        })
        .then(data => {
            console.log(data); // Handle the data from the response
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
};