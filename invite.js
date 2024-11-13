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

            const gap = 16;

            const carousel = document.getElementById("carousel"),
                content = document.getElementById("content"),
                next = document.getElementById("next"),
                prev = document.getElementById("prev");

            next.addEventListener("click", e => {
                carousel.scrollBy(width + gap, 0);
                if (carousel.scrollWidth !== 0) {
                    prev.style.display = "flex";
                }
                if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                    next.style.display = "none";
                }
            });
            prev.addEventListener("click", e => {
                carousel.scrollBy(-(width + gap), 0);
                if (carousel.scrollLeft - width - gap <= 0) {
                    prev.style.display = "none";
                }
                if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                    next.style.display = "flex";
                }
            });

            let width = carousel.offsetWidth;
            window.addEventListener("resize", e => (width = carousel.offsetWidth));

            function applyResponsiveStyles() {
                const container = document.getElementsByClassName("review-container")[0];
                const wrapper = document.getElementById("wrapper");
                if (window.innerWidth <= 880) {
                    container.style.flexDirection = "column";
                    wrapper.style.width = "100%";
                } else {
                    container.style.flexDirection = "row";
                    wrapper.style.width = "80%";
                }
            }

            // Apply the responsive styles on load and resize
            window.addEventListener("load", applyResponsiveStyles);
            window.addEventListener("resize", applyResponsiveStyles);
        })
        .catch(error => {
            console.error('Ratingfacts - There was a problem with the fetch operation:', error);
        });


};