'use strict';

//TO DO: Retrofit this to accomodate multiple players
var getPlayer = getFromLocal('playerOne');

function saveToLocal( key, value ) {
    var localSavedData = JSON.stringify( value );
    localStorage.setItem( key, localSavedData );
}
function getFromLocal( key ) {
    return JSON.parse( localStorage.getItem( key ) );
}

//Run this if allScores doesn't exist in localStorage
if ( !localStorage.allScores ) {
    var allScores = [];
}
//Run if allScores is already in localStorage
else{
    var allScores = getFromLocal('allScores');
}

//Add current player to allScores object array
//TO DO: Retrofit this to accomodate multiple players
allScores.push(getPlayer);
//Display Player and score information on DOM
document.getElementById('player-name').innerText = getPlayer.name;
document.getElementById('player-score').innerText = getPlayer.score;

//Add current player scores to allScores localStorage key
saveToLocal('allScores', allScores);

//Populate Score list table
//TO DO (Stretch Goal): Turn this into a proper high score list. Rank players 1 through 10. Change whenever a new score is added.
for (var i = 0; i < allScores.length; i++){
    var el = document.getElementById('high-score');
    var element = document.createElement('li');
    element.innerText = 'Name:  ' + allScores[i].name + '   Score:  ' + allScores[i].score;
    el.appendChild(element);
}
