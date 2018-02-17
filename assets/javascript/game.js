// NFL names
var namesList = [
    'PEYTON MANNING',
    'DREW BREES',
    'ADRIAN PETERSON',
    'ANTONIO BROWN',
    'CALVIN JOHNSON',
    'CAM NEWTON',
    'RAY LEWIS',
    'ED REED',
    'LADANIAN TOMLINSON',
    'TOM BRADY',
    'LEVEON BELL',
];
var imagesList = [
    "assets/images/manning.jpeg",
    "assets/images/brees.jpeg",
    "assets/images/peterson.jpeg",
    "assets/images/brown.jpeg",
    "assets/images/johnson.jpeg",
    "assets/images/newton.jpeg",
    "assets/images/lewis.jpeg",
    "assets/images/reed.jpeg",
    "assets/images/tomlinson.jpeg",
    "assets/images/brady.jpeg",
    "assets/images/bell.jpeg",
]
var counter = 8;
var guess; // user guess
var guessed =[];
var currentWord = [];
var wins = 0;
var currentWordHTML = document.getElementsByClassName("currentword");
var counterHTML = document.getElementsByClassName("counter");
var guessedHTML = document.getElementsByClassName("guessed");
var winsHTML = document.getElementsByClassName("wins");
var imageHTML = document.getElementsByClassName("NFLimage");

function start() {
    randomNumber = [Math.floor(Math.random() * namesList.length)];
    answer = namesList[randomNumber];
    imageHTML[0].innerHTML = "<img class='NFLpic' src='" + imagesList[randomNumber] + "' alt='Player Clue'>"
    counterHTML[0].innerHTML = counter;
    for (i = 0; i < answer.length; i++) {
        if (answer[i] === " ") {
            currentWord.push("-");
        }
        else {
            currentWord.push("_");
        }
        }
    currentWordHTML[0].innerHTML = currentWord.join(" ");
    console.log(currentWord);
    counter--; 

}
document.onkeyup = function (event){
    currentLetter = event.key.toUpperCase();
    console.log(currentLetter);
    if (counter === 8){
        start();    }
    else {
        letterEvaluator(currentLetter);
    }
}

function letterEvaluator() {
    if ((guessed.indexOf(currentLetter) === -1) && currentLetter.charCodeAt(0) >= 65 && currentLetter.charCodeAt(0) <=90){
        console.log(currentLetter.charCodeAt());
        guessed.push(currentLetter);
        guessedHTML[0].innerHTML = guessed.join(" ");
        var inside = 0; 
        for (i=0; i < answer.length; i++) {
            if(currentLetter === answer[i]) {
                currentWord[i] = currentLetter;
                console.log(currentWord);
                currentWordHTML[0].innerHTML = currentWord.join(" ");
                inside++;
            }
        }
        if (inside === 0) {
            counter--;
            counterHTML[0].innerHTML = counter;
        }
    }
    checkWin()

}
function checkWin() {
    if (counter === 0) {
        alert ("YOU LOSE. PLAY AGAIN!")
        resetGame();
    }
    if (currentWord.indexOf("_") === -1) {
        wins++;
        winsHTML[0].innerHTML = wins;
        resetGame();
    }

}
function resetGame() {
    counter = 7;
    currentWord = [];
    guessed = [];
    positions = [];
    start()
    guessedHTML[0].innerHTML = guessed;
}
