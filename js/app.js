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

function Player (name) {
    this.name = name;
    this.score = 0;
    // this.consecutiveAnswers = consecutiveAnswers;
    // getUserName();
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
    var playerOne = new Player (this.name.value);
    console.log(this.name.value);
    event.target.reset();
    saveToLocal( 'playerOne', playerOne );
    location.href = 'quiz.html';
});

form.addEventListener( '', function(){
    event.preventDefault();
    var playerOne = new Player (this.name.value);
    console.log(this.name.value);
    event.target.reset();
    saveToLocal( 'playerOne', playerOne );
});

//TODO: Add a "add player" button in addition to submit button. Return alert "at least one player required" if user hit submit without adding players
//TODO: Display list of added players to index.html DOM