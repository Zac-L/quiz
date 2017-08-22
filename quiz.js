var currentQuestion = [];
var playerScore = 0; //Temporary global variable

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
            playerScore++;
            console.log('player is right');
        }
        else {
            playerScore--;
            console.log('player is wrong');
        }

    });
}

// quiz.addEventListener( 'submit', function(){
//     event.preventDefault();
//     playerNames.push(this.name.value);
//     console.log(this.name.value);
//     event.target.reset();

//     saveToLocal( 'playerNames', playerNames );

// });
randomQuestionGen();
askQuestion();