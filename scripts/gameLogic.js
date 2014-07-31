var GameLogic = (function () {
'use strict';
    var diceNumber,
        el,
        player,
        i;

    function randomNumber() {
        return Math.floor((Math.random()*6) + 1);
    }

    var rollDice = function () {
        el = document.getElementById('div-dice');
        el.style.padding = '20px 20px 10px 20px';
        el.style.fontSize = '36px';
        el.innerText = 'Roll';
        el.addEventListener('click', function () {
            diceNumber = Math.floor((Math.random() * 6) + 1);
            el.style.padding = '10px 0 10px 35px';
            el.style.fontSize = '52px';
            el.innerText = diceNumber + '';

            for(player in allPlayers) {
                if(player == 'gamer') {
                    setPawnsPosition(player, diceNumber);
                    allPlayers[player].drawDiceNumber.number = diceNumber;
                }
                else {
                    var number = randomNumber();
                    setPawnsPosition(player, number);
                    allPlayers[player].drawDiceNumber.number = number;
                }
            }

            Start.game();
        });
    };

    function setPawnsPosition(player, moveWith) {
        for(i = 0; i < allPlayers[player].pawns.length; i++) {
            if(allPlayers[player].pawns[i].started) {
                allPlayers[player].pawns[i].setPosition(moveWith);
            }
        }
    }

    var checkForGameOver = function (allPlayers) {
        for(player in allPlayers) {
            for(i = 0; i < allPlayers[player].pawns.length; i++) {
                if (allPlayers[player].pawns[i].numberPosition === allPlayers[player].pawns[i].path.length - 1) {
                    gameOver(player);
                }
            }
        }
    };

    var gameOver = function (player) {
        var gameOver = document.createElement('div');
        gameOver.className = 'gameover-div';
        gameOver.innerText = 'Game Over\nWinner is ' + allPlayers[player].name;
        document.body.appendChild(gameOver);
    };

    return {
        rollDice: rollDice,
        checkForGameOver: checkForGameOver
    }

})();