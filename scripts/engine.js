var Start = (function () {
'use strict';

    var game = function(playerName, language) {

        var allPlayers = init(playerName, language);

        var play = function () {

            if(isBotTurn()) {
                //TODO: how bot will play (some animation).
            }

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

    function init (playerName, language) {
        Draw.bord();

        // TODO: add event listener for questions.

        return {
            gamer: new Player(playerName, language),
            botOne: new Player('Bot1', getDifferentPlayer()),
            botTwo: new Player('Bot2', getDifferentPlayer()),
            botThree: new Player('Bot3', getDifferentPlayer())
        };
    }

    function getDifferentPlayer (language) {
        //TODO: Get bots for the game.
    }

    return {
        game: game
    }

})();