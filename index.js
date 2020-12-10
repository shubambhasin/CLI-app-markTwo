var readlineSync = require('readline-sync');
var score =0;


//easy question set

var easySet = [{
  question:"What is the captial of India \n Mumbai \n Delhi\n Chennai\n-------\n",
  answer:"delhi"
}, {
  question:"What is the capital of Punjab \n Himachal \n Chandigarh \n Delhi\n-------\n",
  answer:"chandigarh"
}, {
  question:"Where is Taj MAhal Located ? \nJammu and KAshmir \n Delhi \n Agra\n-------\n",
  answer:"agra"
}, {
  question:"Golden temple is a sacred place of ?\nSikhs\nHindu\nChristans\n-------\n",
  answer:"sikhs"
}]


///medium set
var mediumSet = [{
  question:"What is the captial of Chile \n London \n Santiago\n Abu Dhabi\n-------\n",
  answer:"santiago"
}, {
  question:"What is the largest country in the world \n Russia \n India \n China\n-------\n",
  answer:"russia"
}, {
  question:"What is the hottest continent on Earth ? \nAfrica\n Asia \n New Zealand\n-------\n",
  answer:"africa"
}, {
  question:"What is the longest river in the world?\nBrahamputra\nGanga\nNile\n-------\n",
  answer:"nile"
}]



///hardset

var hardSet = [{
  question:"How many players are there in a rugby league team \n 13 \n 15\n 10\n-------\n",
  answer:"13"
}, {
  question:"How many world titles has Phil Talyor won in darts \n 5 \n 10 \n 16\n-------\n",
  answer:"16"
}, {
  question:"Which one of the following color is not there in an olympic ring ? \nBlue \n Orange \n Black\n-------\n",
  answer:"orange"
}, {
  question:" Which horse is the only three-time winner of the Grand National ?\nRed Rum\nBlack Dog\nheart\n-------\n",
  answer:"Red Rum"
}]


var userName = readlineSync.question("What is your name? ")

console.log("Welcome " + userName );

//fucntion main 

var level = readlineSync.question("Please choose your level \n---------------\nEasy\nMedium\nHard\n--------------\n")




if(level =='easy')
{
  
console.log(userName + ", you chose " + level + " Level");


for (var i=0; i < 4; i++)
{
  var currentQuestion = easySet[i];
  askQuiz(currentQuestion.question, currentQuestion.answer)

  
}

console.log(userName+ " your score is " + score);

}
else if (level =='medium')
{
  
console.log(userName + ", you chose " + level + " Level")
for (var i=0; i < 4; i++)
{
  var currentQuestion = mediumSet[i];
  askQuiz(currentQuestion.question, currentQuestion.answer)
}
console.log(userName+ " your score is " + score);

}
else if (level=='hard')
{
  
console.log(userName + ", you chose " + level + " Level")
for (var i=0; i < 4; i++)
{
  var currentQuestion = hardSet[i];
  askQuiz(currentQuestion.question, currentQuestion.answer)
}
console.log(userName+ " your score is " + score);
}
else
{
  console.log("Wrong option start the game again")

}



//////////

function askQuiz( question, answer)
{

  var userAnswer = readlineSync.question(question);

  userAnswer.toString()
  userAnswer.toUpperCase()
  answer.toString()


  if(userAnswer === answer)
{
  console.log("Right answer\n-------\n")
  score++

}
else
{
  console.log("Wrong answer\n-------\n")
}
}



