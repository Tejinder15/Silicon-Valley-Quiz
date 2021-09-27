var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0; //variable storing score

console.log(chalk.green("Let's see how well you know Tv Show Silicon Valley"));

var userName = readlineSync.question('Please enter your name: ');

//function to run questions
function play(question) {

  console.log(`\n` + question.question);
  console.log("Your options are:- ");

  //loop to loop through options of questions
  for (var i = 0; i < 4; i++) {
    console.log(`[${i + 1}].`, question.options[i])
  }

  var userAns = readlineSync.question(`Enter correct option: `);

  if (userAns < 5) {//to check valid option

    if (userAns === question.answer) {
      score = score + 1;
      console.log(chalk.green("Correct!"))
    }

    else {
      console.log(chalk.red("Wrong!"))
    }

  }
  else {
    console.log(chalk.red("Please enter valid options no!"))
  }
  console.log("Your score: " + chalk.green(score));
}

var questions = [
  {
    question: "What is the name of the Algorithm Made By Richard Hendricks?",
    options: ["Middle Out", "Pathfinder", "Sorter", "Flasker"],
    answer: "1"
  },
  {
    question: "What is the Full Name of Gilfoyle?",
    options: ["Bertram Gilfoyle", "Alexander Gilfoyle", "Mack Gilfoyle", "Steve Gilfyole"],
    answer: "1"
  },
  {
    question: "Is Dinesh ",
    options: ["Indian ", "Pakistani", "Bangladeshi", "American"],
    answer: "2"
  },
  {
    question: "Name of the Company Made By Richard Hendricks",
    options: ["Altassian", "PiedPiper", "Hooli", "PiperChat"],
    answer: "2"
  },
  {
    question: "Who Made PiperChat ?",
    options: ["Dinesh", "Gilfoyle", "Erlich", "Jared"],
    answer: "1"
  }
]

var otherPlayers = [
  {
    name: "daring bhai",
    score: 3
  },
]

for (var i = 0; i < questions.length; i++) {
  play(questions[i]);
}

otherPlayers.push({ name: userName, score: score });

console.log("\n********** SCORES OF OTHER PLAYERS **********")
for (var i = 0; i < otherPlayers.length; i++) {
  console.log('\nname:', otherPlayers[i].name);
  console.log('score:', chalk.green(otherPlayers[i].score));
}
