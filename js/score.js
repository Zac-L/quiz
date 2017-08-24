'use strict';

var allPlayers = getFromLocal('allPlayers');

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
        //TO DO: make preset list of players and scores
        {name: 'fake player name', score: 6},
        {name: 'fake player name', score: 2},
        {name: 'fake player name', score: 7},
        {name: 'fake player name', score: 3},
        {name: 'fake player name', score: 8},
        {name: 'fake player name', score: 10},
        {name: 'fake player name', score: 5},
        {name: 'fake player name', score: 9},
        {name: 'fake player name', score: 4},
        {name: 'fake player name', score: 1},
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
allScores.sort(function aaa(x,y){
    if (x.score > y.score){
        return -1;
    }
    if (x.score < y.score){
        return 1;
    }
    return 0;
});

//Add current player scores to allScores localStorage key
saveToLocal('allScores', allScores);

//Populate Score list table
//TO DO (Stretch Goal): Turn this into a proper high score list. Rank players 1 through 10. Change whenever a new score is added.
for (var i = 0; i < 10; i++){
    var el = document.getElementById('high-score');
    var element = document.createElement('li');
    element.innerText = 'Name:  ' + allScores[i].name + '   Score:  ' + allScores[i].score;
    el.appendChild(element);
}
