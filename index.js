const el = document.getElementById('lyrics1');
const button = document.querySelector('button');

let currentIndex = 0;
const textContent = el.textContent.trim(); // Trim to remove leading/trailing spaces
let intervalId; // Declare the intervalId outside the event listener

button.addEventListener('click', function() {
    // Clear any existing intervals to avoid overlapping
    clearInterval(intervalId);

    // Set a new interval
    intervalId = setInterval(function() {
        // Check if the index is within the bounds of the text content
        if (currentIndex < textContent.length) {
            // Get the current character
            const currentChar = textContent[currentIndex];

            // Change the background color of the current character
            el.innerHTML =
                textContent.substring(0, currentIndex) +
                `<span style="background-color: red;">${currentChar}</span>` +
                textContent.substring(currentIndex + 1);

            currentIndex++;
        } else {
            // Clear the interval when all characters have been processed
            clearInterval(intervalId);
        }
    }, 1000); // 1000 milliseconds = 1 second
});
