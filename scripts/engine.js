var movePawn = 0;

var Start = (function () {
'use strict';
    var allPlayers
    var game = function(playerName, language) {
        var path = createPath();
        allPlayers = init(playerName, path);
        play(0);
    };

    function play(movePawn) {
        layerTwo.clear();
        movePawns(allPlayers);

        for (var player in allPlayers) {
            if (player == 'gamer') {
                allPlayers[player].pawns[0].setPosition(movePawn);
            }
            else {
                if(movePawn > 0) {
                    var number = Math.floor((Math.random() * 6) + 1);
                }
                else {
                    var number = 0;
                }
                allPlayers[player].pawns[0].setPosition(number);
            }
        }

        setInterval(rollDace(), 3000);
    }

    function init (playerName, path) {
        // TODO: add event listener for questions.
        return {
            gamer: new Player(playerName, '#00FF00', path.first),
            botOne: new Player('Bot1', '#00FFFF', path.second),
            botTwo: new Player('Bot2', '#FFFF00', path.thurd),
            botThree: new Player('Bot3', '#FF0000', path.four)
        };
    }

    return {
        game: game(),
        play: play
    }

})();
