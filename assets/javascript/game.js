// *************************************************
// 
// *************************************************
// Class - Coding Bootcamp MW 
// Assignment #3 - Word Guess Game
// Author: Rod Skoglund
// File: game.js
// *************************************************

// Declare Variables
var activeWord = "";
var incorrectLettersList = "";
var correctLettersList = "";
var winCount = 0;
var remainingGuesses = 12;
var correctLetterCount= 0;
var newGame = false;
var wordToDisplay = [];
var activeGuess = "-";
var incorrectGuess = true;
var notAlreadyGuessed = false;
var isMatch = false;

// Define links to page elements
var numberOfWins = document.getElementById("numWins");
var currentWord = document.getElementById("theWord");
var numberRemainGuesses = document.getElementById("numGuessesRemain");
var usedLetters = document.getElementById("guessedLetters");

//get random word and assign it to activeWord
activeWord = "testingWord"

//initialize displayed word
for (var i = 0; i < activeWord.length; i++) {
    wordToDisplay[i] = "_";
}

function debugScript() {
    console.log("activeWord = " + activeWord);
    console.log("usedLetters = " + usedLetters);
    console.log("winCount = " + winCount);
    console.log("remainingGuesses = " + remainingGuesses);
    console.log("correctLetterCount = " + correctLetterCount);
    console.log("newGame = " + newGame);
    console.log("wordToDisplay = " + wordToDisplay);
    console.log("activeGuess = " + activeGuess);
    console.log("incorrectGuess = " + incorrectGuess);
    console.log("activeWord.length = " + activeWord.length);
    console.log("notAlreadyGuessed = " + notAlreadyGuessed);
    console.log("*****************************");
}

function updateDisplay () {
    //update display
    numberOfWins.textContent = winCount;
    currentWord.textContent = wordToDisplay.join(" ");
    numberRemainGuesses.textContent = remainingGuesses;
    usedLetters.textContent = incorrectLettersList;
}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    activeGuess = event.key;

    if (newGame) {
        //ignore currect guess and refresh the display
        newGame = false;
        updateDisplay();
    }
    else {
        //reset vars
        incorrectGuess = true;

        

        //determine if new guess is a repeat (correct and incorrect)
        notAlreadyGuessed = ((correctLettersList.indexOf(activeGuess) < 0) && (incorrectLettersList.indexOf(activeGuess) < 0));
        console.log("notAlreadyGuessed = " + notAlreadyGuessed);
        //if it not a repeat - process guess
        if (notAlreadyGuessed) {
            //check for letters in the word that match the guess
            //for each letter in the word, check for a match with the guess
            for (var i = 0; i < activeWord.length; i++) {
                //if guess matches current letter in word
                if (activeGuess.toLowerCase() === activeWord[i].toLowerCase()) {
                    //increase correct letter count
                    correctLetterCount++;
                    //set incorrect guess to false
                    incorrectGuess = false;
                    //Update word display
                    wordToDisplay[i] = activeGuess;
                    // wordToDisplay[i] = activeGuess;
                    // wordToDisplay = "01234567890x";
                    console.log("wordToDisplay[i] = " + wordToDisplay[i]);
                    console.log("i = " + i);
                    console.log("activeGuess = " + activeGuess);
                //end if
                }
            //end for
            }
                            
            //if guess was not found in the word (incorrect guess = true)
            if (incorrectGuess) {
                //add the letter to the list of incorrect letters
                incorrectLettersList = incorrectLettersList + activeGuess;
                console.log("incorrectLettersList = " + incorrectLettersList); 
                //decrement remaining guess count
                remainingGuesses--;
            } else {
                //add guess to the correct letter list
                correctLettersList = correctLettersList + activeGuess;
                console.log("correctLetterList = " + correctLettersList);
            }
            //end if
        //end if
        }

        //update display
        updateDisplay();

        //check for a win
        if (correctLetterCount === activeWord.length) {
            //increase number of wins
            winCount++;
            //set new game to true
            newGame = true;
            //let user know they won
            alert("congrats - you won");
        }
        //check for a loss
        else if (remainingGuesses === 0) {
            //user lost 
            newGame = true;
            //let user know they lost
            alert("Sorry, you lost - play again");
        }

        //test for new game and reset variables, if needed
        if (newGame) {
            //update display
            updateDisplay();

            //reinitialize vars and select new word
            activeWord = "testingWord2";
            incorrectLettersList = "";
            correctLettersList = "";
            // winCount = 0;
            remainingGuesses = 12;
            correctLetterCount= 0;
            // newGame = false;
            wordToDisplay = [];
            activeGuess = "-";
            incorrectGuess = true;
            alreadyGuessed = false;
            isMatch = false;

            for (var i = 0; i < activeWord.length; i++) {
                wordToDisplay[i] = "_";
            }
            
        }
        

        debugScript();

    }
}
