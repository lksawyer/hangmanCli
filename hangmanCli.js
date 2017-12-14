var Word = require("./word.js");

var Letter = require("./letter.js");

var inquirer = require('inquirer');

//array of words that player will have to guess
// var wordBank = ["galaga", "tetris", "donkey kong"];
var wordBank = ["galaga", "tetris", "donkeykong"];

var userGuess = "";

var question = 
	{
		type: 'input',
		name: 'userGuess',
		message: "Guess a Letter"
	};

var question2 =
	{
		type: 'input',
		name: 'playAgain',
		message: "Play Again? (y/n)"
	};


var word = new Word(wordBank, userGuess);

var guessesLeft = word.getWord.length + 5;

word.initiate();
console.log(word.displayedWord.toString());
console.log("Guess the word within " + guessesLeft + " attempts to win!");

promptUser();

function promptUser() {

	inquirer.prompt(question).then(answers => {
		word.userGuess = answers.userGuess;
		word.run();
		console.log(word.displayedWord.toString());
		guessesLeft --;
		console.log("There are " + guessesLeft + " guess left!");

		if(guessesLeft >= 0) {
			if(!word.displayedWord.includes("_ ")) {
				console.log("you win!");
				playAgain();
			} else {
				promptUser();
			};
		} else {
			playAgain();
		}
	 });
};

function playAgain() {

	inquirer.prompt(question2).then(answers => {
		if(answers.playAgain === "y") {
			word = new Word(wordBank, userGuess);
			guessesLeft = word.getWord.length + 5;
			word.initiate();
			console.log(word.displayedWord.toString());
			console.log("Guess the word within " + guessesLeft + " attempts to win!");
			promptUser();
		} else {
			console.log("Bye!");
		};
	 });
};



