var Pawn = (function () {

    var ConstTypes = ['javascript', 'cSharp', 'java', 'python'];
    
    var Pawn = function (type) {          // started means that the pawn is on the board
        this.type = type;
        this.started = false;
        this.finished = false;
        this.position = {
            x: 0,
            y: 0
        };
    };
    
    Pawn.prototype.setValue = function (type) {
        var i;
        for(i = 0; i < ConstTypes.length; i ++){
            if(type === ConstTypes[i]) {
                this.type = type;
            }
        }
    };

    Pawn.prototype.setPosition = function (position) {
        this.position.x = position.x;
        this.position.y = position.y;
    };

    return Pawn;

})();
