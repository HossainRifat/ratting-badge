window.onload = function () {
    console.log("Hello, World!");

    fetch('http://ratingfacts.test/api/get-badge')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            //prinrt response to console
            console.log(response);
        })
        .then(data => {
            console.log(data); // Handle the data from the response
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
};