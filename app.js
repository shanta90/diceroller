// HTML Elements
const rollBtn = document.getElementById("btn");
const numberDice = document.getElementById("numberDice");
const result = document.getElementById("result");
const images = document.getElementById("images");

// Button Click Event
rollBtn.onclick = function () {

    // User input
    const totalDice = Number(numberDice.value);

    // Validation
    if (totalDice < 1 || isNaN(totalDice)) {
        result.textContent = "Please enter a valid number!";
        images.innerHTML = "";
        return;
    }

    // Arrays
    const diceValues = [];
    const diceImages = [];

    // Loop
    for (let i = 0; i < totalDice; i++) {

        // Random dice (1-6)
        const dice = Math.floor(Math.random() * 6) + 1;

        // Store values
        diceValues.push(dice);

        // Store images
        diceImages.push(
            `<img src="img/${dice}.png" alt="Dice ${dice}">`
        );
    }

    // Show numbers
    result.textContent = `Dice: ${diceValues.join(", ")}`;

    // Show images
    images.innerHTML = diceImages.join("");
};