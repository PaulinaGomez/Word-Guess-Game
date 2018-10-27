

document.addEventListener("DOMContentLoaded", function(event) { 
var audio = new Audio("./assets/images/musica.m4a");


var words = ["skrek", "donkey", "princess fiona", "gigerbread man", "puss in boots", "Dragon", "lord farquad", "prince charming", "fairy godmother", "king harold"];
var userWins = 0;
var userLosses = 0;
var userGuessesLeft = 0;

var isFirstKeypress = true;

var guessWho = document.getElementById("wordguess");// palabra para adivinar
var winsText = document.getElementById("wins");//juegos ganados
var lossesText = document.getElementById("losses");//juegos perdidos
var gamesText = document.getElementById("games-left"); //juegos restantes
var guessesText = document.getElementById("guesses");// letras jugadas
var computerSplit = "";

function start (){
    var computerChoices = words[Math.floor(Math.random()*words.length)];
            console.log(computerChoices.split(""));
            computerSplit = computerChoices.split("");
            var arr_rayitas = new Array(computerSplit.length).fill("_");
            var inBetweenRayitas = arr_rayitas.join(" ");
            var userGuessesLeft = computerChoices.length + 3;
            isFirstKeypress = false;
}

    document.onkeyup = function(event) {
        audio.play();
        if (isFirstKeypress) {
            start();
        }
        else    {
                var userGuess = event.key;   
                guessWho.textContent = inBetweenRayitas;
                 if (computerSplit.indexOf(userGuess)>-1) {
                    for (var i = 0; i < arr_rayitas.length; i++) {
                        if (userGuess == computerSplit[i]){
                        userWins = userWins + 1;
                        arr_rayitas[i] = userGuess;
                        }
                    }
                console.log(arr_rayitas);
             }
            } 
        
        else    {
            userGuessesLeft = userGuessesLeft - 1;
            userLosses = userLosses + 1;
            }    
            
        if (userGuessesLeft < 0) {
            alert ("You Loose :(");
            start();
            }

            winsText.textContent = userWins;
            lossesText.textContent = userLosses;
            gamesText.textContent = userGuessesLeft;
            guessesText.textContent += userGuess;

        }  
    });    
                
        
        

    
    
       /*
        document.onkeyup = function(event) {
        guessesText.textContent = event.key;

    /*document.onkeyup = function(event) {
        var toAnswer = event.key;
        if (toAnswer === computerChoices) {
            userWins = userWins + 1;
            
            
        }    
            
        else     {
            
        }
        
*/


      

  /*      console.log("currentQuestion " + currentQuestion);
           console.log(userScore);
            if (currentQuestion === questions.length) {
                alert(userScore)
            }
        
    
        document.onkeyup = function(event) {
            userText.textContent = event.key;
        }
    
        rewriteStats();


           else     
            userGuessesLeft = userGuessesLeft - 1;
            
            document.onkeyup = function(event) {
            
        

            userLosses = userLosses + 1;
            
            document.onkeyup = function(event) {
            
        }
    




        */
  