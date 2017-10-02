


var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');
var inquirer = require("inquirer");

var question = [];

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
var georgeWashington = new ClozeCard("George Washington was the first president of the United States.", "George Washington");


questions.push(president, George Washington);

var flashcard = questions[Math.floor(Math.random()* questions.length];



  function getQuestion() {
   if (flashcard === "BasicCard") {
    return flashcard.front
   } else {
    return flashcard.partial
  }
};
   



inquirer.prompt([
  {
   name: 'question',
    message: getQuestion(),
       type: 'input',
       when: function(answer){
        return flashcard.back 
        }else{return flashcard.cloze} 
       }
      },
      ]);

]);

