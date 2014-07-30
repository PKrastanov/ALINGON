var Start = (function () {
'use strict';

    var game = function(playerName, language) {
        var path = createPath();
        var allPlayers = init(playerName, language, path);

        var play = function () {
            //if(isBotTurn()) {
                //TODO: how bot will play (some animation).
            //}

            //Draw Parts (every time).
            //Draw.pawns(allPlayers);
            //Draw.dice();

            //Ask to trow the dice
            //GameLogic.diceThrow();

            //Get pawn or move pawn.

            //Is Player win.

            //Game over (will be in if).

            //Repeat.
        }

    };

    function init (playerName, language, path) {
        // TODO: add event listener for questions.

        return {
            gamer: new Player(playerName, language, path.first),
            botOne: new Player('Bot1', getDifferentPlayer(), path.second),
            botTwo: new Player('Bot2', getDifferentPlayer(), path.thurd),
            botThree: new Player('Bot3', getDifferentPlayer(), path.four)
        };
    }

    function getDifferentPlayer (language) {
        //TODO: Get bots for the game.
    }

    return {
        game: game()
    }

})();
