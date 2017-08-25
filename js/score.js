'use strict';
if (localStorage.allPlayers){
    var allPlayers = getFromLocal('allPlayers');
}
else {
    var allPlayers = [];
}

function saveToLocal( key, value ) {
    var localSavedData = JSON.stringify( value );
    localStorage.setItem( key, localSavedData );
}
function getFromLocal( key ) {
    return JSON.parse( localStorage.getItem( key ) );
}

//Run this if allScores doesn't exist in localStorage
if ( !localStorage.allScores ) {
    var allScores = [
        {name: 'Owl', score: 299},
        {name: 'Inanimate Carbon Rod', score: -340},
        {name: '[deleted]', score: 419},
        {name: 'the invisible hand of the market', score: -1},
        {name: 'Unpaid Intern', score: 589},
        {name: 'two people in a horse costume', score: 999},
        {name: 'Eelon Musck', score: 120},
        {name: 'Master Chief', score: 600},
        {name: 'Goku', score: 0},
        {name: 'Helvetica', score: -600},
    ];
}
//Run if allScores is already in localStorage
else{
    var allScores = getFromLocal('allScores');
}

//Add all player scores to allScores object array
for (var i = 0; i < allPlayers.length; i++){
    allScores.push(allPlayers[i]);
}

//Sort allScores array in descending order
function sortAllScores() {
    allScores.sort(function aaa(x,y){
        if (x.score > y.score){
            return -1;
        }
        if (x.score < y.score){
            return 1;
        }
        return 0;
    });
}

sortAllScores();

//Add current player scores to allScores localStorage key
saveToLocal('allScores', allScores);

//Populate Score list table
function populateHiScore (){
    var el = document.getElementById('high-score-names');
    el.innerHTML = '';
    for (var i = 0; i < 10; i++){
        var element = document.createElement('li');
        element.innerText = '   ' + allScores[i].name;
        el.appendChild(element);
    }

    var element2 = document.getElementById('high-score-scores');
    element2.innerHTML = '';
    for (var i = 0; i < 10; i++){
        var element = document.createElement('li');
        element.innerText = allScores[i].score + ' points';
        element2.appendChild(element);
    }
};
populateHiScore();

//Reset button event listener
var resetButton = document.getElementById('reset');
resetButton.addEventListener('click',function(){
    var allScores = [
        {name: 'Owl', score: 299},
        {name: 'Inanimate Carbon Rod', score: -340},
        {name: '[deleted]', score: 419},
        {name: 'the invisible hand of the market', score: -1},
        {name: 'Unpaid Intern', score: 589},
        {name: 'two people in a horse costume', score: 999},
        {name: 'Eelon Musck', score: 120},
        {name: 'Master Chief', score: 600},
        {name: 'Goku', score: 0},
        {name: 'Helvetica', score: -600},
    ];
    sortAllScores();
    saveToLocal('allScores', allScores);
    populateHiScore();
});

//New game button event listener
var newGameButton = document.getElementById('new-game');
newGameButton.addEventListener('click', function(){
    window.location.href = 'index.html';
});