// main.js

// Function to handle the PC icon animations
function launchAndBounce(targetX) {
    const pcIcon = document.querySelector('.pc-icon');
    const initialY = window.innerHeight - 100; // Start at the bottom
    const targetY = initialY - 100; // Calculate the target Y position (above where clicked)

    // Move the PC icon towards the target position
    pcIcon.style.transition = 'left 0.5s ease'; // Smooth transition for horizontal movement
    pcIcon.style.left = `${targetX - pcIcon.offsetWidth / 2}px`; // Center the icon on the target

    // Start launching upwards
    pcIcon.classList.add('launch'); // Add launch class for upward animation

    // After the launch animation completes, start the bounce
    setTimeout(() => {
        pcIcon.classList.remove('launch'); // Remove launch class
        pcIcon.classList.add('bounce'); // Add bounce class for landing effect

        // After bouncing, reset position
        setTimeout(() => {
            pcIcon.classList.remove('bounce'); // Remove bounce class
        }, 300); // Duration of bounce animation
    }, 500); // Wait for launch animation to complete
}

// Function to handle mouse click
function handleMouseClick(event) {
    console.log("Mouse clicked!"); // Log when mouse is clicked

    // Get the X coordinate of the click
    const targetX = event.clientX;

    // Check if the message is hidden
    const message = document.getElementById('pc-message');
    if (message.style.display === 'none') {
        console.log("Launching towards: ", targetX); // Log the target X coordinate
        launchAndBounce(targetX); // Launch and bounce towards the click position
    }
}

// Hide loading screen and show content after a delay
window.onload = function() {
    const loadingScreen = document.getElementById('loading-screen');
    const message = document.getElementById('pc-message');
    const pcIcon = document.querySelector('.pc-icon');

    // Show loading screen for 1.5 seconds
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Hide loading screen
        document.body.classList.add('show-content');

        // Trigger the shake and jump animations
        pcIcon.style.animation = 'shake 1s, jump 0.5s 1.5s forwards'; // Shake for 1s, then jump after 1.5s

        // Show the message after the animations
        setTimeout(() => {
            message.style.display = 'block'; // Show the message

            // Hide the message after 3 seconds
            setTimeout(() => {
                message.style.display = 'none'; // Hide the message after 3 seconds
                console.log("Message hidden, enabling click event."); // Log message
                // Enable click event after the message is hidden
                document.addEventListener('click', handleMouseClick); // Handle click events
            }, 3000); // Message displayed for 3 seconds
        }, 2000); // Delay the message to show after the jump animation
    }, 1500); // Keep the loading screen for 1.5 seconds
};
