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

function multiplier5() {
    if (score >= 10) {
        pointsPerClick = pointsPerClick * 5;
        score -= 10;
        refreshScore();
    } else {
        // Pas besoin de "ELSE" dans le future. Les buttons seront design de manière A, deviendront design en B quand le score est assez élevé pour les acheter et en C quand ils sont achetés.
        alert("Vous devez avoir au moins 10 points pour utiliser ce bouton");
    }
}

function multiplier10() {
    if (score >= 10) {
        pointsPerClick = pointsPerClick * 10;
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
buttonBonusMultiplier5.addEventListener("click", multiplier5);
buttonBonusMultiplier10.addEventListener("click", multiplier10);

// Bonus - Auto Clicker
buttonBonusAutoClicker.addEventListener("click", autoClicker);

// Bonus - 200%/30sec
buttonBonusTime.addEventListener("click", time200);

let resetButtons = document.getElementById("reset");
resetButtons.addEventListener("click", function(){
    
})

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





