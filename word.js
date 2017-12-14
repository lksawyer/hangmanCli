//Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.

// var UserSearch = require("./UserSearch");

// var WeatherAdmin = function() {

//   this.getData = function() {
//     fs.readFile("log.txt", "utf8", function(error, data){

//       console.log(data);

//     });
//   };

//   this.newUserSearch = function(name, location) {

//     var newUserSearch = new UserSearch(name, location);
//     var logTxt = "\nName: " + newUserSearch.name +
//     " Location: " + newUserSearch.location + " Date: " + newUserSearch.date;

//     fs.appendFile("log.txt", logTxt);

//     newUserSearch.getWeather();

//   };

// };

console.log("word object loaded");

var Letter = require("./letter.js");

var Word = function(wordBank,userGuess) {

	this.getWord = wordBank[Math.floor((Math.random() * wordBank.length))];
	this.userGuess = userGuess;
	this.displayedWord = [];

	this.initiate = function() {
		for(var i = 0; i < this.getWord.length; i++) {
			this.displayedWord.push("_ ");

		};

	};

	this.run = function () {
		console.log("Inside Word.run");
		for(var i = 0; i < this.getWord.length; i++) {

			var newLetter = new Letter(this.getWord[i], this.userGuess);
			if(newLetter.display() === "_ ") {
				
			} else {
				this.displayedWord[i] = newLetter.display();
			};

		};
	};

};

module.exports = Word;