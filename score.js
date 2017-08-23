'use strict';

var getPlayer = getFromLocal('playerOne');


function saveToLocal(key, value ) {
    var localSavedData = JSON.stringify( value );
    localStorage.setItem( key, localSavedData );
}

function getFromLocal( key ) {
    return JSON.parse( localStorage.getItem( key ) );
}

if (!localStorage.allScores)
{
    var allScores = [];
}

else{
    var allScores = getFromLocal('allScores');
}

allScores.push(getPlayer);
saveToLocal('allScores', allScores);

for (var i = 0; i < allScores.length; i++){
    var el = document.getElementById('high-score');
    var element = document.createElement('li');
    element.innerText = 'Name:  ' + allScores[i].name + '   Score:  ' + allScores[i].score;
    el.appendChild(element);
}


// document.getElementById('player-name').innerText = getPlayer.name;
// document.getElementById('player-score').innerText = getPlayer.score;


