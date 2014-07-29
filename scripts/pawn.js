var Pawn = (function () {

    var Pawn = function () {          // started means that the pawn is on the board
        this.started = false;
        this.finished = false;
        this.position = {
            x: 0,
            y: 0
        };
    };

    return Pawn;

})();
