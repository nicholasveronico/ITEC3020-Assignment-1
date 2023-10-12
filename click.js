document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons with the class "button black model"
    var type = document.querySelectorAll('.button.black.model');

    // Loop through each button and add a click event listener
    type.forEach(function(button) {
        button.addEventListener('click', function() {
            var buttonText = button.textContent;

            if (buttonText == 'iPhone 15') {
                document.getElementById("phoneName").textContent = 'iPhone 15';
                document.getElementById("phone").src = 'img/phones/iPhone_15_Black.png';
                document.getElementById("description").textContent = 'The Apple iPhone 15 brings you Dynamic Island, a 48MP main camera with 2X Telephoto, and USB-C—all in a\n' +
                    '            durable colour-infused glass and aluminum design. It features a 6.1" Super Retina XDR display which is up\n' +
                    '            to 2x brighter in the sun compared to iPhone 14.'
            }

            swapColours(buttonText)

        });
    });
});

function swapImage(newType, colour) {

}

function swapDescription(newType) {
    if (newType == 'iPhone 15') {
        return 'The Apple iPhone 15 brings you Dynamic Island, a 48MP main camera with 2X Telephoto, and USB-C—all in a\n' +
            '            durable colour-infused glass and aluminum design. It features a 6.1" Super Retina XDR display which is up\n' +
            '            to 2x brighter in the sun compared to iPhone 14.'
    } else if (newType == 'iPhone 15 Plus') {

    } else if (newType == 'iPhone 15 Pro') {

    } else if (newType == 'iPhone 15 Pro Max') {

    }
}

function swapColours(newType) {
    var colors = document.querySelectorAll('.button.colour-selection')

    colors.forEach(function(button) {
        if (newType == 'iPhone 15' || newType == 'iPhone 15 Plus') {
            if (button.classList[2] == 'titanblack') {
                button.classList.replace('titanblack', 'black');
            } else if (button.classList[2] == 'titanwhite') {
                button.classList.replace('titanwhite', 'blue');
            } else if (button.classList[2] == 'titannatural') {
                button.classList.replace('titannatural', 'yellow');
            } else if (button.classList[2] == 'titanblue') {
                button.classList.replace('titanblue', 'pink');
            }
        } else {
            if (button.classList[2] == 'black') {
                button.classList.replace('black', 'titanblack');
            } else if (button.classList[2] == 'blue') {
                button.classList.replace('blue', 'titanwhite');
            } else if (button.classList[2] == 'yellow') {
                button.classList.replace('yellow', 'titannatural');
            } else if (button.classList[2] == 'pink') {
                button.classList.replace('pink', 'titanblue');
            }
        }
    });
}