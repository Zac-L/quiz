'use strict';

var allPlayers = [];

function Player (name) {
    this.name = name;
    this.score = 0;
}

function saveToLocal(key, value ) {
    var localSavedData = JSON.stringify( value );
    localStorage.setItem( key, localSavedData );
}

function getFromLocal( key ) {
    return JSON.parse( localStorage.getItem( key ) );
}

var startGame = document.getElementById( 'start-game' );
var addPlayer = document.getElementById( 'add-player' );

addPlayer.addEventListener( 'submit', function(){
    event.preventDefault();
    if (this.playerInput.value === ''){
        alert ('Please enter a name');
    }
    else if (allPlayers.length < 4){
        var player = new Player (this.playerInput.value);
        var el = document.getElementById('players');
        var playerli = document.createElement('li');
        playerli.innerText = player.name;
        el.appendChild(playerli);
        allPlayers.push(player);
        saveToLocal( 'allPlayers', allPlayers );
    }
    else {
        alert ('Too many players!');
    }
    event.target.reset();
});

startGame.addEventListener( 'submit', function(){
    event.preventDefault();
    event.target.reset();
    if (allPlayers.length < 1) {
        alert ('Players Required');
    }
    else {
        location.href = 'quiz.html';
    }
});