var currentQuestion = [];
var questionsAsked = 0;
var player = {
    name: getFromLocal('playerNames'),
    score: 0,
};

var allQuestions = [
    ['What is the answer to question 1?',['bunny', 'dog','cat','bird'], 0],
    ['What is the answer to question 2?',['billy', 'dog','cat','bird'], 2],
    ['What is the answer to question 3?',['bob', 'dog','cat','bird'], 3],
    ['What is the answer to question 4?',['joe', 'dog','cat','bird'], 1]
];

function getFromLocal( key ) {
    return JSON.parse( localStorage.getItem( key ) );
}

function randomQuestionGen() {
    currentQuestion = allQuestions [Math.floor(Math.random() * (allQuestions.length))];
    console.log(currentQuestion);
};

function askQuestion() {
    //Populate Label elements with four possible answers to a question
    for (var i = 0; i < 4; i++){
        var answerElement = document.getElementById('answer' + ( i + 1 ));
        answerElement.innerText = currentQuestion[1][i];
    }

    //Add question string to DOM
    var questionElement = document.getElementById('questions');
    questionElement.innerText = currentQuestion [0];
    
    //Event listener to check status of correct radio button, return score depending on user input
    var el = document.getElementById('question-form');
    el.addEventListener('submit', function(){
        event.preventDefault();
        var el = document.getElementsByClassName('questionButton');
        if (el[currentQuestion[2]].checked){
            player.score++;
            console.log('player is right');
        }
        else {
            player.score--;
            console.log('player is wrong');

            questionsAsked++;
        }
        
        event.target.reset();
        var spliced = allQuestions.splice( allQuestions.indexOf(currentQuestion), 1 );
        console.log(spliced);
        
        if (allQuestions.length > 0){
            randomQuestionGen();
            askQuestion();
        }

        else {alert(player.score);}
              
    });
}

randomQuestionGen();
askQuestion();