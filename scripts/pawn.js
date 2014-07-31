var Pawn = (function () {
    //Private
    var ConstTypes = ['javascript', 'cSharp', 'java', 'python'];

    //Public
    var Pawn = function (path, started, finished) {
        //this.type = type;
        this.started = started;
        this.finished = finished;
        this.drawed;
        this.path = path;
        this.position = path[0];
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
