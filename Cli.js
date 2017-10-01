

var inquirer = require("inquirer");
var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');


var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
var georgeWashington = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

console.log(georgeWashington.partial);

var askQuestions = function ();

inquirer.prompt([
  {
    name: "name",
    message: "What is your name?"
  }, {
    name: "position",
    message: "What is your current position?"
  }, {
    name: "age",
    message: "How old are you?"
  }, {
    name: "language",
    message: "What is your favorite programming language?"
  }
]).then(function(answers) {
  
  var newGuy = new Programmer(answers.name, answers.position, answers.age, answers.language);
  
  newGuy.printInfo();
};