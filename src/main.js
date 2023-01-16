import "./index.css";

// VAR

// Essensials variables
let score = 0;
let pointsPerClick = 1;

// Get element by ID

let poro = document.getElementById("poro");
let scoreDisplay = document.getElementById("score");
let buttonBonusMultiplier = document.getElementById("bonus-multiplier");
let buttonBonusMultiplier5 = document.getElementById("bonus-multiplier5");
let buttonBonusMultiplier10 = document.getElementById("bonus-multiplier10");
let buttonBonusAutoClicker = document.getElementById("bonus-auto-clicker");
let buttonBonusTime = document.getElementById("bonus-time");
let resetButtons = document.getElementById("reset");
let autoClickerId = [];

// FUNCTION

function checkScoreAutoClicker(){
    if(score >= bonusPriceAutoClicker){
        buttonBonusAutoClicker.classList.remove("disabled");
    }else{
        buttonBonusAutoClicker.classList.add("disabled");
    }
}

function checkScoreMultiplier(){
    if(score >= bonusPriceMultiplier){
        buttonBonusMultiplier.classList.remove("disabled");
    }else{
        buttonBonusMultiplier.classList.add("disabled");
    }
}

function checkScoreMultiplier5(){
    if(score >= bonusPriceMultiplier5){
        buttonBonusMultiplier5.classList.remove("disabled");
    }else{
        buttonBonusMultiplier5.classList.add("disabled");
    }
}

function checkScoreMultiplier10(){
    if(score >= bonusPriceMultiplier10){
        buttonBonusMultiplier10.classList.remove("disabled");
    }else{
        buttonBonusMultiplier10.classList.add("disabled");
    }
}

function checkScoreBonusTime(){
    if(score >= bonusPriceTime){
        buttonBonusTime.classList.remove("disabled");
    }else{
        buttonBonusTime.classList.add("disabled");
    }
}

function reset(){
    score = 0;
    pointsPerClick = 1;
    bonusPriceAutoClicker = priceAutoClicker;
    bonusPriceMultiplier = priceMultiplier;
    bonusPriceMultiplier5 = priceMultiplier5;
    bonusPriceMultiplier10 = priceMultiplier10;
    bonusPriceTime = priceBonusTime;
    autoClickerId.forEach(clearInterval);
    refreshScore();
    clearTimeout(time200);
    checkScoreAutoClicker();
    checkScoreMultiplier();
    checkScoreMultiplier5();
    checkScoreMultiplier10();
    checkScoreBonusTime();
}

// Update score every click
function updateScore() {
    score += pointsPerClick;
    scoreDisplay.innerHTML = score;
    checkScoreAutoClicker();
    checkScoreMultiplier();
    checkScoreMultiplier5();
    checkScoreMultiplier10();
    checkScoreBonusTime();
    obtainScore(pointsPerClick);
    displayScore();
    displayClicks();
    click();
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

let totalObtainScore = 0;

function obtainScore(score) {
  totalObtainScore += score;
}

function displayScore() {
  document.getElementById("obtain").innerHTML = "RP Obtenus : " + totalObtainScore;
}

let totalSpentScore = 0;

function spentScore(value) {
    totalSpentScore += value;
}

function displaySpent(){
    document.getElementById("spent").innerHTML = "RP Depensée : " + totalSpentScore
}

let clicks = 1;

function click(){
    clicks += 1;
}

function displayClicks(){
    document.getElementById("clicks").innerHTML = "Clicks : " + clicks
}

// Purchase & activate : Bonus - Auto Clicker
let priceAutoClicker = 10;
let bonusPriceAutoClicker = priceAutoClicker;

buttonBonusAutoClicker.onmouseover = function() {
    buttonBonusAutoClicker.innerHTML = "(" 
    + bonusPriceAutoClicker + " RP)";
}

buttonBonusAutoClicker.onmouseout = function() {
    buttonBonusAutoClicker.innerHTML = "Auto Click"
}

function autoClicker() {
    if (score >= bonusPriceAutoClicker) {
        autoClickerId.push(setInterval(updateScore, 1000));
        score -= bonusPriceAutoClicker;
        spentScore(bonusPriceAutoClicker);
        bonusPriceAutoClicker *= 2;
        refreshScore();
        displaySpent();
    } 
}

// Purchase & activate : Bonus - Multiplier
let priceMultiplier = 10;
let bonusPriceMultiplier = priceMultiplier;

buttonBonusMultiplier.onmouseover = function() {
    buttonBonusMultiplier.innerHTML = "("
    + bonusPriceMultiplier + " RP)"
}

buttonBonusMultiplier.onmouseout = function() {
    buttonBonusMultiplier.innerHTML = "X2"
}

function multiplier() {
    if (score >= bonusPriceMultiplier) {
        pointsPerClick = pointsPerClick * 2;
        score -= bonusPriceMultiplier;
        spentScore(bonusPriceMultiplier)
        bonusPriceMultiplier *= 2;
        refreshScore();
        displaySpent();
    }
}

let priceMultiplier5 = 10;
let bonusPriceMultiplier5 = priceMultiplier5;

buttonBonusMultiplier5.onmouseover = function() {
    buttonBonusMultiplier5.innerHTML = "("
    + bonusPriceMultiplier5 + " RP)"
}

buttonBonusMultiplier5.onmouseout = function() {
    buttonBonusMultiplier5.innerHTML = "X5"
}

function multiplier5() {
    if (score >= bonusPriceMultiplier5) {
        pointsPerClick = pointsPerClick * 5;
        score -= bonusPriceMultiplier5;
        spentScore(bonusPriceMultiplier5)
        bonusPriceMultiplier5 *= 2;
        refreshScore();
        displaySpent();
    }
}

let priceMultiplier10 = 10;
let bonusPriceMultiplier10 = priceMultiplier10;

buttonBonusMultiplier10.onmouseover = function() {
    buttonBonusMultiplier10.innerHTML = "("
    + bonusPriceMultiplier10 + " RP)"
}

buttonBonusMultiplier10.onmouseout = function() {
    buttonBonusMultiplier10.innerHTML = "X10"
}

function multiplier10() {
    if (score >= bonusPriceMultiplier10) {
        pointsPerClick = pointsPerClick * 10;
        score -= bonusPriceMultiplier10;
        spentScore(bonusPriceMultiplier10)
        bonusPriceMultiplier10 *= 2;
        refreshScore();
        displaySpent();
    }
}
// Purchase & activate : Bonus - 200%/30sec
let priceBonusTime = 10;
let bonusPriceTime = priceBonusTime;

buttonBonusTime.onmouseover = function() {
    buttonBonusTime.innerHTML = "("
    + bonusPriceTime + " RP)"
}

buttonBonusTime.onmouseout = function() {
    buttonBonusTime.innerHTML = "Bonus Time"
}

function time200() {
    if (score >= bonusPriceTime) {
        let bonusValue = pointsPerClick;
        pointsPerClick = pointsPerClick + bonusValue;
        setTimeout(function () {
            pointsPerClick = pointsPerClick - bonusValue;
        }, 30000);
        score -= bonusPriceTime;
        refreshScore();
        spentScore(bonusPriceTime)
        bonusPriceTime *= 2;
        updateScore();
        displaySpent();
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

document.addEventListener("DOMContentLoaded", function() {
    buttonBonusAutoClicker.classList.add("disabled");
    buttonBonusMultiplier.classList.add("disabled");
    buttonBonusMultiplier5.classList.add("disabled");
    buttonBonusMultiplier10.classList.add("disabled");
    buttonBonusTime.classList.add("disabled");
  });

// Reset buttons
resetButtons.addEventListener("click", reset);

const notif1 = document.getElementById("notification1");
buttonBonusMultiplier.addEventListener("click", () =>{
    notif1.classList.add("show"); 
    setTimeout(() =>{
        notif1.classList.remove("show");

    }, 2000);
})

const notif2 = document.getElementById("notification2");
buttonBonusMultiplier5.addEventListener("click", () =>{
    notif2.classList.add("show"); 
    setTimeout(() =>{
        notif2.classList.remove("show");

    }, 2000);
})
const notif3 = document.getElementById("notification3");
buttonBonusMultiplier10.addEventListener("click", () =>{
    notif3.classList.add("show"); 
    setTimeout(() =>{
        notif3.classList.remove("show");

    }, 2000);
})


const notif4 = document.getElementById("notification4");
buttonBonusAutoClicker.addEventListener("click", () =>{
    notif4.classList.add("show"); 
    setTimeout(() =>{
        notif4.classList.remove("show");

    }, 2000);
})

const notif5 = document.getElementById("notification5");
buttonBonusTime.addEventListener("click", () =>{
    notif5.classList.add("show"); 
    setTimeout(() =>{
        notif5.classList.remove("show");

    }, 2000);
})


let gameStarted = false;
const playButton = document.getElementById("play");
const gamePage = document.getElementById("game");


playButton.addEventListener("click", function() {
    gameStarted = true;
    gamePage.classList.remove("blur");
    gamePage.style.pointerEvents = "auto";
  });
  
  document.body.style.pointerEvents = "none";
  playButton.style.pointerEvents = "auto";

  reset.addEventListener("click", function() {
    gameStarted = false;
    gamePage.classList.add("blur");
    gamePage.style.pointerEvents = "none";
    score.innerHTML = 0;
    document.body.style.pointerEvents = "none";
  });


  poro.addEventListener("click", function(){
    TweenLite.to(poro, 0.1, {scale: 1.2, repeat: 1, yoyo: true, ease: Power1.easeInOut});
});





