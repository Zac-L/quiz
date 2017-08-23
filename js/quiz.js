var currentQuestion = [];
var numberOfRounds = 3;
var questionsInRound = 2;
var questionsAsked = 0;
var roundsCompleted = 0;
var activePlayer = 0;

var allPlayers = getFromLocal('allPlayers');

var allQuestions = [
    ['What is the answer to question 1?',['bunny', 'dog','cat','bird'], 0],
    ['What is the answer to question 2?',['billy', 'dog','cat','bird'], 2],
    ['What is the answer to question 3?',['bob', 'dog','cat','bird'], 3],
    ['What is the answer to question 4?',['joe', 'dog','cat','bird'], 1],
    ['What is the answer to question 5?',['bunny', 'dog','cat','bird'], 0],
    ['What is the answer to question 6?',['billy', 'dog','cat','bird'], 2],
    ['What is the answer to question 7?',['bob', 'dog','cat','bird'], 3],
    ['What is the answer to question 2?',['billy', 'dog','cat','bird'], 2],
    ['What is the answer to question 3?',['bob', 'dog','cat','bird'], 3],
    ['What is the answer to question 4?',['joe', 'dog','cat','bird'], 1],
    ['What is the answer to question 5?',['bunny', 'dog','cat','bird'], 0],
    ['What is the answer to question 6?',['billy', 'dog','cat','bird'], 2],
    ['What is the answer to question 7?',['bob', 'dog','cat','bird'], 3],
    ['What is the answer to question 8?',['bob', 'dog','cat','bird'], 3],
    ['What is the answer to question 9?',['joe', 'dog','cat','bird'], 1],
    ['What is the answer to question 10?',['bunny', 'dog','cat','bird'], 0],
    ['What is the answer to question 4?',['joe', 'dog','cat','bird'], 1],
    ['What is the answer to question 5?',['bunny', 'dog','cat','bird'], 0],
    ['What is the answer to question 6?',['billy', 'dog','cat','bird'], 2],
    ['What is the answer to question 7?',['bob', 'dog','cat','bird'], 3],
    ['What is the answer to question 8?',['bob', 'dog','cat','bird'], 3],
    ['What is the answer to question 8?',['bob', 'dog','cat','bird'], 3],
    ['What is the answer to question 9?',['joe', 'dog','cat','bird'], 1],
    ['What is the answer to question 10?',['bunny', 'dog','cat','bird'], 0],
    ['What is the answer to question 4?',['joe', 'dog','cat','bird'], 1],
    ['What is the answer to question 5?',['bunny', 'dog','cat','bird'], 0],
    ['What is the answer to question 6?',['billy', 'dog','cat','bird'], 2],
    ['What is the answer to question 7?',['bob', 'dog','cat','bird'], 3],
    ['What is the answer to question 8?',['bob', 'dog','cat','bird'], 3],
    ['What is the answer to question 9?',['joe', 'dog','cat','bird'], 1],
    ['What is the answer to question 10?',['bunny', 'dog','cat','bird'], 0],
    ['What is the answer to question 11?',['billy', 'dog','cat','bird'], 2],
    ['What is the answer to question 12?',['bob', 'dog','cat','bird'], 3],
];

function saveToLocal(key, value ) {
    var localSavedData = JSON.stringify( value );
    localStorage.setItem( key, localSavedData );
}

function getFromLocal( key ) {
    return JSON.parse( localStorage.getItem( key ) );
}

//Generates random question from allQuestions array, assigns is to currentQuestion variable
function randomQuestionGen() {
    currentQuestion = allQuestions [Math.floor(Math.random() * (allQuestions.length))];
};

function askQuestion() {
    //Populate Label elements with four possible answers to a question
    for (var i = 0; i < 4; i++){
        var answerElement = document.getElementById('answer' + ( i + 1 ));
        answerElement.innerText = currentQuestion[1][i];
    }

    //Add question string to DOM
    var questionElement = document.getElementById('questions');
    questionElement.innerText = currentQuestion[0];
}

//Event listener to check status of correct radio button, return score depending on user input
var el = document.getElementById('question-form');
el.addEventListener('submit', function(){
    event.preventDefault();
    var el = document.getElementsByClassName('questionButton');
    //Run this if player seleced correct answer
    if (el[currentQuestion[2]].checked){
        allPlayers[activePlayer].score++;
        questionsAsked++;
    }
    //Run if player was incorrect
    else {
        allPlayers[activePlayer].score--;
        questionsAsked++;
    }
    event.target.reset();

    //Remove asked question from allQuestions array
    allQuestions.splice( allQuestions.indexOf(currentQuestion), 1 );

    //Run if the player still needs to answer more questions in a round
    if (questionsAsked < questionsInRound){
        newQuestion();
    }

    //Run if player has answered all questions in a round. Also checks number of players
    else if ((questionsAsked === questionsInRound) && (activePlayer < allPlayers.length - 1)) {
        activePlayer++;
        questionsAsked = 0;
        newQuestion();
    }

    //Run if all players have answered all questions in a round
    else {
        numberOfRounds--;
        roundsCompleted++;
        activePlayer = 0;
        questionsAsked = 0;
        newQuestion();
    }
});

//Main function to run code. Operates recursively. Navigates to score.html when end state is reached
function newQuestion(){
    //Check if number of rounds is 0. The game is over when there are no more rounds
    if (numberOfRounds === 0){
        saveToLocal('allPlayers', allPlayers);
        window.location.href = 'score.html';
    }
    //If there are still rounds left, continue running game
    else {
        randomQuestionGen();
        askQuestion();
    }
}

newQuestion();