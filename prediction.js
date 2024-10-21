let timer = 30;
let purchaseNumber = 20241021302819; // Starting purchase number
const countdownElement = document.getElementById('countdown');
const purchaseNumberElement = document.getElementById('purchase-number');
const randomValueElement = document.getElementById('random-value');
const bigSmallElement = document.getElementById('big-small');
const colorBoxElement = document.getElementById('color-box');

// Update countdown function
function updateCountdown() {
    countdownElement.innerHTML = `00:${timer < 10 ? '0' + timer : timer}`;
    timer--;

    if (timer < 0) {
        // Reset timer and update random outcome and purchase number
        refreshRandomOutcome();
        incrementPurchaseNumber();
        timer = 30;
    }
}

// Function to refresh random values
function refreshRandomOutcome() {
    const randomValue = Math.floor(Math.random() * 10);
    const bigSmall = randomValue > 4 ? 'Big' : 'Small';
    const colors = ['Green', 'Purple', 'Red'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    randomValueElement.innerHTML = randomValue;
    bigSmallElement.innerHTML = bigSmall;
    colorBoxElement.innerHTML = randomColor;
}

// Function to increment the purchase number
function incrementPurchaseNumber() {
    purchaseNumber++;
    purchaseNumberElement.innerHTML = purchaseNumber;
}

// Start countdown and auto-refresh every second
setInterval(updateCountdown, 1000);

// Initial random outcome and purchase number display
refreshRandomOutcome();
purchaseNumberElement.innerHTML = purchaseNumber;
