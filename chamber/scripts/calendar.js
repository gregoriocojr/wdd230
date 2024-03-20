document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth', // Display the calendar in the month view initially
      // Add any other options you want here
    });

    calendar.render(); // Render the calendar
});