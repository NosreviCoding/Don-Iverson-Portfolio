const image = document.getElementById("clickableImage");
const panel = document.getElementById("leftPanel");
const closeButton = document.getElementById("closePanel");

if (image && panel && closeButton) {
    image.addEventListener("click", () => {
        panel.classList.add("active");
    });

    closeButton.addEventListener("click", () => {
        panel.classList.remove("active");
    });
}

// fades when scrolled
document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll-fade-in");

    const elementInView = (el, offset = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= (window.innerHeight - offset);
    };

    const displayScrollElement = (el) => {
        el.classList.add("visible");
    };

    const hideScrollElement = (el) => {
        el.classList.remove("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el); // hide when out of view
            }
        });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation(); 
});
