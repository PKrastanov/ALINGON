var GameLogic = (function () {
'use strict';
    var diceNumber;

    function randomNumber() {
        return Math.floor((Math.random()*6) + 1);
    }

    var setEvents = function  () {

    };

    var rollDice = function () {
        var el = document.getElementById('div-dice');
        el.style.padding = '10px';
        el.style.fontSize = '36px';
        el.innerText = 'Roll';
        el.addEventListener('click', function () {
            var diceNumber = Math.floor((Math.random() * 6) + 1);
            el.style.padding = '10px 0 10px 35px';
            el.style.fontSize = '52px';
            el.innerText = diceNumber + '';

            for(var player in allPlayers) {
                if(player == 'gamer') {
                    for(var i = 0; i < allPlayers[player].pawns.length; i++) {
                        if(allPlayers[player].pawns[i].started) {
                            allPlayers[player].pawns[i].setPosition(diceNumber);
                            console.log(player + ' -> ' + diceNumber)
                        }
                    }
                }
                else {
                    for(var i = 0; i < allPlayers[player].pawns.length; i++) {
                        if(allPlayers[player].pawns[i].started) {
                            var number = randomNumber();
                            allPlayers[player].pawns[i].setPosition(number);
                            console.log(player + ' -> ' + number)
                        }
                    }
                }
            }

            Start.game();
        });
    };

    return {
        rollDice: rollDice
    }

})();