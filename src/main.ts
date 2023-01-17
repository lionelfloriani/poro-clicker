import { parse } from "postcss";
import "./index.css";

// CONST
const poro:HTMLElement | null = document.getElementById("poro");
const scoreDisplay:HTMLElement | null = document.getElementById("score");
const buttonBonusMultiplier:HTMLElement | null = document.getElementById("bonus-multiplier");
const buttonBonusMultiplier5:HTMLElement | null = document.getElementById("bonus-multiplier5");
const buttonBonusMultiplier10:HTMLElement | null = document.getElementById("bonus-multiplier10");
const buttonBonusAutoClicker:HTMLElement | null = document.getElementById("bonus-auto-clicker");
const buttonBonusTime:HTMLElement | null = document.getElementById("bonus-time");
const resetButtons:HTMLElement | null = document.getElementById("reset");
const autoClickerId:number[] = [];
const placeHolderClicks:HTMLElement | null = document.getElementById("clicks")
const placeHolderObtain:HTMLElement | null = document.getElementById("obtain")
const placeHolderSpent:HTMLElement | null = document.getElementById("spent")
const rpsClicks:HTMLElement | null = document.getElementById("rpclicks")
const clicksSecondes:HTMLElement | null = document.getElementById("autoclicksecond")
const notif1:HTMLElement | null = document.getElementById("notification1");
const notif2:HTMLElement | null = document.getElementById("notification2");
const notif3:HTMLElement | null = document.getElementById("notification3");
const notif4:HTMLElement | null = document.getElementById("notification4");
const notif5:HTMLElement | null = document.getElementById("notification5");
const buttonRp:HTMLElement | null = document.getElementById("rpicon"); 
const buttonShop:HTMLElement | null = document.getElementById("shop");
const gitHub:HTMLElement | null = document.getElementById("github");

//LocalStorage
let score:number = parseInt(localStorage.getItem("score") || "0");
let pointsPerClick:number = parseInt(localStorage.getItem("pointsPerClick") || "1");
let clicks:number = parseInt(localStorage.getItem("click") || "0");
let totalObtainScore:number = parseInt(localStorage.getItem("totalObtainScore") || "0");
let totalSpentScore:number = parseInt(localStorage.getItem("totalSpentScore") || "0")
let purchaseCount = parseInt(localStorage.getItem("numberPurchaseAutoClick") || "0")

//Display right values on loading
if (placeHolderClicks){
    placeHolderClicks.innerHTML = clicks.toString()
}
if (placeHolderObtain){
    placeHolderObtain.innerHTML = totalObtainScore.toString();
}
if (placeHolderSpent){
    placeHolderSpent.innerHTML = totalSpentScore.toString();
}
if (rpsClicks){
    rpsClicks.innerHTML = pointsPerClick.toString();
}
if (scoreDisplay){
    scoreDisplay.innerHTML = score.toString();
}
if (clicksSecondes){
    clicksSecondes.innerHTML = purchaseCount.toString()
}
//Functions

/**
 * Check if score is >= AutoClicker's price
 */
function checkScoreAutoClicker() {
    if (score >= bonusPriceAutoClicker) {
        if (buttonBonusAutoClicker){
            buttonBonusAutoClicker.classList.remove("disabled");
            buttonBonusAutoClicker.classList.add("enabled");
        }
    } else {
        if (buttonBonusAutoClicker){
            buttonBonusAutoClicker.classList.add("disabled");
            buttonBonusAutoClicker.classList.remove("enabled");
        }
    }
}

/**
 * Check if score is >= Multiplier's price
 */
function checkScoreMultiplier() {
    if (score >= bonusPriceMultiplier) {
        if (buttonBonusMultiplier){
            buttonBonusMultiplier.classList.remove("disabled");
            buttonBonusMultiplier.classList.add("enabled");
        }
    } else {
        if (buttonBonusMultiplier){
            buttonBonusMultiplier.classList.add("disabled");
            buttonBonusMultiplier.classList.remove("enabled");
        }
    }
}

/**
 * Check if score is >= Multiplier5's price
 */
function checkScoreMultiplier5() {
    if (score >= bonusPriceMultiplier5) {
        if (buttonBonusMultiplier5){
            buttonBonusMultiplier5.classList.remove("disabled");
            buttonBonusMultiplier5.classList.add("enabled");
        }
    } else {
        if (buttonBonusMultiplier5){
            buttonBonusMultiplier5.classList.add("disabled");
            buttonBonusMultiplier5.classList.remove("enabled");
        }
    }
}

/**
 * Check if score is >= Multiplier10's price
 */
function checkScoreMultiplier10() {
    if (score >= bonusPriceMultiplier10) {
        if (buttonBonusMultiplier10){
            buttonBonusMultiplier10.classList.remove("disabled");
            buttonBonusMultiplier10.classList.add("enabled");
        }
    } else {
        if (buttonBonusMultiplier10){
            buttonBonusMultiplier10.classList.add("disabled");
            buttonBonusMultiplier10.classList.remove("enabled");
        }
    }
}

/**
 * Check if score is >= BonusTime's price
 */
function checkScoreBonusTime() {
    if (score >= bonusPriceTime && gateMouseOver === 0) {
        if (buttonBonusTime){
            buttonBonusTime.classList.remove("disabled");
            buttonBonusTime.classList.add("enabled");
        }
    } else {
        if (buttonBonusTime){
            buttonBonusTime.classList.add("disabled");
            buttonBonusTime.classList.remove("enabled");
        }
    }
}

/**
 * Reset the game
 */
function reset() {
    // location.reload();
    score = 0;
    innerIndex = 0;
    pointsPerClick = 1;
    bonusPriceAutoClicker = priceAutoClicker;
    bonusPriceMultiplier = priceMultiplier;
    bonusPriceMultiplier5 = priceMultiplier5;
    bonusPriceMultiplier10 = priceMultiplier10;
    bonusPriceTime = priceBonusTime;
    autoClickerId.forEach(clearInterval);
    refreshScore();
    // clearTimeout(time200);
    // clearTimeout(timerId);
    timeLeft = -1;
    gateMouseOver = 0;
    // buttonBonusTime.innerHTML = `Bonus Time`;
    checkScoreAutoClicker();
    checkScoreMultiplier();
    checkScoreMultiplier5();
    checkScoreMultiplier10();
    checkScoreBonusTime();
    // localStorage.removeItem("score");
    // localStorage.removeItem("totalObtainScore");
    // localStorage.removeItem("totalSpentScore");
    // localStorage.removeItem("click");
    // localStorage.removeItem("pointsPerClick");
    // localStorage.removeItem("priceAutoClicker")
    // localStorage.removeItem("priceMultiplier");
    // localStorage.removeItem("priceMultiplier5");
    // localStorage.removeItem("priceMultiplier10");
    // localStorage.removeItem("priceTime");
    // localStorage.removeItem("numberPurchaseAutoClick");
    for (let key in localStorage) {
        localStorage.removeItem(key);
    }
    score = parseInt(localStorage.getItem("score") || "0");
    pointsPerClick = parseInt(localStorage.getItem("pointsPerClick") || "1");
    clicks = parseInt(localStorage.getItem("click") || "0");
    totalObtainScore = parseInt(localStorage.getItem("totalObtainScore") || "0");
    totalSpentScore = parseInt(localStorage.getItem("totalSpentScore") || "0")
    bonusPriceAutoClicker = priceAutoClicker
    bonusPriceMultiplier = priceMultiplier
    bonusPriceMultiplier5 = priceMultiplier5
    bonusPriceMultiplier10 = priceMultiplier10
    bonusPriceTime = priceBonusTime
    purchaseCount = 0
    if (placeHolderClicks){
        placeHolderClicks.innerHTML = clicks.toString();
    }
    if (placeHolderObtain){
        placeHolderObtain.innerHTML = totalObtainScore.toString();
    }
    if (placeHolderSpent){
        placeHolderSpent.innerHTML = totalSpentScore.toString();
    }
    if (rpsClicks){
        rpsClicks.innerHTML = pointsPerClick.toString();
    }
    if (scoreDisplay){
        scoreDisplay.innerHTML = score.toString();
    }
}

/**
 * Update the score after every click + check if bonuses can be bought
 */
function updateScore() {
    score += pointsPerClick;
    localStorage.setItem("score", score.toString());
    if (scoreDisplay){
        scoreDisplay.innerHTML = score.toString();
    }
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
    clicksec()
}

/**
 * Refresh the score after a purchase + check if bonuses can be bought
 */
function refreshScore() {
    if (scoreDisplay){
        scoreDisplay.innerHTML = score.toString();
    }
    checkScoreAutoClicker();
    checkScoreMultiplier();
    checkScoreMultiplier5();
    checkScoreMultiplier10();
    checkScoreBonusTime();
}

/**
 * Stock the score in a VAR to keep track of the total score without dedicuting the purchases
 * @param {number} score
 */
function obtainScore(score: number) {
    totalObtainScore += score;
}

/**
 * Refresh the "totalObtainScore" on the page
 */
function displayScore() {
    localStorage.setItem("totalObtainScore", totalObtainScore.toString());
    if (placeHolderObtain){
        placeHolderObtain.innerHTML = totalObtainScore.toString();
    }
}

/**
 * Stock the points spent in the shop
 * @param {number} value
 */
function spentScore(value: number) {
    totalSpentScore += value;
}

/**
 * Refresh the "totalSpentScore" on the page
 */
function displaySpent() {
    localStorage.setItem("totalSpentScore", totalSpentScore.toString());
    if (placeHolderSpent){
        placeHolderSpent.innerHTML = totalSpentScore.toString();
    }
}

/**
 * Stock the single clicks made on the Poro
 */
function click() {
    localStorage.setItem("click", clicks.toString());
    clicks += 1;
}

/**
 * Refresh the "clicks" on the page
 */
function displayClicks() {
    localStorage.setItem("click", clicks.toString());
    if (placeHolderClicks){
        placeHolderClicks.innerHTML = clicks.toString();
    }
}

/**
 * Refresh the "rpsClicks" on the page
 */
function rpPerClick() {
    if (rpsClicks){
        rpsClicks.innerHTML = pointsPerClick.toString();
    }
}

/**
 * Refresh the "Clicks/s" on the page
 */
function clicksec(){
    if (clicksSecondes){
        clicksSecondes.innerHTML = purchaseCount.toString()
    }
}

//BONUSES
//Auto-Clicker
const priceAutoClicker:number = 50;
let bonusPriceAutoClicker:number = parseInt(localStorage.getItem("priceAutoClicker") || priceAutoClicker.toString());

if (buttonBonusAutoClicker){
    buttonBonusAutoClicker.onmouseover = function () {
        buttonBonusAutoClicker.innerHTML = bonusPriceAutoClicker + "RP";
}
};

if (buttonBonusAutoClicker){
    buttonBonusAutoClicker.onmouseout = function () {
        buttonBonusAutoClicker.innerHTML = "Auto Click";
}
};


if (parseInt(localStorage.getItem("priceAutoClicker") || "50") > priceAutoClicker){
    for (let i = 0; i < parseInt(localStorage.getItem("numberPurchaseAutoClick") || "0"); i++){
        autoClickerId.push(setInterval(updateScore, 1000));
    }
}
/**
 * Check if bonus can be bought, activate it if purchase possible, refresh scores
 */
function autoClicker() {
    if (score >= bonusPriceAutoClicker) {
        purchaseCount++
        autoClickerId.push(setInterval(updateScore, 1000));
        score -= bonusPriceAutoClicker;
        spentScore(bonusPriceAutoClicker);
        bonusPriceAutoClicker *= 2;
        refreshScore();
        displaySpent();
        rpPerClick();
        localStorage.setItem("priceAutoClicker", bonusPriceAutoClicker.toString());
        localStorage.setItem("numberPurchaseAutoClick", purchaseCount.toString())
        return true
    } else {
        return false
    }
}

//Multiplier
const priceMultiplier:number = 50;
let bonusPriceMultiplier:number = parseInt(localStorage.getItem("priceMultiplier") || priceMultiplier.toString());

if (buttonBonusMultiplier){
    buttonBonusMultiplier.onmouseover = function () {
        buttonBonusMultiplier.innerHTML = bonusPriceMultiplier + "RP";
}
};

if (buttonBonusMultiplier){
    buttonBonusMultiplier.onmouseout = function () {
        buttonBonusMultiplier.innerHTML = "X2";
}
};

/**
 * Check if bonus can be bought, activate it if purchase possible, refresh scores
 */
function multiplier() {
    if (score >= bonusPriceMultiplier) {
        pointsPerClick = pointsPerClick * 2;
        localStorage.setItem("pointsPerClick", pointsPerClick.toString());
        score -= bonusPriceMultiplier;
        spentScore(bonusPriceMultiplier);
        bonusPriceMultiplier *= 2;
        refreshScore();
        displaySpent();
        rpPerClick();
        localStorage.setItem("priceMultiplier", bonusPriceMultiplier.toString());
        return true
    } else {
        return false
    }
}

//Mutliplier5
const priceMultiplier5:number = 250;
let bonusPriceMultiplier5:number = parseInt(localStorage.getItem("priceMultiplier5") || priceMultiplier5.toString());

if (buttonBonusMultiplier5){
    buttonBonusMultiplier5.onmouseover = function () {
        buttonBonusMultiplier5.innerHTML = bonusPriceMultiplier5 + "RP";
}
};

if (buttonBonusMultiplier5){
    buttonBonusMultiplier5.onmouseout = function () {
        buttonBonusMultiplier5.innerHTML = "X5";
}
};

/**
 * Check if bonus can be bought, activate it if purchase possible, refresh scores
 */
function multiplier5() {
    if (score >= bonusPriceMultiplier5) {
        pointsPerClick = pointsPerClick * 5;
        localStorage.setItem("pointsPerClick", pointsPerClick.toString());
        score -= bonusPriceMultiplier5;
        spentScore(bonusPriceMultiplier5);
        bonusPriceMultiplier5 *= 2;
        refreshScore();
        displaySpent();
        rpPerClick();
        localStorage.setItem("priceMultiplier5", bonusPriceMultiplier5.toString())
        return true
    } else {
        return false
    }
}

//Multiplier10
const priceMultiplier10:number = 500;
let bonusPriceMultiplier10:number = parseInt(localStorage.getItem("priceMultiplier10") || priceMultiplier10.toString());

if (buttonBonusMultiplier10){
    buttonBonusMultiplier10.onmouseover = function () {
        buttonBonusMultiplier10.innerHTML = bonusPriceMultiplier10 + "RP";
}
};

if (buttonBonusMultiplier10){
    buttonBonusMultiplier10.onmouseout = function () {
        buttonBonusMultiplier10.innerHTML = "X10";
}
};

/**
 * Check if bonus can be bought, activate it if purchase possible, refresh scores
 */
function multiplier10() {
    if (score >= bonusPriceMultiplier10) {
        pointsPerClick = pointsPerClick * 10;
        localStorage.setItem("pointsPerClick", pointsPerClick.toString());
        score -= bonusPriceMultiplier10;
        spentScore(bonusPriceMultiplier10);
        bonusPriceMultiplier10 *= 2;
        refreshScore();
        displaySpent();
        rpPerClick();
        localStorage.setItem("priceMultiplier10", bonusPriceMultiplier10.toString())
        return true
    } else {
        return false
    }
}

//Bonus-Time
const priceBonusTime:number = 200;
let bonusPriceTime:number = parseInt(localStorage.getItem("priceTime") || priceBonusTime.toString())

if (buttonBonusTime){
    buttonBonusTime.onmouseover = function () {
        if (gateMouseOver === 0) {
            buttonBonusTime.innerHTML = bonusPriceTime + "RP";
        }
    };
}

if (buttonBonusTime){
    buttonBonusTime.onmouseout = function () {
        if (gateMouseOver === 0) {
            buttonBonusTime.innerHTML = "Bonus Time";
        }
    };
}

let innerIndex:number = 0;
let gateMouseOver:number = 0;
let timeLeft:number = 30;

/**
 * Display a timmer of 30sec on the Bonus-Time button if purchased
 */
function countdownBonus() {
    if (timeLeft === -1) {
        if (buttonBonusTime){
            buttonBonusTime.innerHTML = `Bonus Time`;
        }
        // eslint-disable-next-line no-undef
        // clearTimeout(timerId);
    } else {
        if (timeLeft >= 10) {
            if (buttonBonusTime){
                buttonBonusTime.innerHTML = `00:${timeLeft}`;
            }
        } else {
            if (buttonBonusTime){
                buttonBonusTime.innerHTML = `00:0${timeLeft}`;
            }
        }
        timeLeft--;
    }
}

/**
 * Check if bonus can be bought, activate it if purchase possible, refresh scores
 */
function time200() {
    if (gateMouseOver === 0) {
        if (innerIndex === 0) {
            if (score >= bonusPriceTime) {
                // eslint-disable-next-line no-unused-vars
                let timerId = setInterval(countdownBonus, 1000);
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
                localStorage.setItem("priceTime", bonusPriceTime.toString())
                return true
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
                localStorage.setItem("priceTime", bonusPriceTime.toString())
                return true
            } else {
                return false
            }
        }
    } else {
        return false
    }
    return false
}

//EventListeners
if (poro){
    poro.addEventListener("click", updateScore);
}
if (poro){
    poro.addEventListener("click", function () {
    // eslint-disable-next-line no-undef
    TweenLite.to(poro, 0.1, { scale: 1.2, ease: Power1.easeInOut });
    // eslint-disable-next-line no-undef
    TweenLite.to(poro, 0.1, { scale: 1, delay: 0.1, ease: Power1.easeInOut });
})
};

if (buttonBonusMultiplier){
    buttonBonusMultiplier.addEventListener("click", function(){
        if (multiplier() === true){
            if (notif1){
                notif1.classList.add("show");
                setTimeout(() => {
                    notif1.classList.remove("show");
                }, 2000);
            }
        }
    });
}
if (buttonBonusMultiplier5){
    buttonBonusMultiplier5.addEventListener("click", function(){
        if (multiplier5() === true){
            if (notif2){
                notif2.classList.add("show");
                setTimeout(() => {
                    notif2.classList.remove("show");
                }, 2000);
            }
        }
    });
}
if (buttonBonusMultiplier10){
    buttonBonusMultiplier10.addEventListener("click", function(){
        if (multiplier10() === true){
            if (notif3){
                notif3.classList.add("show");
                setTimeout(() => {
                    notif3.classList.remove("show");
                }, 2000);
            }
        }
    });
}
if (buttonBonusAutoClicker){
    buttonBonusAutoClicker.addEventListener("click", function(){
        if (autoClicker() === true){
            if (notif4){
                notif4.classList.add("show");
                setTimeout(() => {
                    notif4.classList.remove("show");
                }, 2000);
            }
        }
    });
}
if (buttonBonusTime){
    buttonBonusTime.addEventListener("click", function(){
        if (time200() === true){
            if (notif5){
                notif5.classList.add("show");
                setTimeout(() => {
                    notif5.classList.remove("show");
                }, 2000);
            }
        }
    });
}
if (resetButtons){
    resetButtons.addEventListener("click", reset);
}

document.addEventListener("DOMContentLoaded", function () {
    if (buttonBonusAutoClicker){
        buttonBonusAutoClicker.classList.add("disabled");
    }
    if (buttonBonusMultiplier){
        buttonBonusMultiplier.classList.add("disabled");
    }
    if (buttonBonusMultiplier5){
        buttonBonusMultiplier5.classList.add("disabled");
    }
    if (buttonBonusMultiplier10){
        buttonBonusMultiplier10.classList.add("disabled");
    }
    if (buttonBonusTime){
        buttonBonusTime.classList.add("disabled");
    }
});

// eslint-disable-next-line no-unused-vars
let gameStarted:boolean = false;
const playButton:HTMLElement | null = document.getElementById("play");
const gamePage:HTMLElement | null = document.getElementById("game");
const welcomeText:HTMLElement | null = document.getElementById("welcomepage");

if (playButton){
    playButton.addEventListener("click", function () {
        if (parseInt(localStorage.getItem("score") || "0") != 0) {
            checkScoreAutoClicker();
            checkScoreMultiplier();
            checkScoreMultiplier5();
            checkScoreMultiplier10();
            checkScoreBonusTime();
        }
        gameStarted = true;
        if (gamePage){
            gamePage.classList.remove("blur");
            gamePage.style.pointerEvents = "auto";
        }
        if (welcomeText){
            welcomeText.style.display = "none";
        }
        if (poro){
            poro.style.display = "block";
        }
        if (buttonBonusMultiplier){
            buttonBonusMultiplier.style.display = "block";
        }
        if (buttonBonusMultiplier5){
            buttonBonusMultiplier5.style.display = "block"; 
        }
        if (buttonBonusMultiplier10){
            buttonBonusMultiplier10.style.display = "block"; 
        }
        if (buttonBonusAutoClicker){
            buttonBonusAutoClicker.style.display = "block"; 
        }
        if (buttonBonusTime){
            buttonBonusTime.style.display = "block";
        }
        if (buttonRp){
            buttonRp.style.display = "block";
        }
        if (buttonShop){
            buttonShop.style.display = "block";
        }
        if (scoreDisplay){
            scoreDisplay.style.display="block";
        }
        if (gitHub){
            gitHub.style.display="block";
        }
    });
}
if (document){
    document.body.style.pointerEvents = "none";
}
if (playButton){
    playButton.style.pointerEvents = "auto";
}
if (resetButtons){
    resetButtons.style.pointerEvents = "auto";
}
if (poro){
    poro.style.display = "none";
}
if (buttonBonusMultiplier){
    buttonBonusMultiplier.style.display = "none";
}
if (buttonBonusMultiplier5){
    buttonBonusMultiplier5.style.display = "none"; 
}
if (buttonBonusMultiplier10){
    buttonBonusMultiplier10.style.display = "none"; 
}
if (buttonBonusAutoClicker){
    buttonBonusAutoClicker.style.display = "none"; 
}
if (buttonBonusTime){
    buttonBonusTime.style.display = "none";
}
if (buttonRp){
    buttonRp.style.display = "none";
}
if (buttonShop){
    buttonShop.style.display = "none";
}
if (scoreDisplay){
    scoreDisplay.style.display="none";
}
if (gitHub){
    gitHub.style.display="none";
}
//    resetButtons.addEventListener("click", function() {
//      gameStarted = false;
//      // gamePage.classList.add("blur");
//      gamePage.style.pointerEvents = "none";
//      score.innerHTML = 0;
//      document.body.style.pointerEvents = "none";
//    
