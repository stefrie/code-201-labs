/*
 *  Lab: 04 - Extend your 'About Me' and guessing game
 *  Author: Joe Ivans, 2021
 */
'use strict';

/*
 *  Constants
 */
const defaultResponse = 'Woah! I did not expect that answer. Let\'s try the next question.';
const totalQuestions = 7;

/*
 *  Script scope
 */
let visitorFinalScore = 0;

/*
 *  Personalized welcome message.
 */
let visitorName = prompt('Welcome! What\'s your name?');
// console.log(`Visitor's name is ${visitorName}`);
alert(`Thanks for visiting, ${visitorName}`);


yesNoQuestion(prompt('Yes/No: The site author\'s first name Joe?'), 'That\'s right! I am Joe!', 'Unfortunately, you\'re incorrect. The author\'s name is Joe.');
yesNoQuestion(prompt('Yes/No: Was Joe a US Marine?'), 'Correct! Joe was a Marine.', 'Better luck next time. The correct answer is Yes, Joe was a Marine.');
yesNoQuestion(prompt('Yes/No: Joe graduated from University of California, Los Angeles?'), 'Correct! Great job!', 'Sorry, it was a bit of a trick question. Joe graduated from Cal State Poly.');
yesNoQuestion(prompt('Yes/No: Joe\'s entire department at his last job was laid-off, including him.'), 'Correct! Joe resigned his position to further his education.', 'Sorry that\'s incorrect. As great of a story as that would be, Joe actually resigned his position to further his education.');
yesNoQuestion(prompt('Yes/No: Joe wants to start a small business?'), 'That\'s correct! Joe wants to start a small dev shop!', 'Sorry, that\'s incorrect. I know, it\'s crazy for a developer to want to start a business. I\'ll leave you with a quote from an econ professor I had: \'Two-thirds of businesses fail. So start three and you should be fine.\'');

function yesNoQuestion(prompt, yesResponse, noResponse) {
  // console.log(`Question 1 answer: ${joesFirstName}`);
  switch (prompt.toLowerCase()) {
    case 'y':
    case 'yes':
        alert(yesResponse);
        visitorFinalScore++;
        break;

    case 'n':
    case 'no':
      
        alert(noResponse);
        // console.log(response);
        break;
      
    default:
      alert(defaultResponse);
    // console.log(defaultResponse);
  }
}

/*
 *  Question 6
 *
 *  Ask numeric question.
 *  Give visitor a range.
 *  Give feedback if guess is too high/low.
 *  Give visitor exactly 4 tries to guess correctly.
 *  Give the correct answer when all tries are exhausted.
 */
let numberGuessMinRange = 1;
let numberGuessMaxRange = 100;
let correctNumberGuessAnswer = Math.floor(Math.random() * (numberGuessMaxRange + 1 - numberGuessMinRange) + numberGuessMinRange); // Math lib usage adapted from https://mzl.la/3B2ABfL
let remainingNumberGuesses = 4;
let numberGuessedCorrectly = false;
let canTryNumberGuessAgain = remainingNumberGuesses > 0;

do {
  let numberGuessed = prompt(`Guess a number from ${numberGuessMinRange} to ${numberGuessMaxRange}. You have ${remainingNumberGuesses} tries remaining.`);
  // console.log(`Question 6 answer: ${numberGuessed}`);
  remainingNumberGuesses--;
  let wrongInputType = !numberGuessed;
  let wrongAnswer = wrongInputType || parseInt(numberGuessed) !== correctNumberGuessAnswer;

  if (wrongInputType) {
    let sorryMessage = `Sorry, that's not a number. Try entering a number.`;
    // console.log(sorryMessage);
    alert(sorryMessage)
  }
  else if (wrongAnswer) {
    let sorryMessage = `Sorry, ${numberGuessed} is too low.`;

    switch (numberGuessed > correctNumberGuessAnswer) {
      case true:
        sorryMessage = `Sorry, ${numberGuessed} is too high.`;
        break;
    }
    // console.log(sorryMessage);
    alert(sorryMessage)
  }
  else {
    numberGuessedCorrectly = true;
    let correctMessage = 'Wow! You guessed it!';
    // console.log(correctMessage);
    alert(correctMessage)
    visitorFinalScore++;
  }
  canTryNumberGuessAgain = remainingNumberGuesses > 0;
} while (!numberGuessedCorrectly && canTryNumberGuessAgain);

if (!numberGuessedCorrectly) {
  let sorryMessage = `Sorry. I know it's hard to mind-read a computer. The correct answer was ${correctNumberGuessAnswer}`;
  // console.log(sorryMessage);
  alert(sorryMessage)
}

/*
 *  Question 7
 */
let possibleTopTenAnswers = ['abstract factory', 'composite', 'decorator', 'strategy', 'state', 'mediator', 'command', 'proxy', 'visitor', 'iterator',];
let remainingTopTenGuesses = 6;
let topTenGuessedCorrectly = false;
let canTryTopTenAgain = remainingTopTenGuesses > 0;

do {
  let topTenGuessed = prompt(`Guess a design pattern from my top ten favorites! You have ${remainingTopTenGuesses} tries remaining.`);
  // console.log(`Question 7 answer: ${topTenGuessed}`);
  remainingTopTenGuesses--;
  let wrongInputType = !topTenGuessed;
  let correctTopTenAnswer = false;

  for (let i = 0; i < possibleTopTenAnswers.length && !correctTopTenAnswer; i++) {
    if (!wrongInputType && topTenGuessed.toLowerCase() === possibleTopTenAnswers[i]) {
      correctTopTenAnswer = true;
      visitorFinalScore++;
    }
  }

  if (!correctTopTenAnswer) {
    let sorryMessage = `Sorry, ${topTenGuessed} is not in my list of top ten.`;
    // console.log(sorryMessage);
    alert(sorryMessage)
  }
  else {
    topTenGuessedCorrectly = true;
    let correctMessage = 'Wow! You guessed it!';
    // console.log(correctMessage);
    alert(correctMessage)
  }
  canTryTopTenAgain = remainingTopTenGuesses > 0;
} while (!topTenGuessedCorrectly && canTryTopTenAgain);

if (!topTenGuessedCorrectly) {
  let sorryMessage = `Sorry. Nice try though! The correct answers were one of the following: ${possibleTopTenAnswers.join(', ')}.`;
  // console.log(sorryMessage);
  alert(sorryMessage)
}

/*
 *  Display the visitor's name and score on exit.
 */
alert(`It was nice to meet you, ${visitorName}! Your final score is ${visitorFinalScore}/7 (${(visitorFinalScore / 7) * 100}%)! Thanks for visiting and playing my game!`); // TODO: research string number formats