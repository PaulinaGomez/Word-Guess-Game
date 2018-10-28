

document.addEventListener("DOMContentLoaded", function (event) {
    var audio = new Audio("./assets/images/musica.m4a");

    var words = ["skrek", "donkey", "princess fiona", "gigerbread man", "puss in boots", "Dragon", "lord farquad", "prince charming", "fairy godmother", "king harold"];
    var userWins = 0;
    var userLosses = 0;
    var userGuessesLeft = "";
    var computerChoices = "";

    var guessWho = document.getElementById("wordguess");// palabra para adivinar
    var winsText = document.getElementById("wins");//juegos ganados
    var lossesText = document.getElementById("losses");//juegos perdidos
    var gamesText = document.getElementById("games-left"); //juegos restantes
    var guessesText = document.getElementById("guesses");// letras jugadas

    var computerChoices = "";
    var computerSplit = [];
    var userGuessesLeft = 0;
    var arr_rayitas = [];

    function intitialize() {
        computerChoices = words[Math.floor(Math.random() * words.length)];
        computerSplit = computerChoices.split("");
        userGuessesLeft = computerChoices.length + 3;
        arr_rayitas = new Array(computerSplit.length).fill("_");
        var inBetweenRayitas = arr_rayitas.join(" ");
        guessWho.textContent = inBetweenRayitas;
        guessesText.textContent = "";
    }

    intitialize();

    document.onkeyup = function (event) {
        audio.play();
        var userGuess = event.key;
        var guesses = guessesText.textContent.split(""); //lsajfnsjl
        if (guesses.includes(userGuess)) {
            return;
        }

        if (computerSplit.indexOf(userGuess) > -1) {
            for (var i = 0; i < arr_rayitas.length; i++) {
                if (userGuess == computerSplit[i]) {
                    arr_rayitas[i] = userGuess;
                }
            }

            var inBetweenRayitas = arr_rayitas.join(" ");
            guessWho.textContent = inBetweenRayitas;
            if (arr_rayitas.join("") == computerChoices) {
                userWins = userWins + 1;
                alert("You win");
                intitialize();
            }
        }

        else {
            userGuessesLeft = userGuessesLeft - 1;
            if (userGuessesLeft < 0) {
                alert("You Loose :(");
                userLosses = userLosses + 1;
                intitialize();
            }
        }

        winsText.textContent = userWins;
        lossesText.textContent = userLosses;
        gamesText.textContent = userGuessesLeft;
        guessesText.textContent += userGuess;
    }
});

