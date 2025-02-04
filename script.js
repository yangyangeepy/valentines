// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Change the background color to pink when 'Yes' is clicked
        document.body.style.backgroundColor = '#FB607F'; // Set background color to pink

        // Hide the question text after clicking 'Yes'
        document.getElementById('question').style.display = 'none';

        // Display the cat-heart.gif after clicking 'Yes'
        displayCatHeart();

        // Display the "Thank you" message with cute emoji
        var message = document.createElement('div');
        message.id = 'thank-you-message'; // Optional: Give the message an ID for styling
        message.innerHTML = 'YAYY! thankyew for always being there for me (˶˃ ᵕ ˂˶) .ᐟ.ᐟ'; // Text content
        document.body.appendChild(message); // Add the message to the body

    } else if (option === 'no') {
        // When 'No' is clicked, add the 'grow' class to the 'Yes' button to enlarge it
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by 2 times
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If an invalid option is clicked, show an alert
        alert('Invalid option!');
    }
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    
    // Create a new image element for the cat-heart
    var catHeartImage = new Image();
    
    // Set the source for the cat-heart image (ensure the image is in the same directory)
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    
    // When the cat-heart image is loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);

        // Hide the options container once the image is displayed
        document.getElementById('options').style.display = 'none';
    };
}

