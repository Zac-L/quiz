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
    askQuestion();
    checkAnswer();

}

function saveToLocal(key, value ) {
    var localSavedData = JSON.stringify( value );
    localStorage.setItem( '', localSavedData );
}

function getFromLocal( key ) {
    return JSON.parse( localStorage.getItem( key ) );
}

function playerSubmit () {
    event.preventDefault();
    var playerName = document.getElementById('submit').value;
    console.log(document.getElementById('submit'));
};

// var form = document.getElementById('new-player');
// submit = document.getElementById('submit-name');
// form.onsubmit = function() {
//     var variable = submit.value;
//     alert(variable);
// };

// var playerSubmit = document.getElementById('new-player');
// playerSubmit.addEventListener('submit', function(){
//     var nameValue = document.getElementById('submit-input').value;
//     console.log(nameValue);
//     return nameValue;
// });
