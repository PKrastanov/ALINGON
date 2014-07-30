var Start = (function () {
'use strict';

    var game = function(playerName, language) {

        var path = createPath();
        var allPlayers = init(playerName, language, path);
        play();


        function play() {

            movePawns(allPlayers);
            
            for(var player in allPlayers) {
                allPlayers[player].pawns[0].setPosition(4);
            }

            movePawns(allPlayers);

            setInterval(play, 2000);
        }

    };

    function init (playerName, language, path) {
        // TODO: add event listener for questions.
        return {
            gamer: new Player(playerName, '#00FF00', path.first),
            botOne: new Player('Bot1', '#00FFFF', path.second),
            botTwo: new Player('Bot2', '#FFFF00', path.thurd),
            botThree: new Player('Bot3', '#FF0000', path.four)
        };
    }

    return {
        game: game()
    }

})();
