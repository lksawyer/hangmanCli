// Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder 
// (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

console.log("letter object loaded");

var Letter = function (letterInWord, userGuess) {

	this.userGuess = userGuess;
	this.letterInWord = letterInWord;

	this.display = function() {
		if(this.userGuess === this.letterInWord) {
			return this.userGuess
		} else {
			return "_ ";
		};
	};

		
};

module.exports = Letter;

