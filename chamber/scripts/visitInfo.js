// document.addEventListener('DOMContentLoaded', function () {
//     var currentDate = new Date().getTime();

//     if (localStorage.getItem('lastVisitDate')) {
//         var lastVisitDate = localStorage.getItem('lastVisitDate');
//         lastVisitDate = parseInt(lastVisitDate);

//         var timeDifference = currentDate - lastVisitDate;
//         var oneDay = 1000 * 60 * 60 * 24;
//         var daysDifference = Math.floor(timeDifference / oneDay);

//         localStorage.setItem('lastVisitDate', currentDate);

//         if (daysDifference === 0) {
//             document.getElementById('message').innerText = "Back so soon! Awesome!";
//         } else if (daysDifference === 1) {
//             document.getElementById('message').innerText = "You last visited 1 day ago.";
//         } else {
//             document.getElementById('message').innerText = "You last visited " + daysDifference + " days ago.";
//         }
//     } else {
//         localStorage.setItem('lastVisitDate', currentDate);
//         document.getElementById('message').innerText = "Welcome! Let us know if you have any questions.";
//     }
// });


document.addEventListener('DOMContentLoaded', function () {
    var currentDate = new Date().getTime();

    if (localStorage.getItem('lastVisitDate')) {
        var lastVisitDate = localStorage.getItem('lastVisitDate');
        lastVisitDate = parseInt(lastVisitDate);

        var timeDifference = currentDate - lastVisitDate;
        var oneDay = 1000 * 60 * 60 * 24;
        var daysDifference = Math.floor(timeDifference / oneDay);

        localStorage.setItem('lastVisitDate', currentDate);

        var messageElement = document.getElementById('message');
        if (daysDifference === 0) {
            messageElement.innerText = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            messageElement.innerText = "You last visited 1 day ago.";
        } else {
            messageElement.innerText = "You last visited " + daysDifference + " days ago.";
            if (daysDifference > 1) {
                messageElement.innerText += "s"; // Adding "s" for plural days
            }
        }
    } else {
        localStorage.setItem('lastVisitDate', currentDate);
        document.getElementById('message').innerText = "Welcome! Let us know if you have any questions.";
    }
});
