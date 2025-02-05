// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        console.log("Yes button clicked!"); // Debugging line

        // Change the background color to pink when 'Yes' is clicked
        document.body.style.backgroundColor = '#FB607F';

        // Hide the question
        document.getElementById('question').style.display = 'none';

        // Call function to display the cat-heart.gif after the "cat" image
        displayCatHeart();
        
        // Create and display the "Thank You" message
        var message = document.createElement('div');
        message.id = 'thank-you-message';
        message.innerHTML = 'YAYY! thankyeww for always being there for me.'; // Updated message
        message.style.textAlign = 'center';  // Center the text
        message.style.fontSize = '24px';     // Make the message readable
        message.style.marginTop = '20px';    // Add some space
        message.style.color = '#fff';        // Make sure the text is visible against the background
        document.body.appendChild(message); // Add the message to the body

        console.log("Message created:", message); // Debugging line
    } else if (option === 'no') {
        // Increase the font size of the "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Double the font size
        yesButton.style.fontSize = newSize + 'px';
    }
}

// Function to display the cat image first
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear any previous content

    var catImage = new Image();
    catImage.src = 'cat.gif';  // Path for the "cat" image
    catImage.alt = 'Cat Image';

    catImage.onload = function() {
        imageContainer.appendChild(catImage); // Add the "cat" gif to the image container
    };
}

// Function to display the cat-heart.gif after "Yes" is clicked
function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');

    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';  // Path for the "cat-heart" image
    catHeartImage.alt = 'Cat Heart';

    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage); // Add the "cat-heart" gif to the image container
        document.getElementById('options').style.display = 'none'; // Hide the options
    };
}

// Call displayCat() when the page loads to show the first image
window.onload = displayCat;

// Function to display the cat-heart.gif after "Yes" is clicked
function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear any previous content

    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';  // Path for the "cat-heart" image
    catHeartImage.alt = 'Cat Heart';

    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage); // Add the "cat-heart" gif to the image container
        document.getElementById('options').style.display = 'none'; // Hide the options
    };
}
