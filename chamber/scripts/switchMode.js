const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
let originalStyles = {};

// Store the original styles
main.querySelectorAll("*").forEach(element => {
    originalStyles[element.tagName] = {
        background: getComputedStyle(element).background,
        color: getComputedStyle(element).color
    };
});

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("Switch to Dark Mode 🕶️")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "Switch to Light Mode 🔆";
        main.querySelectorAll("h1").forEach(element => {
            element.style.color = "#fff";
        });
        main.querySelectorAll(".container").forEach(element => {
            element.style.background = "#333";
            element.style.color = "#fff";
        });
        main.querySelectorAll(".card").forEach(element => {
            element.style.background = "#444";
            element.style.color = "#fff";
        });
        main.querySelectorAll("p, a, ul, li").forEach(element => {
            element.style.color = "#fff";
        });
        main.querySelectorAll(".activities li ul li:not(:last-child)").forEach(element => {
            element.classList.add("dark-mode");
        });

    } else {
        // Revert back to original styles
        main.style.background = "";
        main.style.color = "";
        modeButton.textContent = "Switch to Dark Mode 🕶️";
        main.querySelectorAll("*").forEach(element => {
            element.style.background = originalStyles[element.tagName].background;
            element.style.color = originalStyles[element.tagName].color;
        });
    }
});
