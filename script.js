//your JS code here. If required.
function updateTimer() {
            const timerElement = document.getElementById('timer');
            const now = new Date();

            const options = { year: 'numeric',month: 'numeric', day: 'numeric',  hour: '2-digit', minute: '2-digit', second: '2-digit' };
            const formattedDateTime = now.toLocaleDateString(undefined, options);

            timerElement.textContent = formattedDateTime;
        }

        updateTimer(); // Initial call to display current time

        // Update the time every second
        setInterval(updateTimer, 1000);


