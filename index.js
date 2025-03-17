const image = document.getElementById("clickableImage");
const panel = document.getElementById("leftPanel");
const closeButton = document.getElementById("closePanel");

image.addEventListener("click", () => {
    panel.classList.add("active"); // open
});

closeButton.addEventListener("click", () => {
    panel.classList.remove("active"); // close
});