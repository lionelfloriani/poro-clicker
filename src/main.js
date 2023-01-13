import "./index.css";

// VAR

// Essensials variables
let score = 0;
let pointsPerClick = 1;

// Get element by ID

let poro = document.getElementById("poro");
let scoreDisplay = document.getElementById("score");
let buttonBonusMultiplier = document.getElementById("bonus-multiplier");
let buttonBonusAutoClicker = document.getElementById("bonus-auto-clicker");
let buttonBonusTime = document.getElementById("bonus-time");

// FUNCTION

// Update score every click
function updateScore() {
    score += pointsPerClick;
    scoreDisplay.innerHTML = score;
}

// Refresh score after a purchase
function refreshScore() {
    scoreDisplay.innerHTML = score;
}

// Purchase & activate : Bonus - Auto Clicker
function autoClicker() {
    if (score >= 100) {
        setInterval(updateScore, 1000);
        score -= 100;
        refreshScore();
    } else {
        // Pas besoin de "ELSE" dans le future. Les buttons seront design de manière A, deviendront design en B quand le score est assez élevé pour les acheter et en C quand ils sont achetés.
        alert("Vous devez avoir au moins 100 points pour utiliser ce bouton");
    }
}

// Purchase & activate : Bonus - Multiplier
function multiplier() {
    if (score >= 10) {
        pointsPerClick = pointsPerClick * 2;
        score -= 10;
        refreshScore();
    } else {
        // Pas besoin de "ELSE" dans le future. Les buttons seront design de manière A, deviendront design en B quand le score est assez élevé pour les acheter et en C quand ils sont achetés.
        alert("Vous devez avoir au moins 10 points pour utiliser ce bouton");
    }
}

// Purchase & activate : Bonus - 200%/30sec
function time200() {
    if (score >= 20) {
        let bonusValue = pointsPerClick;
        pointsPerClick = pointsPerClick + bonusValue;
        setTimeout(function () {
            pointsPerClick = pointsPerClick - bonusValue;
        }, 30000);
        score -= 20;
        refreshScore();
    } else {
        // Pas besoin de "ELSE" dans le future. Les buttons seront design de manière A, deviendront design en B quand le score est assez élevé pour les acheter et en C quand ils sont achetés.
        alert("Vous devez avoir au moins 20 points pour utiliser ce bouton");
    }
}

// EVENT LISTENER

// Add `pointsPerClick` to `score` and display it
poro.addEventListener("click", updateScore);

// Bonus - Multiplier
buttonBonusMultiplier.addEventListener("click", multiplier);

// Bonus - Auto Clicker
buttonBonusAutoClicker.addEventListener("click", autoClicker);

// Bonus - 200%/30sec
buttonBonusTime.addEventListener("click", time200);


  

