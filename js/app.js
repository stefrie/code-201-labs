/*
 *  Lab: 03 - Extend your 'About Me' and guessing game
 *  Author: Joe Ivans, 2021
 */
'use strict';

/*
 *  Constants
 */
const defaultResponse = 'Woah! I did not expect that answer. Let\'s try the next question.';

/*
 *  Personalized welcome message.
 */
let visitorName = prompt('Welcome! What\'s your name?');
// console.log(`Visitor's name is ${visitorName}`);
alert(`Thanks for visiting, ${visitorName}`);

/*
 *  Question 1
 *
 *  Ask yes/no question.
 *  Log answer.
 *  Check lowercase normalized answer and respond to yes/no or y/n answers.
 *  If answer is not expected, use a respectful default respnose.
 *  Log response.
 */
let joesFirstName = prompt('Yes/No: The site author\'s first name Joe?');
// console.log(`Question 1 answer: ${joesFirstName}`);
switch (joesFirstName.toLowerCase()) {
  case 'y':
  case 'yes':
    var response = 'That\s right! I am Joe!';
    alert(response);
    // console.log(response);
    break;

  case 'n':
  case 'no':
    var response = 'Unfortunately, you\'re incorrect. The author\'s name is Joe.';
    alert(response);
    // console.log(response);
    break;

  default:
    alert(defaultResponse);
  // console.log(defaultResponse);
}

/*
 *  Question 2
 *
 *  Ask yes/no question.
 *  Log answer.
 *  Check lowercase normalized answer and respond to yes/no or y/n answers.
 *  If answer is not expected, use a respectful default respnose.
 *  Log response.
 */
let joesServiceBranch = prompt('Yes/No: Was Joe a US Marine?');
// console.log(`Question 2 answer: ${joesServiceBranch}`);
switch (joesServiceBranch.toLowerCase()) {
  case 'y':
  case 'yes':
    var response = 'Correct! Joe was a Marine.';
    alert(response);
    // console.log(response);
    break;

  case 'n':
  case 'no':
    var response = 'Better luck next time. The correct answer is Yes, Joe was a Marine.';
    alert(response);
    // console.log(response);
    break;

  default:
    alert(defaultResponse);
    // console.log(defaultResponse);
    break;
}

/*
 *  Question 3
 *
 *  Ask yes/no question.
 *  Log answer.
 *  Check lowercase normalized answer and respond to yes/no or y/n answers.
 *  If answer is not expected, use a respectful default respnose.
 *  Log response.
 */
let joesUniversity = prompt('Yes/No: Joe graduated from University of California, Los Angeles?');
// console.log(`Question 3 answer: ${joesUniversity}`);
switch (joesUniversity.toLowerCase()) {
  case 'y':
  case 'yes':
    var response = 'Sorry, it was a bit of a trick question. Joe graduated from Cal State Poly.';
    alert(response);
    // console.log(response);
    break;

  case 'n':
  case 'no':
    var response = 'Correct! Great job!';
    alert(response);
    // console.log(response);
    break;

  default:
    alert(defaultResponse);
    // console.log(defaultResponse);
    break; // good research opportunity --> do I really need to break here?
}

/*
 *  Question 4
 *
 *  Ask yes/no question.
 *  Log answer.
 *  Check lowercase normalized answer and respond to yes/no or y/n answers.
 *  If answer is not expected, use a respectful default respnose.
 *  Log response.
 */
let joesLastJobEnding = prompt('Yes/No: Joe\'s entire department at his last job was laid-off, including him.');
// console.log(`Question 4 answer: ${joesLastJobEnding}`);
switch (joesLastJobEnding.toLowerCase()) {
  case 'y':
  case 'yes':
    var response = 'Sorry that\'s incorrect. As great of a story as that would be, Joe actually resigned his position to further his education.';
    alert(response);
    // console.log(response);
    break;

  case 'n':
  case 'no':
    var response = 'Correct! Joe resigned his position to further his education.';
    alert(response);
    // console.log(response);
    break;

  default:
    alert(defaultResponse);
    // console.log(defaultResponse);
    break;
}

/*
 *  Question 5
 *
 *  Ask yes/no question.
 *  Log answer.
 *  Check lowercase normalized answer and respond to yes/no or y/n answers.
 *  If answer is not expected, use a respectful default respnose.
 *  Log response.
 */
let joesBusinessGoal = prompt('Yes/No: Joe wants to start a small business?');
// console.log(`Question 5 answer: ${joesBusinessGoal}`);
switch (joesBusinessGoal.toLowerCase()) {
  case 'y':
  case 'yes':
    var response = 'That\s correct! Joe wants to start a small dev shop!';
    alert(response);
    // console.log(response);
    break;

  case 'n':
  case 'no':
    var response = 'Sorry, that\'s incorrect. I know, it\'s crazy for a developer to want to start a business. I\'ll leave you with a quote from an econ professor I had: \'Two-thirds of businesses fail. So start three and you should be fine.\'';
    alert(response);
    // console.log(response);
    break;

  default:
    alert(defaultResponse);
    // console.log(defaultResponse);
    break;
}

/*
 *  Question 6
 *
 */
let numberGuessMinRange = 1;
let numberGuessMaxRange = 100;

let correctAnswer = 55;
// let correctAnswer = Math.floor(Math.random() * (numberGuessMaxRange + 1 - numberGuessMinRange) + numberGuessMinRange); // Math lib usage adapted from https://mzl.la/3B2ABfL
let remainingNumberGuesses = 4;
let numberGuessedCorrectly = false;
let canTryAgain = remainingNumberGuesses > 0;

do {
  let numberGuessed = prompt(`Guess a number from ${numberGuessMinRange} to ${numberGuessMaxRange}. You have ${remainingNumberGuesses} tries remaining.`);
  remainingNumberGuesses--;
  // console.log(`Question 6 answer: ${numberGuessed}`);

  let wrongInputType = !numberGuessed;
  let wrongAnswer = !wrongInputType && parseInt(numberGuessed) !== correctAnswer;

  if (wrongInputType) {
    let sorryMessage = `Sorry, that's not a number. Try entering a number.`;
    // console.log(sorryMessage);
    alert(sorryMessage)
  }
  else if (wrongAnswer) {
    let sorryMessage = `Sorry, ${numberGuessed} is too low.`;

    switch (numberGuessed > correctAnswer) {
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
  }
} while (!numberGuessedCorrectly && canTryAgain);

if (!numberGuessedCorrectly) {
  var sorryMessage = `Sorry. I know it's hard to mind-read a computer. The correct answer was ${correctAnswer}`;
  // console.log(sorryMessage);
  alert(sorryMessage)
}

/*
 *  Display the visitor's name on exit.
 */
alert(`It was nice to meet you, ${visitorName}! Thanks for visiting and playing my game!`);