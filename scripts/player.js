var Player = (function () {
'use strict';
    //Private
    function init(path) {
        var pawns = [];
        for (var i = 0; i < 4; i++) {
            if(i === 0) {
                pawns.push(new Pawn(path, true, false));
            }
            else {
                pawns.push(new Pawn(path, false, false));
            }
        }

        return pawns;
    };

    //Public
    var Player = function (name, color, path) {
        this.color = color;
        this.name = name;
        this.pawns = init(path);
    };

    Player.prototype.addNewPawn = function () {
        for (var i = 0; i < this.pawns.length; i++) {
            if (!this.pawns[i].started) {
                this.pawns[i].started = true;
                break;
            }
        }
    };

    return Player;

})();


