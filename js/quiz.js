var currentQuestion = [];
var numberOfRounds = 2;
var questionsInRound = 2;
var questionsAsked = 0;
var roundsCompleted = 0;
var activePlayer = 0;
var quiz = document.getElementById('quiz');


var allPlayers = getFromLocal('allPlayers');

var allQuestions = [
    ['In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?', [ 'William and Elizabeth', 'Joseph and Catherine', 'John and Mary', 'George and Anne' ], 2 ],

    [ 'When did the Liberty Bell get its name?', [ 'when it was made, in 1701', 'when it rang on July 4, 1776', 'in the 19th century, when it became a symbol of the abolition of slavery', 'none of the above' ], 2],

    [ 'In the Roy Rogers-Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy\’s horse was named Trigger, which was Dales horse?', [ 'Buttermilk', 'Daisy', 'Scout', 'Tulip' ], 0 ],

    [ 'The Daniel Boon museum at the home where he died can best be described how?', [ 'a log cabin in Kentucky', 'a two-story clapboard house in Tennessee', 'a four-story Georgian-style home in Missouri', 'a three story brick house in Arkansas' ], 2 ],

    [ 'Which of the following items was owned by the fewest U.S. homes in 1990?', [ 'home computer', 'compact disk player', 'cordless phone', 'dishwasher' ], 1 ],

    [ 'Who holds the record for the most victories in a row on the professional golf tour?', [ 'Jack Nicklaus', 'Arnold Palmer', 'Byron Nelson', 'Ben Hogan' ], 2 ],

    [ 'Who is third behind Hank Aaron and Babe Ruth in major league career home runs?', [ 'Reggie Jackson', 'Harmon Killebrew', 'Willie Mays', 'Frank Robinson' ], 2 ],

    [ 'In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?', [ '8', '18', '38', '58' ], 1 ],

    [ 'During the 1980s for six consecutive years what breed of dog was the most popular in the U.S.?', [ 'cocker spaniel', 'German shepherd', 'Labrador retriever', 'poodle' ], 0 ],

    [ 'In 1985, five percent of U.S. households had telephone answering machines. By 1990 what percentage of homes had answering machines?', [ '10 percent', '15 percent', '31 percent', '51 percent' ], 2 ],

    [ 'The first black American pictured on a U.S. postage stamp was who?', [ 'Frederick Douglass', 'Booker T. Washington', 'Louis Armstrong', 'Joe Louis' ], 3 ],

    ['What did the “D” in “D-Day” stand for?', [ 'doom', 'day', 'Dwight (Eisenhower)', 'Dunkirk' ], 1 ],

    [ '20. The Brownie Box Camera introduced by Eastman Kodak in 1900 had a retail price of what?', [ '$1', '$5', '$10', '$20' ], 0 ],
    
    [ 'Which of these characters turned 40 years old in 1990?', [ 'Charlie Brown', 'Bugs Bunny', 'Mickey Mouse', 'Fred Flintstone' ], 0 ],

    [ 'The Philadelphia mint started putting a “P” mint mark on quarters when?', [ '1960', '1980', '1970', 'never' ], 1 ],

    ['Before becoming George Bush’s Secretary of Defense, what was Dick Cheney’s position?', [ 'congressman from Wyoming', 'Army general', 'governor of New Hampshire', 'secretary of defense under Ronald Reagan' ], 0 ],

    [ 'When Mt. St. Helens erupted on May 18, 1980, how many people were killed?', [ '1', '57', '123', '571' ], 1 ],
    
    ['In J. Edgar Hoover, what did the J stand for?', [ 'James', 'John', 'Joseph', 'Jack' ], 1 ],

    [ 'Florence Nightingale became known as “the Lady With the Lamp” during which war?', [ 'American Civil War' , 'Crimean War', 'World War I', 'Korean War' ], 1 ],
    
    [ 'What year was it that the Census Bureau first reported that a majority of new mothers were remaining in the new job market?', [ '1968', '1978', '1988', '2003' ], 2 ]
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
    quiz.style.opacity = 0;
    var el = document.getElementsByClassName('questionButton');

    var roundT = document.getElementById('trans');

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
        console.log('player still has more questions in round');
        roundT.classList.remove('roundT');
        clearAnimateText();

        setTimeout(function() {
            quiz.style.opacity = 1;
            newQuestion();
        }, 500);
    }
    //Run if player has answered all questions in a round, then switches to next player. Also checks number of players
    else if ((questionsAsked === questionsInRound) && (activePlayer < allPlayers.length - 1)) {
        console.log('switching to next player');
        activePlayer++;
        questionsAsked = 0;

        setTimeout(function() {
            quiz.style.opacity = 1;
            newQuestion();
        }, 500);

    }

    //Run if all players have answered all questions in a round
    else {
        console.log('all players have answered all question in the round');
        numberOfRounds--;
        roundsCompleted++;
        activePlayer = 0;
        questionsAsked = 0;
        roundT.classList.add('roundT');
        changeAnimateText();

        setTimeout(function() {
            quiz.style.opacity = 1;
            newQuestion();
        }, 500);
    }
    
});

//Main function to run code. Operates recursively. Navigates to score.html when end state is reached
function newQuestion(){

    //Check if number of rounds is 0. The game is over when there are no more rounds
    if (numberOfRounds === 0){
        saveToLocal('allPlayers', allPlayers);
        // window.location.href = 'score.html';
        console.log('THE ENF');
    }
    //If there are still rounds left, continue running game
    else {
        document.getElementById('roundNumber').innerText = roundsCompleted + 1;
        randomQuestionGen();
        askQuestion();
    }
}

function changeAnimateText(){
    document.getElementById('showRound').innerText = 'Round Number' + numberOfRounds;
}

function clearAnimateText(){
    document.getElementById('showRound').innerText = '';

}

changeAnimateText();
newQuestion();