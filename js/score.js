'use strict';

let allPlayers;
let allScores;

if(localStorage.allPlayers){
    allPlayers = getFromLocal('allPlayers');
}
else {
    allPlayers = [];
}

//Run this if allScores doesn't exist in localStorage
if(!localStorage.allScores) {
    allScores = [
        { name: 'Owl', score: 299 },
        // {name: 'Inanimate Carbon Rod', score: -340},
        // {name: '[deleted]', score: 419},
        // {name: 'the invisible hand of the market', score: -1},
        // {name: 'Unpaid Intern', score: 589},
        // {name: 'two people in a horse costume', score: 999},
        // {name: 'Eelon Musck', score: 120},
        // {name: 'Master Chief', score: 600},
        // {name: 'Goku', score: 0},
        // {name: 'Helvetica', score: -600},
    ];
}
//Run if allScores is already in localStorage
else {
    allScores = getFromLocal('allScores');
}

//Add all player scores to allScores object array
for(var i = 0; i < allPlayers.length; i++){
    allScores.push(allPlayers[i]);
}

//Functions for saving/getting data from localStorage
function saveToLocal(key, value) {
    var localSavedData = JSON.stringify(value);
    localStorage.setItem(key, localSavedData);
}
function getFromLocal(key) {
    return JSON.parse(localStorage.getItem(key));
}

//Sort allScores array in descending order
function sortAllScores() {
    allScores.sort(function aaa(x, y){
        if(x.score > y.score){
            return -1;
        }
        if(x.score < y.score){
            return 1;
        }
        return 0;
    });
}

//Populate Score list table
function populateHiScore(){
    //Names
    var nameElement = document.getElementById('high-score-names');
    nameElement.innerHTML = '';
    for(let i = 0; i < allScores.length; i++){
        const element = document.createElement('li');
        element.innerText = '   ' + allScores[i].name;
        nameElement.appendChild(element);
    }
    //Scores
    var scoreElement = document.getElementById('high-score-scores');
    scoreElement.innerHTML = '';
    for(let i = 0; i < allScores.length; i++){
        const element = document.createElement('li');
        element.innerText = allScores[i].score + ' points';
        scoreElement.appendChild(element);
    }
}

//Reset button event listener
var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function(){
    allScores = [
        { name: 'Owl', score: 299 },
        // {name: 'Inanimate Carbon Rod', score: -340},
        // {name: '[deleted]', score: 419},
        // {name: 'the invisible hand of the market', score: -1},
        // {name: 'Unpaid Intern', score: 589},
        // {name: 'two people in a horse costume', score: 999},
        // {name: 'Eelon Musck', score: 120},
        // {name: 'Master Chief', score: 600},
        // {name: 'Goku', score: 0},
        // {name: 'Helvetica', score: -600},
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

sortAllScores();

//Add current player scores to allScores localStorage key
saveToLocal('allScores', allScores);

populateHiScore();