// script.js

// Function to send button-specific click events to Google Analytics
function trackButtonClick(buttonName) {
    // Send event data with a custom event name to Google Analytics
    gtag('event', buttonName, {
        'event_category': 'Buttons',
        'event_label': buttonName,
        'value': 1
    });
}

// Adding event listeners for each button with unique event names
document.getElementById('button1').addEventListener('click', () => trackButtonClick('button1_clicked'));
document.getElementById('button2').addEventListener('click', () => trackButtonClick('button2_clicked'));
document.getElementById('button3').addEventListener('click', () => trackButtonClick('button3_clicked'));
