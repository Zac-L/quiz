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
        {name: 'Owl', score: 600},
        {name: 'Inanimate Carbon Rod', score: 200},
        {name: '[deleted]', score: 700},
        {name: 'the invisible hand of market', score: 300},
        {name: 'Unpaid Intern', score: 800},
        {name: 'two people in a horse costume', score: 1000},
        {name: 'Eelon Musck', score: 500},
        {name: 'Master Chief', score: 900},
        {name: 'Goku', score: 400},
        {name: 'a lamb', score: 100},
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
    element.innerText = '   ' + allScores[i].name + ':     ' + allScores[i].score + ' points';
    el.appendChild(element);
}
