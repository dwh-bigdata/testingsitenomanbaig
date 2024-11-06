// script.js

// Function to send button click events to Google Analytics
function trackButtonClick(buttonName) {
    // Send event data to Google Analytics
    gtag('event', 'click', {
        'event_category': 'Buttons',
        'event_label': buttonName,
        'value': 1
    });
}
