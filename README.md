# Word-Guess-Game
Assignment #3 - Word Guess Game
Author: Rod Skoglund
Date: May 26, 2018

#Table Of Contents
----------------
1. Game Introduction
2. Instructions

1. Game Introduction
This Word Guessing Game is a version of Hangman written in Javascript, using HTML and CSS to manage the display. It is Assignment #3 in the Coding BootCamp course at the University of Kansas. 

2. Instructions
The games starts when you press a key (first game after refresh, your first key pressed is your first guess). You will then continue guessing letters in the word.

If your guess is correct, each instance of that letter will show up in the displayed word. A correct guess does not count against you and will not impact your number of remaning guesses.

If your guess is incorrect, your letter will be added to the list of incorrect guessed letters and the remaining guesses will be decremented by one.

If you guess a letter that you have already guessed, whether it is correct or not, nothing will happen. the display will remain the same and your remaining guesses will remain the same.

If you guess all the letters before the remaining guesses reaches 0, you win and the number of wins will increase by 1.

If the remaining guesses reaches 0 before you have guessed all the letters, you lose. After acknowledging the pop up, the full word will be displayed.

When you win or lose, the final word will be displayed. You can press any letter to get a new word which starts your next game (the letter you pressed will not count as a guess on the next word). 

If you refresh the page, your win count will be reset to 0 and a new game will be ready to go.

Note, the words may have upper and lower case, but your guesses are case insensitive, so a "W" is the same as "w". If you guess "w" and the word contains a "W", it will count as a correct guess.

Enjoy ::):