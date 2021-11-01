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
    colgadoSad.style.display = "none";
    colgadoMuerto.style.display = "flex";
}

function win() {
    displayGame.style.display = 'none';
    winner.style.display = 'block'
    colgadoSad.style.display = "none";
    colgadoFeliz.style.display = "flex";
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
    winner.style.display = 'none'
    buttonStart.innerHTML = 'Play Again';
    attemps = 5;
    colgadoSad.style.display = "flex";
    colgadoMuerto.style.display = "none";
    colgadoFeliz.style.display = "none";
}

function getWord() {
    var number = Math.floor(Math.random() * 11);
    return wordList[number];
}

function checkLetter() {
    if (wordGame.includes(game.value.toLowerCase())){
        for (var i = 0; i < wordGame.length; i++) {
            if (game.value.toLowerCase() == wordGame[i]) {
                wordStatus[i] = wordGame[i];
            }
        }
        if (!wordStatus.includes("_")) {
            win();
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
let wordList = ["caballo","pato","gallo","elefante", "burro", "jirafa","sandia","manzana","perro","gato","raton"];
var attemps = 5;
buttonStart.onclick = startGame;
buttonEnter.onclick = checkLetter;
