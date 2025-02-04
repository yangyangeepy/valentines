// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Change the background color to pink when 'Yes' is clicked
        document.body.style.backgroundColor = '#FB607F';

        // Hide the question
        document.getElementById('question').style.display = 'none';

        // Call function to display the gif and message
        displayCatHeart();
        
        // Create and display the "Thank You" message
        var message = document.createElement('div');
        message.id = 'thank-you-message';
        message.innerHTML = 'YAYY! thankyew for always being there for me (˶˃ ᵕ ˂˶) .ᐟ.ᐟ';
        document.body.appendChild(message); // Add the message to the body
    } else if (option === 'no') {
        // Increase the font size of the "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Double the font size
        yesButton.style.fontSize = newSize + 'px';
    }
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear any previous content

    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif'; // Update this path if needed
    catHeartImage.alt = 'Cat Heart';
    
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage); // Add the gif to the image container
        document.getElementById('options').style.display = 'none'; // Hide the options
    };
}
