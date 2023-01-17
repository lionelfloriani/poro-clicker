import "./index.css";

// VAR

// Essensials variables
// let score = 0;
let score = parseInt(localStorage.getItem("score")) || 0;
let pointsPerClick = parseInt(localStorage.getItem("pointsPerClick")) || 1;
let clicks = parseInt(localStorage.getItem("click")) || 0;
let totalObtainScore = parseInt(localStorage.getItem("totalObtainScore")) || 0;
let totalSpentScore = parseInt(localStorage.getItem("totalSpentScore")) || 0;

// Get element by ID

const poro = document.getElementById("poro");
const scoreDisplay = document.getElementById("score");
const buttonBonusMultiplier = document.getElementById("bonus-multiplier");
const buttonBonusMultiplier5 = document.getElementById("bonus-multiplier5");
const buttonBonusMultiplier10 = document.getElementById("bonus-multiplier10");
const buttonBonusAutoClicker = document.getElementById("bonus-auto-clicker");
const buttonBonusTime = document.getElementById("bonus-time");
const resetButtons = document.getElementById("reset");
const autoClickerId = [];

document.getElementById("clicks").innerHTML = "Clicks : " + clicks;
document.getElementById("obtain").innerHTML = "RP Obtenus : " + totalObtainScore;
document.getElementById("spent").innerHTML = "RP Depensés : " + totalSpentScore;
document.getElementById("rpclicks").innerHTML = "RP/Click : X" + pointsPerClick;
scoreDisplay.innerHTML = score;
// FUNCTION

function checkScoreAutoClicker() {
    if (score >= bonusPriceAutoClicker) {
        buttonBonusAutoClicker.classList.remove("disabled");
        buttonBonusAutoClicker.classList.add("enabled");
    } else {
        buttonBonusAutoClicker.classList.add("disabled");
        buttonBonusAutoClicker.classList.remove("enabled");
    }
}

function checkScoreMultiplier() {
    if (score >= bonusPriceMultiplier) {
        buttonBonusMultiplier.classList.remove("disabled");
        buttonBonusMultiplier.classList.add("enabled");
    } else {
        buttonBonusMultiplier.classList.add("disabled");
        buttonBonusMultiplier.classList.remove("enabled");
    }
}

function checkScoreMultiplier5() {
    if (score >= bonusPriceMultiplier5) {
        buttonBonusMultiplier5.classList.remove("disabled");
        buttonBonusMultiplier5.classList.add("enabled");
    } else {
        buttonBonusMultiplier5.classList.add("disabled");
        buttonBonusMultiplier5.classList.remove("enabled");
    }
}

function checkScoreMultiplier10() {
    if (score >= bonusPriceMultiplier10) {
        buttonBonusMultiplier10.classList.remove("disabled");
        buttonBonusMultiplier10.classList.add("enabled");
    } else {
        buttonBonusMultiplier10.classList.add("disabled");
        buttonBonusMultiplier10.classList.remove("enabled");
    }
}

function checkScoreBonusTime() {
    if (score >= bonusPriceTime && gateMouseOver === 0) {
        buttonBonusTime.classList.remove("disabled");
        buttonBonusTime.classList.add("enabled");
    } else {
        buttonBonusTime.classList.add("disabled");
        buttonBonusTime.classList.remove("enabled");
    }
}

function reset() {
    location.reload(true);
    // score = 0;
    // innerIndex = 0;
    // pointsPerClick = 1;
    // bonusPriceAutoClicker = priceAutoClicker;
    // bonusPriceMultiplier = priceMultiplier;
    // bonusPriceMultiplier5 = priceMultiplier5;
    // bonusPriceMultiplier10 = priceMultiplier10;
    // bonusPriceTime = priceBonusTime;
    // autoClickerId.forEach(clearInterval);
    // refreshScore();
    // clearTimeout(time200);
    // clearTimeout(timerId);
    // timeLeft = -1;
    // gateMouseOver = 0;
    // // buttonBonusTime.innerHTML = `Bonus Time`;
    // checkScoreAutoClicker();
    // checkScoreMultiplier();
    // checkScoreMultiplier5();
    // checkScoreMultiplier10();
    // // checkScoreBonusTime();
    localStorage.removeItem("score");
    localStorage.removeItem("totalObtainScore");
    localStorage.removeItem("totalSpentScore");
    localStorage.removeItem("click");
    localStorage.removeItem("pointsPerClick");
}

// Update score every click
function updateScore() {
    score += pointsPerClick;
    localStorage.setItem("score", score);
    scoreDisplay.innerHTML = score;
    checkScoreAutoClicker();
    checkScoreMultiplier();
    checkScoreMultiplier5();
    checkScoreMultiplier10();
    checkScoreBonusTime();
    obtainScore(pointsPerClick);
    displayScore();
    click();
    displayClicks();
    rpPerClick();
}

// Refresh score after a purchase
function refreshScore() {
    scoreDisplay.innerHTML = score;
    checkScoreAutoClicker();
    checkScoreMultiplier();
    checkScoreMultiplier5();
    checkScoreMultiplier10();
    checkScoreBonusTime();
}

function obtainScore(score) {
    totalObtainScore += score;
}

function displayScore() {
    localStorage.setItem("totalObtainScore", totalObtainScore);
    document.getElementById("obtain").innerHTML = "RP Obtenus : " + totalObtainScore;
}

function spentScore(value) {
    totalSpentScore += value;
}

function displaySpent() {
    localStorage.setItem("totalSpentScore", totalSpentScore);
    document.getElementById("spent").innerHTML = "RP Depensés : " + totalSpentScore;
}

function click() {
    localStorage.setItem("click", clicks);
    clicks += 1;
}

function displayClicks() {
    localStorage.setItem("click", clicks);
    document.getElementById("clicks").innerHTML = "Clicks : " + clicks;
}

function rpPerClick() {
    document.getElementById("rpclicks").innerHTML = "RP/Click : X" + pointsPerClick;
}

// Purchase & activate : Bonus - Auto Clicker
let priceAutoClicker = 50;
let bonusPriceAutoClicker = priceAutoClicker;

buttonBonusAutoClicker.onmouseover = function () {
    buttonBonusAutoClicker.innerHTML = "(" + bonusPriceAutoClicker + " RP)";
};

buttonBonusAutoClicker.onmouseout = function () {
    buttonBonusAutoClicker.innerHTML = "Auto Click";
};

function autoClicker() {
    if (score >= bonusPriceAutoClicker) {
        autoClickerId.push(setInterval(updateScore, 1000));
        score -= bonusPriceAutoClicker;
        spentScore(bonusPriceAutoClicker);
        bonusPriceAutoClicker *= 2;
        refreshScore();
        displaySpent();
        rpPerClick();
        priceAutoClicker = priceAutoClicker * 2;
    }
}

// Purchase & activate : Bonus - Multiplier
const priceMultiplier = 50;
let bonusPriceMultiplier = priceMultiplier;

buttonBonusMultiplier.onmouseover = function () {
    buttonBonusMultiplier.innerHTML = bonusPriceMultiplier + "RP";
};

buttonBonusMultiplier.onmouseout = function () {
    buttonBonusMultiplier.innerHTML = "X2";
};

function multiplier() {
    if (score >= bonusPriceMultiplier) {
        pointsPerClick = pointsPerClick * 2;
        localStorage.setItem("pointsPerClick", pointsPerClick);
        score -= bonusPriceMultiplier;
        spentScore(bonusPriceMultiplier);
        bonusPriceMultiplier *= 2;
        refreshScore();
        displaySpent();
        rpPerClick();
    }
}

const priceMultiplier5 = 250;
let bonusPriceMultiplier5 = priceMultiplier5;

buttonBonusMultiplier5.onmouseover = function () {
    buttonBonusMultiplier5.innerHTML = "(" + bonusPriceMultiplier5 + " RP)";
};

buttonBonusMultiplier5.onmouseout = function () {
    buttonBonusMultiplier5.innerHTML = "X5";
};

function multiplier5() {
    if (score >= bonusPriceMultiplier5) {
        pointsPerClick = pointsPerClick * 5;
        localStorage.setItem("pointsPerClick", pointsPerClick);
        score -= bonusPriceMultiplier5;
        spentScore(bonusPriceMultiplier5);
        bonusPriceMultiplier5 *= 2;
        refreshScore();
        displaySpent();
        rpPerClick();
    }
}

const priceMultiplier10 = 500;
let bonusPriceMultiplier10 = priceMultiplier10;

buttonBonusMultiplier10.onmouseover = function () {
    buttonBonusMultiplier10.innerHTML = "(" + bonusPriceMultiplier10 + " RP)";
};

buttonBonusMultiplier10.onmouseout = function () {
    buttonBonusMultiplier10.innerHTML = "X10";
};

function multiplier10() {
    if (score >= bonusPriceMultiplier10) {
        pointsPerClick = pointsPerClick * 10;
        localStorage.setItem("pointsPerClick", pointsPerClick);
        score -= bonusPriceMultiplier10;
        spentScore(bonusPriceMultiplier10);
        bonusPriceMultiplier10 *= 2;
        refreshScore();
        displaySpent();
        rpPerClick();
    }
}
// Purchase & activate : Bonus - 200%/30sec
const priceBonusTime = 200;
let bonusPriceTime = priceBonusTime;

buttonBonusTime.onmouseover = function () {
    if (gateMouseOver === 0) {
        buttonBonusTime.innerHTML = "(" + bonusPriceTime + " RP)";
    }
};

buttonBonusTime.onmouseout = function () {
    if (gateMouseOver === 0) {
        buttonBonusTime.innerHTML = "Bonus Time";
    }
};

let innerIndex = 0;
let gateMouseOver = 0;
function time200() {
    if (gateMouseOver === 0) {
        if (innerIndex === 0) {
            if (score >= bonusPriceTime) {
                // eslint-disable-next-line no-unused-vars
                const timerId = setInterval(countdownBonus, 1000);
                gateMouseOver = 1;
                const bonusValue = pointsPerClick;
                pointsPerClick = pointsPerClick + bonusValue;
                setTimeout(function () {
                    pointsPerClick = pointsPerClick - bonusValue;
                    gateMouseOver = 0;
                }, 30000);
                setTimeout(function () {
                    checkScoreBonusTime();
                }, 31900);
                score -= bonusPriceTime;
                refreshScore();
                spentScore(bonusPriceTime);
                bonusPriceTime *= 2;
                timeLeft = 30;
                innerIndex = 1;
                displaySpent();
                rpPerClick();
            }
        } else {
            if (score >= bonusPriceTime) {
                gateMouseOver = 1;
                const bonusValue = pointsPerClick;
                pointsPerClick = pointsPerClick + bonusValue;
                setTimeout(function () {
                    pointsPerClick = pointsPerClick - bonusValue;
                    gateMouseOver = 0;
                    checkScoreBonusTime();
                }, 30000);
                score -= bonusPriceTime;
                refreshScore();
                bonusPriceTime *= 2;
                timeLeft = 30;
            }
        }
    }
}

let timeLeft = 30;
function countdownBonus() {
    if (timeLeft === -1) {
        buttonBonusTime.innerHTML = `Bonus Time`;
        // eslint-disable-next-line no-undef
        clearTimeout(timerId);
    } else {
        if (timeLeft >= 10) {
            buttonBonusTime.innerHTML = `00:${timeLeft}`;
        } else {
            buttonBonusTime.innerHTML = `00:0${timeLeft}`;
        }
        timeLeft--;
    }
}
// EVENT LISTENER

// Add `pointsPerClick` to `score` and display it
poro.addEventListener("click", updateScore);

// Bonus - Multiplier
buttonBonusMultiplier.addEventListener("click", multiplier);
buttonBonusMultiplier5.addEventListener("click", multiplier5);
buttonBonusMultiplier10.addEventListener("click", multiplier10);

// Bonus - Auto Clicker
buttonBonusAutoClicker.addEventListener("click", autoClicker);

// Bonus - 200%/30sec
buttonBonusTime.addEventListener("click", time200);

document.addEventListener("DOMContentLoaded", function () {
    buttonBonusAutoClicker.classList.add("disabled");
    buttonBonusMultiplier.classList.add("disabled");
    buttonBonusMultiplier5.classList.add("disabled");
    buttonBonusMultiplier10.classList.add("disabled");
    buttonBonusTime.classList.add("disabled");
});

// Reset buttons
resetButtons.addEventListener("click", reset);

const notif1 = document.getElementById("notification1");
buttonBonusMultiplier.addEventListener("click", () => {
    if (buttonBonusMultiplier.className.includes("enable")) {
        notif1.classList.add("show");
        setTimeout(() => {
            notif1.classList.remove("show");
        }, 2000);
    }
});

const notif2 = document.getElementById("notification2");
buttonBonusMultiplier5.addEventListener("click", () => {
    if (buttonBonusMultiplier5.className.includes("enable")) {
        notif2.classList.add("show");
        setTimeout(() => {
            notif2.classList.remove("show");
        }, 2000);
    }
});
const notif3 = document.getElementById("notification3");
buttonBonusMultiplier10.addEventListener("click", () => {
    if (buttonBonusMultiplier10.className.includes("enable")) {
        notif3.classList.add("show");
        setTimeout(() => {
            notif3.classList.remove("show");
        }, 2000);
    }
});

const notif4 = document.getElementById("notification4");
buttonBonusAutoClicker.addEventListener("click", () => {
    if (buttonBonusAutoClicker.className.includes("enable")) {
        notif4.classList.add("show");
        setTimeout(() => {
            notif4.classList.remove("show");
        }, 2000);
    }
});

const notif5 = document.getElementById("notification5");
buttonBonusTime.addEventListener("click", () => {
    if (buttonBonusTime.className.includes("enable")) {
        notif5.classList.add("show");
        setTimeout(() => {
            notif5.classList.remove("show");
        }, 2000);
    }
});

poro.addEventListener("click", function () {
    // eslint-disable-next-line no-undef
    TweenLite.to(poro, 0.1, { scale: 1.2, ease: Power1.easeInOut });
    // eslint-disable-next-line no-undef
    TweenLite.to(poro, 0.1, { scale: 1, delay: 0.1, ease: Power1.easeInOut });
});

// eslint-disable-next-line no-unused-vars
let gameStarted = false;
const playButton = document.getElementById("play");
const gamePage = document.getElementById("game");
const welcomeText = document.getElementById("welcomepage");

playButton.addEventListener("click", function () {
    if (parseInt(localStorage.getItem("score")) !== 0) {
        checkScoreAutoClicker();
        checkScoreMultiplier();
        checkScoreMultiplier5();
        checkScoreMultiplier10();
        checkScoreBonusTime();
    }
    gameStarted = true;
    gamePage.classList.remove("blur");
    gamePage.style.pointerEvents = "auto";
    welcomeText.style.display = "none";
});

document.body.style.pointerEvents = "none";
playButton.style.pointerEvents = "auto";
resetButtons.style.pointerEvents = "auto";

//    resetButtons.addEventListener("click", function() {
//      gameStarted = false;
//      // gamePage.classList.add("blur");
//      gamePage.style.pointerEvents = "none";
//      score.innerHTML = 0;
//      document.body.style.pointerEvents = "none";
//    });
