var currentQuestion = [];

var allQuestions = [
    ['What is the answer to question 1?',['bunny', 'dog','cat','bird'], 'answer1'],

    ['What is the answer to question 2?',['billy', 'dog','cat','bird'], 'answer1'],

    ['What is the answer to question 3?',['bob', 'dog','cat','bird'], 'answer1'],

    ['What is the answer to question 4?',['joe', 'dog','cat','bird'], 'answer1']
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