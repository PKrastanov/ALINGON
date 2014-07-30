var Player = (function () {

    //Private
    //function random(min, max) {
    //    return Math.floor((Math.random() * max - 1) + min);
    //}

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
    }

    //Public
    var Player = function (name, color, path) {
        this.path = path;
        this.color = color;
        this.name = name;
        this.pawns = init(path);
    };

    //Player.prototype.rollTheDice = function () {    //it returns an array of the dices
    //    var dices = [];
    //   dices[0] = random(2, 6);
    //     dices[1] = random(2, 6);
    //    return dices;
    //};

    Player.prototype.addNewPawn = function () {                  // addNewPawn adds new Pawn to the Field
        for (var i = 0; i < this.pawns.length; i++) {
            if (!(this.pawns[i].started || this.pawns[i].finished)) {
                this.pawns[i].started = true;
                break;
            }
        }
    };

    Player.prototype.movePawn = function (pawnNumber, distance) {          //it takes the number of the pawn and the position to move
        if (this.pawns[pawnNumber].started && !this.pawns[pawnNumber].finished) {
            this.pawns[pawnNumber].position += distance;
        }

    };

    return Player;

})();


