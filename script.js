// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Function to handle button click events
    function selectOption(option) {
        if (option === 'yes') {
            // Change the background color to pink when 'Yes' is clicked
            document.body.style.backgroundColor = '#FB607F'; // Set background color to pink

            // Ensure that the question element exists before trying to hide it
            var questionElement = document.getElementById('question');
            if (questionElement) {
                questionElement.style.display = 'none'; // Hide the question
            }

            displayCatHeart(); // Display the cat-heart.gif

            // Display the "Thank you" message with cute emoji
            var message = document.createElement('div');
            message.id = 'thank-you-message'; // Optional: Give the message an ID for styling
            message.innerHTML = 'YAYY! thankyew for always being there for me (˶˃ ᵕ ˂˶) .ᐟ.ᐟ'; // Text content
            document.body.appendChild(message); // Add the message to the body

        } else if (option === 'no') {
            // Increase font size of "Yes" button when 'No' is clicked
            var yesButton = document.getElementById('yes-button');
            if (yesButton) {
                var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
                var newSize = parseFloat(currentFontSize) * 2; // Increase font size by 2 times
                yesButton.style.fontSize = newSize + 'px';
            }
        } else {
            alert('Invalid option!'); // Show alert if neither option is clicked
        }
    }

    // Function to display the cat-heart.gif
    function displayCatHeart() {
        // Ensure the image container exists before trying to add an image
        var imageContainer = document.getElementById('image-container');
        if (imageContainer) {
            // Clear existing content in the image container
            imageContainer.innerHTML = '';

            // Create a new Image element for the cat-heart
            var catHeartImage = new Image();
            // Set the source (file path) for the cat-heart image
            catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
            catHeartImage.alt = 'Cat Heart';

            // When the cat-heart image is fully loaded, add it to the image container
            catHeartImage.onload = function() {
                imageContainer.appendChild(catHeartImage);

                // Hide the options container once the image is loaded
                var optionsContainer = document.getElementById('options');
                if (optionsContainer) {
                    optionsContainer.style.display = 'none';
                }
            };
        }
    }

    // Attach event listeners to buttons to ensure proper click behavior
    var yesButton = document.getElementById('yes-button');
    if (yesButton) {
        yesButton.addEventListener('click', function() {
            selectOption('yes');
        });
    }

    var noButton = document.getElementById('no-button');
    if (noButton) {
        noButton.addEventListener('click', function() {
            selectOption('no');
        });
    }

});
