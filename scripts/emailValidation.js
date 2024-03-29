const pw1 = document.querySelector("#pass1");
const pw2 = document.querySelector("#pass2");
const message = document.querySelector("#alertMessage");

pw2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
    if (pw1.value !== pw2.value) {
        message.textContent = "❗Passwords DO NOT MATCH!";
        message.style.visibility = "show";
        pw2.style.backgroundColor = "#fff0f3";
        pw2.value = "";
        pw2.focus();
    } else {
        message.style.display = "none";
        pw2.style.backgroundColor = "#fff";
        pw2.style.color = "#000";
    }
}