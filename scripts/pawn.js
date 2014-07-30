var Pawn = (function () {

    var ConstTypes = ['javascript', 'cSharp', 'java', 'python'];
    
    var Pawn = function (path, started, finished) {          // started means that the pawn is on the board
        //this.type = type;
        this.started = started;
        this.finished = finished;
        this.position = path[0];
        this.path = path;
        this.numberPosition = 0;
    };
    
    Pawn.prototype.setValue = function (type) {
        var i;
        for(i = 0; i < ConstTypes.length; i ++){
            if(type === ConstTypes[i]) {
                this.type = type;
            }
        }
    };

    Pawn.prototype.setPosition = function (number) {
        this.numberPosition += number;
        this.position = this.path[this.numberPosition];
    };

    return Pawn;

})();
