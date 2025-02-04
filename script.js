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
        // When 'No' is clicked, add the 'grow' class to the 'Yes' button
        document.getElementById('yes-button').classList.add('grow');
    } else {
        alert('Invalid option!'); // Show alert if neither option is clicked
    }
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    
    // Create a new Image element for the cat-heart GIF
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif'; // Ensure the file path is correct
    catHeartImage.alt = 'Cat Heart';
    
    // When the cat-heart image is fully loaded, append it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}
