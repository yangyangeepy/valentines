// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Change the background color
        document.body.style.backgroundColor = '#FB607F'; // Set background color to pink
        document.getElementById('question').style.display = 'none'; // Hide the question
        displayCatHeart(); // Display the cat-heart.gif
        
        // Display the "Thank you" message with cute emoji
        var message = document.createElement('div');
        message.id = 'thank-you-message'; // Optional: Give the message an ID for styling
        message.innerHTML = 'YAYY! thankyew for always being there for me (˶˃ ᵕ ˂˶) .ᐟ.ᐟ'; // Text content
        document.body.appendChild(message); // Add the message to the body
    } else if (option === 'no') {
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by 2 times
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!'); // Show alert if neither option is clicked
    }
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';

    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif'; // Make sure the cat-heart.gif file is in the same directory
    catHeartImage.alt = 'Cat Heart';

    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        var imageContainer = document.getElementById('image-container');
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}
