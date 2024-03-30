document.getElementById('title').addEventListener('input', function (event) {
    var pattern = /^[a-zA-Z -]{7,}$/;
    if (!pattern.test(this.value)) {
        this.setCustomValidity('Please enter at least five characters with alphabets, hyphens, and spaces only.');
    } else {
        this.setCustomValidity('');
    }
});

document.getElementById('email').addEventListener('input', function (event) {
    var pattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    if (!pattern.test(this.value)) {
        this.setCustomValidity('Please enter a valid email address.');
    } else {
        this.setCustomValidity('');
    }
});