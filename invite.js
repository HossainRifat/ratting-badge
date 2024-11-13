window.onload = function () {
    const div = document.getElementById("ratingfacts-badge");
    const inviteToken = div.getAttribute("data-invite-token");
    console.log(inviteToken);

    fetch('http://ratingfacts.test/api/get-badge/' + inviteToken)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ratingfacts - Network response was not ok');
            }
            return response.json();

        })
        .then(data => {
            div.innerHTML = data.data;
        })
        .catch(error => {
            console.error('Ratingfacts - There was a problem with the fetch operation:', error);
        });
};