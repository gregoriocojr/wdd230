function closeBanner() {
    var banner = document.querySelector(".banner");
    banner.style.display = "none";
}

// Check if it's Monday, Tuesday, or Wednesday
var today = new Date().getDay();
if (today >= 1 && today <= 3) {
    var banner = document.querySelector(".banner");
    banner.style.display = "block";
}
