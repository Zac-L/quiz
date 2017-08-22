'use strict';

var getPlayer = getFromLocal('playerOne');

document.getElementById('player-name').innerText = getPlayer.name;
document.getElementById('player-score').innerText = getPlayer.score;

function saveToLocal(key, value ) {
    var localSavedData = JSON.stringify( value );
    localStorage.setItem( key, localSavedData );
}

function getFromLocal( key ) {
    return JSON.parse( localStorage.getItem( key ) );
}