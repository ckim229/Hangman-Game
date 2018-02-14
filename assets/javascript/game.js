// NFL names
var names = [
    'Peyton Manning',
    'Drew Brees',
    'Adrian Peterson',
    'Antonio Brown',
    'Calvin Johnson',
    'Cam Newton',
    'Ray Lewis',
    'Ed Reed',
    'Ladanian Tomlinson',
    'Tom Brady',
    'Dexter McCluster',
];
var counter = 0;
var guessed =[];
var currentWord = "";
var wins = 0; 


for (i=0; i<names[7].length; i++) {
    if (names[7][i] === " ") {
        currentWord = currentWord + " ";
    }
    else {
        currentWord = currentWord + "-";
    }
    }
document.getElementsByClassName("currentword").innerHTML += currentWord;
console.log(currentWord);