'use strict';

var playerNames = [];

function Game (difficulty, numberOfRounds, roundsPlayed, askedQuestions) {
    this.difficulty = difficulty;
    this.numberOfRounds = numberOfRounds;
    this.roundsPlayed = roundsPlayed;
    askedQuestions = askedQuestions;
    setup();
    displayName();
    startGame();
    newRound();
    getResults();
    displayScore();

}

function Player (name, score, consecutiveAnswers) {
    this.name = name;
    this.score = score;
    this.consecutiveAnswers = consecutiveAnswers;
    getUserName();

}

function Question (question, answer, subject) {
    this.question = question;
    this.answer = answer;
    this.subject = subject;

}

function Round (activePlayer, numberOfQuestions, numberOfQuestionsAsked) {
    this.activePlayer = activePlayer;
    this.numberOfQuestions = numberOfQuestions;
    this.numberOfQuestionsAsked = numberOfQuestionsAsked;
    updateScore();
    // askQuestion();
    checkAnswer();

}

function saveToLocal(key, value ) {
    var localSavedData = JSON.stringify( value );
    localStorage.setItem( key, localSavedData );
}

function getFromLocal( key ) {
    return JSON.parse( localStorage.getItem( key ) );
}
var form = document.getElementById( 'new-player' );
form.addEventListener( 'submit', function(){
    event.preventDefault();
    playerNames.push(this.name.value);
    console.log(this.name.value);
    event.target.reset();

    saveToLocal( 'playerNames', playerNames );

});

/////////////////////
///quiz
////////////////////
var tempQuestions = ['What is the answer to question 1?',['bunny', 'dog','cat','bird'], 'dog'];

//tempQuestins[1][0];

function askQuestion(){
var quiz = document.getElementById( 'question-form' );


}
// quiz.addEventListener( 'submit', function(){
//     event.preventDefault();
//     playerNames.push(this.name.value);
//     console.log(this.name.value);
//     event.target.reset();

//     saveToLocal( 'playerNames', playerNames );

// });
