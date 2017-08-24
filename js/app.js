'use strict';

var allPlayers = [];

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

var startGame = document.getElementById( 'start-game' );
var addPlayer = document.getElementById( 'add-player' );

addPlayer.addEventListener( 'submit', function(){
    event.preventDefault();
    if (this.playerInput.value === ''){
        alert ('Please enter a name');
    }
    else if (allPlayers.length < 4){
        var player = new Player (this.playerInput.value);
        allPlayers.push(player);
        saveToLocal( 'allPlayers', allPlayers );
    }
    else {
        alert ('Too many players!');
    }
    event.target.reset();
});

startGame.addEventListener( 'submit', function(){
    event.preventDefault();
    event.target.reset();
    if (allPlayers.length < 1) {
        alert ('Players Required');
    }
    else {
        location.href = 'quiz.html';
    }
});

//TODO: Add a "add player" button in addition to submit button. Return alert "at least one player required" if user hit submit without adding players
//TODO: Display list of added players to index.html DOM