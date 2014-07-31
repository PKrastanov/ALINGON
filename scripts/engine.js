var allPlayers;

var Start = (function () {
'use strict';
    init();

    var game = function() {
        movePawns(allPlayers);
        drawDiceNumber(allPlayers);
        GameLogic.checkForGameOver(allPlayers);
    };

    function init () {
        GameLogic.rollDice();
        initBoard();
        var path = createPath();
        allPlayers =  {
            gamer: new Player('Gamer', '#00FF00', path.first, {x: 440, y: 440}),
            BotRuby: new Player('BotRuby', '#00FFFF', path.second, {x: 440, y: 40}),
            BotJS: new Player('BotJS', '#FFFF00', path.thurd, {x: 40, y: 40}),
            BotC: new Player('BotC#', '#FE2E2E', path.four, {x: 40, y: 440})
        };

    }

    //If we need more colors.
    var randomColor = function (){
        var red = Math.floor((Math.random()*256) + 1);
        var green = Math.floor((Math.random()*256) + 1);
        var blue = Math.floor((Math.random()*256) + 1);
        return 'rgb(' + red + ',' + green + ',' + blue + ')';
    };

    return {
        game: game
    }

})();
