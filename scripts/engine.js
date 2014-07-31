var allPlayers;

var Start = (function () {
'use strict';
    init();

    var game = function() {
        movePawns(allPlayers);
        //First is Player



    };

    function init () {
        GameLogic.rollDice();
        initBoard();
        var path = createPath();
        allPlayers =  {
            gamer: new Player('Pesho', '#00FF00', path.first),
            BotRuby: new Player('BotRuby', '#00FFFF', path.second),
            BotJS: new Player('BotJS', '#FFFF00', path.thurd),
            BotC: new Player('BotC#', '#FF0000', path.four)
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
