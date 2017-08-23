var currentQuestion = [];
var numberOfRounds = 3;
var questionsInRound = 2;
var questionsAsked = 0;
var roundsCompleted = 0;

var player = {
    name: getFromLocal('playerOne').name,
    score: 0,
};

var allQuestions = [
    ['What is the answer to question 1?',['bunny', 'dog','cat','bird'], 0],
    ['What is the answer to question 2?',['billy', 'dog','cat','bird'], 2],
    ['What is the answer to question 3?',['bob', 'dog','cat','bird'], 3],
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
        player.score++;
        console.log('player is right');
        questionsAsked++;
    }
    //Run if player was incorrect
    else {
        player.score--;
        console.log('player is wrong');
        questionsAsked++;
    }
    event.target.reset();
    var spliced = allQuestions.splice( allQuestions.indexOf(currentQuestion), 1 );

    //If there are still questions in the round
    if (questionsAsked < questionsInRound ){
        newQuestion();
    }

    //If there are no more rounds left
    else if (numberOfRounds === 1){
        saveToLocal('playerOne', player);
        console.log(localStorage.playerScore);

        window.location.href = 'score.html';
    }

    //If there are no more questions in the round
    else {
        numberOfRounds--;
        roundsCompleted++;
        questionsAsked = 0;
        console.log('number of rounds is now ' + numberOfRounds);
        newQuestion();
    }
});

function newQuestion(){
    //TO DO: get number of rounds to display correctly as "Round 1, Round 2,..."
    document.getElementById('roundNumber').innerText = roundsCompleted + 1;
    randomQuestionGen();
    askQuestion();
}

newQuestion();