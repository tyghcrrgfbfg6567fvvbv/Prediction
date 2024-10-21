// Close dialog box when the 'X' button is clicked
document.getElementById('close-dialog').addEventListener('click', function() {
    document.getElementById('vip-dialog').style.display = 'none';
});

// Redirect to prediction page when "Start Prediction" button is clicked
document.getElementById('start-prediction').addEventListener('click', function() {
    window.location.href = 'prediction.html';
});

// Functions for the prediction page
if (window.location.pathname.includes('prediction.html')) {
    // Function to generate Big or Small
    function generateSize() {
        const size = Math.random() > 0.5 ? 'Big' : 'Small';
        document.getElementById('size-box').innerText = size;
    }

    // Function to generate a number between 0 and 9
    function generateNumber() {
        const number = Math.floor(Math.random() * 10);
        document.getElementById('number-box').innerText = number;
    }

    // Function to generate a color with percentages
    function generateColor() {
        const randomNum = Math.random() * 100;
        let color;
        if (randomNum < 40) {
            color = 'Green';
            document.getElementById('color-box').style.backgroundColor = 'green';
        } else if (randomNum < 60) {
            color = 'Purple';
            document.getElementById('color-box').style.backgroundColor = 'purple';
        } else {
            color = 'Red';
            document.getElementById('color-box').style.backgroundColor = 'red';
        }
        document.getElementById('color-box').innerText = color;
    }

    // Function to refresh predictions
    function refreshPredictions() {
        generateSize();
        generateNumber();
        generateColor();
    }

    // Countdown Timer
    function countdown(seconds) {
        const timerElement = document.getElementById('timer');
        let timeLeft = seconds;

        const interval = setInterval(() => {
            timeLeft--;
            timerElement.innerText = `Refreshing in ${timeLeft}s...`;

            if (timeLeft <= 0) {
                clearInterval(interval);
                refreshPredictions();  // Refresh predictions
                countdown(seconds);  // Restart countdown
            }
        }, 1000);
    }

    // Initialize predictions on page load
    window.onload = function() {
        refreshPredictions();  // Generate first set of predictions
        countdown(30);  // Start 30-second countdown
    };
}
