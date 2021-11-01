function updateWordStatus() {
    var wordOutput = [];
    for (var i = 0; i < wordGame.length; i++) {
        wordOutput += wordStatus[i];
    }
    word.innerHTML = wordOutput;
}

function gameOver() {
    displayGame.style.display = 'none';
    over.style.display = 'block'
}

function startGame() {
    wordGame = getWord();
    for (var i = 0; i < wordGame.length; i++) {
        wordStatus[i] = '_';
    }
    word.innerHTML = "_".repeat(wordGame.length);
    game.value = "";
    displayGame.style.display = 'flex';
    over.style.display = 'none'
    buttonStart.innerHTML = 'Play Again';
}

function getWord() {
    var number = Math.floor(Math.random() * 3);
    return wordList[number];
}

function checkLetter() {
    if (wordGame.includes(game.value)){
        for (var i = 0; i < wordGame.length; i++) {
            if (game.value == wordGame[i]) {
                wordStatus[i] = wordGame[i];
            }
        }
    }
    else {
        attemps--;
        if (attemps <= 0) {
            gameOver();
            return;
        }
    }
    updateWordStatus();
    game.value = "";
}

function displayMenu() {
    if (screen.width > 767){
        return;
    }
    if (displayed == false) {
        menuOptions.style.display = 'none';
        displayed = true;
    }
    else {
        menuOptions.style.display = 'block'
        displayed = false;
    }
}

var wordGame = "";
let wordStatus = [];
let wordList = ["elefante", "burro", "jirafa","zanahoria","tomate"];
var attemps = 5;
buttonStart.onclick = startGame;
buttonEnter.onclick = checkLetter;
