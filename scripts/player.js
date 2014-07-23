function player(name, color) {                       
    this.pawns = init();
    this.color = color
    this.name = name;

    this.rollTheDice = function () {               // roll the dice functios it returns an array of the dices (2)
       var dices = [];
       dices[0] = random(2,6);        
       dices[1] = random(2, 6);
       return dices;
    }
   
    this.addNewPawn = function(){                  // addNewPawn adds new Pawn to the Field 
        for (var i = 0; i < this.pawns.length; i++) {
            if (!(this.pawns[i].started || this.pawns[i].finished)) {
                this.pawns[i].started = true;
                break;
            }
        }
    }

    this.movePawn = function (pawnNumber, distance) {          //it takes the number of the pawn and the position to move 
        if (this.pawns[pawnNumber].started && !this.pawns[pawnNumber].finished) {
            this.pawns[pawnNumber].position += distance;
        }
    }



    function random(min, max) {
        return Math.floor((Math.random() * max-1) + min);
    }

    function init() {
        var pawns = [];
        for (var i = 0; i < 4; i++) {
            pawns[i] = new pawn(color);
        }
        return pawns;
    }
}



