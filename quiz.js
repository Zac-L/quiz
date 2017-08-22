var currentQuestion = [];
var questionsAsked = 0;
var player = {
    name: getFromLocal('playerNames'),
    score: 0,
};

function getFromLocal( key ) {
    return JSON.parse( localStorage.getItem( key ) );
}

var allQuestions = [
    ['What is the answer to question 1?',['bunny', 'dog','cat','bird'], 0],

    ['What is the answer to question 2?',['billy', 'dog','cat','bird'], 2],

    ['What is the answer to question 3?',['bob', 'dog','cat','bird'], 3],

    ['What is the answer to question 4?',['joe', 'dog','cat','bird'], 1]
];

function randomQuestionGen() {
    currentQuestion = allQuestions [Math.floor(Math.random() * (allQuestions.length))];
    console.log(currentQuestion);
};

function askQuestion() {
    var answer1Element = document.getElementById( 'answer1' );
    answer1Element.innerText = currentQuestion[1][0];

    var answer2Element = document.getElementById( 'answer2' );
    answer2Element.innerText = currentQuestion[1][1];

    var answer3Element = document.getElementById( 'answer3' );
    answer3Element.innerText = currentQuestion[1][2];

    var answer4Element = document.getElementById( 'answer4' );
    answer4Element.innerText = currentQuestion[1][3];

    var questionElement = document.getElementById('questions');
    questionElement.innerText = currentQuestion [0];

    var el = document.getElementById('question-form');

     //Event listener to check status of correct radio button, return score depending on user input
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

        // randomQuestionGen();
        // askQuestion();  
              
    });
}

randomQuestionGen();
askQuestion();