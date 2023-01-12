import "./index.css";

import "./index.css";

let clicks = 0;
let interval = null;
let button = document.getElementById("auto-clicker");
let scoreUpdate = document.getElementById("score");

button.addEventListener("click", start);

// function autoClick

function updateScore() {
    clicks += 1;
    scoreUpdate.innerHTML = clicks;
}

// function that runs autoCLick - check if the points are above the requirement to buy - will be replaced by another function

function start() {
    if (clicks >= 100) {
        interval = setInterval(updateScore, 1000);
        clicks -= 100;
    } else {
        alert("Vous devez avoir au moins 100 points pour utiliser ce bouton");
    }
}

// click on Poro = score + 1

let perclick = 1;
document.getElementById("poro").addEventListener("click", () => {
    clickUp()
    console.log(5);
});
function clickUp() {
    clicks += perclick;
    document.getElementById("score").innerHTML = clicks;
    localStorage.setItem("clicksOnPoro", clicks);
}

// click = x2 for infinity

let multiplierButton = document.getElementById("multiplier");

multiplierButton.addEventListener("click", () => {
    perclick += 1;
    multiplierButton.disabled = true;
});

// click = x2 for 30secondes

let buttonBonusTime = document.getElementById("bonus-time");

buttonBonusTime.addEventListener("click", function () {
    let bonusValue = perclick * 2 - perclick;
    perclick = perclick + bonusValue;
    setTimeout(function () {
        perclick = perclick - bonusValue;
    }, 30000);
});

// ceci est un test
