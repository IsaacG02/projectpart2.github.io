// JavaScript functionalities for the project

// Function to keep track of the current day and time
function getCurrentDateTime() {
    const currentDate = new Date();
    alert(`Current Date and Time: ${currentDate}`);
}

// Function to send an alert using JavaScript
function showAlert() {
    alert("This is an alert!");
}

// Example of using a Math method
const randomNumber = Math.random();
console.log(`Random Number: ${randomNumber}`);

// Delay command execution at a specified interval
setTimeout(() => {
    console.log("This command is delayed by 2 seconds.");
}, 2000);

// Convert between a number and text
const number = 42;
const textNumber = number.toString();
console.log(`Number converted to text: ${textNumber}`);

// Countdown function
function countdown(seconds) {
    let time = seconds;
    const countdownInterval = setInterval(() => {
        console.log(`Time remaining: ${time} seconds`);
        time--;

        if (time < 0) {
            clearInterval(countdownInterval);
            console.log("Countdown complete!");
        }
    }, 1000);
}

// Call the countdown function with 5 seconds
countdown(5);