var tempQuestions = ['What is the answer to question 1?',['bunny', 'dog','cat','bird'], 'answer1'];

function askQuestion() {
    var answer1Element = document.getElementById( 'answer1' );
    answer1Element.innerText = 'TEST';

    var answer2Element = document.getElementById( 'answer2' );
    answer2Element.innerText = tempQuestions[1][0];

    var answer3Element = document.getElementById( 'answer3' );
    answer3Element.innerText = tempQuestions[1][0];

    var answer4Element = document.getElementById( 'answer4' );
    answer4Element.innerText = tempQuestions[1][0];

}
// quiz.addEventListener( 'submit', function(){
//     event.preventDefault();
//     playerNames.push(this.name.value);
//     console.log(this.name.value);
//     event.target.reset();

//     saveToLocal( 'playerNames', playerNames );

// });
askQuestion();