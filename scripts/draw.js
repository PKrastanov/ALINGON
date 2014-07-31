var paper = Raphael(5, 5, 633, 633),
    paperTwo = Raphael(5, 5, 633, 633),
    canvas = document.getElementById("gameboard"),
    ctx = canvas.getContext("2d"),
    colorR,
    colorG,
    colorB,
    colorA,
    i;


function initBoard() {
    initPlayGround();
}

function initPlayGround() {
    document.getElementById("playGround").style.display = "";
    maindiv = document.getElementById("main");

    ctx.font = "20px helvetica";
    ctx.globalAlpha = 1.0;
    canvas.setStyle = function (styleMap) {
        var styleString = '';
        for (i in styleMap) {
            styleString += i + ':' + styleMap[i] + '; ';
        }
        canvas.setAttribute('style', styleString);
    };
    var canvasStyle = {
        'background': '#fff',
        'border': '1px solid grey'
    };
    canvas.setStyle(canvasStyle);
    drawTheBoard();
    createPath();
}

function drawTheBoard() {
    refreshBoard();
    var boardmap = createMyMap();
    for (var x = 0; x < 15; x++) {
        for (var y = 0; y < 15; y++) {
            switch (boardmap[y][x]) {
                case 0: break;
                case 1: ctx.putImageData(drawARegularTile("blue", tileWidth), tileWidth / 2 + tileWidth * x, tileWidth / 2 + tileWidth * y); break;
                case 2: ctx.putImageData(drawARegularTile("green", tileWidth), tileWidth / 2 + tileWidth * x, tileWidth / 2 + tileWidth * y); break;
                case 3: ctx.putImageData(drawARegularTile("red", tileWidth), tileWidth / 2 + tileWidth * x, tileWidth / 2 + tileWidth * y); break;
                case 4: ctx.putImageData(drawARegularTile("yellow", tileWidth), tileWidth / 2 + tileWidth * x, tileWidth / 2 + tileWidth * y); break;
                case 5: ctx.putImageData(drawARegularTile("gray", tileWidth), tileWidth / 2 + tileWidth * x, tileWidth / 2 + tileWidth * y); break;

                case 9: ctx.putImageData(drawCenterTile(tileWidth), tileWidth / 2 + tileWidth * x, tileWidth / 2 + tileWidth * y); break;
                default: break;
            }
        }
    }

    ctx.putImageData(drawStartField("yellow", 200), 20, 20);
    ctx.putImageData(drawStartField("red", 200), 20, 420);
    ctx.putImageData(drawStartField("blue", 200), 420, 20);
    ctx.putImageData(drawStartField("green", 200), 420, 420);
    ctx.font="60px Verdana";
    ctx.fillText("JS",50,180);
    ctx.fillText("C#",50,580);
    ctx.fillText("Ruby",450,180);
    ctx.fillText("Java",450,580);
	
	drawStartPlaces(140, 40, 15);
	drawStartPlaces(140, 440, 15);
	drawStartPlaces(540, 40, 15);
	drawStartPlaces(540, 440, 15);
}

function createPath() {
    var pathFirstPlayer = [{x:350, y:590}],
        pathSecondPlayer = [],
        pathThurdPlayer = [],
        pathFourPlayer = [],
        i;

    var move = function (to, x, y, width, height, pathFirstPlayer) {
        for (i = 1; i <= to; i++) {
            var obj = {x: x + width * i, y: y - height * i};
            pathFirstPlayer.push(obj);
        }
    };

    var makeOtherPath = function (from, to, path) {
        for(i = from; i <= to; i++) {
            path.push(pathFirstPlayer[i]);
        }
    };

    move(6, 350, 590, 0, 40, pathFirstPlayer);
    move(6, 350, 350, 40, 0, pathFirstPlayer);
    move(2, 590, 350, 0, 40, pathFirstPlayer);
    move(6, 590, 270, -40, 0, pathFirstPlayer);
    move(6, 350, 270, 0, 40, pathFirstPlayer);
    move(2, 350, 30, -40, 0, pathFirstPlayer);
    move(6, 270, 30, 0, -40, pathFirstPlayer);
    move(6, 270, 270, -40, 0, pathFirstPlayer);
    move(2, 30, 270, 0, -40, pathFirstPlayer);
    move(6, 30, 350, 40, 0, pathFirstPlayer);
    move(6, 270, 350, 0, -40, pathFirstPlayer);
    move(1, 270, 590, 40, 0, pathFirstPlayer);
    move(6, 310, 590, 0, 40, pathFirstPlayer);

    makeOtherPath(14, pathFirstPlayer.length-7, pathSecondPlayer);
    makeOtherPath(0, 14, pathSecondPlayer);
    move(6, 590, 310, -40, 0, pathSecondPlayer);

    makeOtherPath(28, pathFirstPlayer.length-7, pathThurdPlayer);
    makeOtherPath(0, 28, pathThurdPlayer);
    move(6, 310, 310, 0, 40, pathThurdPlayer);

    makeOtherPath(42, pathFirstPlayer.length-7, pathFourPlayer);
    makeOtherPath(0, 41, pathFourPlayer);
    move(6, 30, 310, 40, 0, pathFourPlayer);

    return {
        first: pathFirstPlayer,
        second: pathSecondPlayer,
        thurd: pathThurdPlayer,
        four: pathFourPlayer
    }
}

function movePawns (allPlayers) {
    for(var player in allPlayers) {
        var thisPlayer = allPlayers[player];

        for(i = 0; i < thisPlayer.pawns.length; i++) {
            if(thisPlayer.pawns[i].started) {
                if (!thisPlayer.pawns[i].drawed) {
                    var pawn = paper.rect(thisPlayer.pawns[i].position.x + 5, thisPlayer.pawns[i].position.y + 5, 20, 20, 10)
                        .attr({fill: thisPlayer.color, stroke: "#000", "stroke-width": 10, "stroke-opacity": 0.5});
                    thisPlayer.pawns[i].drawed = pawn;
                }
                else {
                    thisPlayer.pawns[i].drawed.animate({
                        x: thisPlayer.pawns[i].position.x + 5,
                        y: thisPlayer.pawns[i].position.y + 5
                    }, 500);
                }
            }
        }
    }
}

var drawDiceNumber = function (allPlayers) {
    paperTwo.clear();
    for(var player in allPlayers) {
        var thisPlayer = allPlayers[player];

        paperTwo.rect(thisPlayer.drawDiceNumber.x, thisPlayer.drawDiceNumber.y, 50, 50, 5)
            .attr({stroke: 'black'});
        paperTwo.text(thisPlayer.drawDiceNumber.x + 25, thisPlayer.drawDiceNumber.y + 25, thisPlayer.drawDiceNumber.number+'')
            .attr({'font-size': 42});
    }
};

function createMyMap() {
    var mapxy = [];
    //notile:0, blue:1,green:2,red:3,yello:4,orange:5;
    mapxy.push([0, 0, 0, 0, 0, 0, 4, 4, 5, 0, 0, 0, 0, 0, 0]);
    mapxy.push([0, 0, 0, 0, 0, 0, 5, 4, 5, 0, 0, 0, 0, 0, 0]);
    mapxy.push([0, 0, 0, 0, 0, 0, 5, 4, 5, 0, 0, 0, 0, 0, 0]);
    mapxy.push([0, 0, 0, 0, 0, 0, 5, 4, 5, 0, 0, 0, 0, 0, 0]);
    mapxy.push([0, 0, 0, 0, 0, 0, 5, 4, 5, 0, 0, 0, 0, 0, 0]);
    mapxy.push([0, 0, 0, 0, 0, 0, 5, 4, 5, 0, 0, 0, 0, 0, 0]);
    mapxy.push([5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 5, 1]);
    mapxy.push([3, 3, 3, 3, 3, 3, 3, 9, 1, 1, 1, 1, 1, 1, 1]);
    mapxy.push([3, 5, 5, 5, 5, 5, 5, 2, 5, 5, 5, 5, 5, 5, 5]);
    mapxy.push([0, 0, 0, 0, 0, 0, 5, 2, 5, 0, 0, 0, 0, 0, 0]);
    mapxy.push([0, 0, 0, 0, 0, 0, 5, 2, 5, 0, 0, 0, 0, 0, 0]);
    mapxy.push([0, 0, 0, 0, 0, 0, 5, 2, 5, 0, 0, 0, 0, 0, 0]);
    mapxy.push([0, 0, 0, 0, 0, 0, 5, 2, 5, 0, 0, 0, 0, 0, 0]);
    mapxy.push([0, 0, 0, 0, 0, 0, 5, 2, 5, 0, 0, 0, 0, 0, 0]);
    mapxy.push([0, 0, 0, 0, 0, 0, 5, 2, 2, 0, 0, 0, 0, 0, 0]);
    return mapxy;
}

function refreshBoard() {
    canvasWidth = window.innerHeight - 10;
    canvasHeight = window.innerHeight;
    maindiv.style.width = canvasWidth + "px";
    maindiv.style.height = canvasWidth + "px";
    ctx.canvas.width = canvasWidth;
    ctx.canvas.height = canvasWidth;

    tileWidth = Math.ceil(canvasWidth / 16);
}

function drawARegularTile(color, width) {
    var imgData = ctx.createImageData(width, width),
        pos = 0;
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < width; y++) {
            var x2 = x - Math.ceil(width / 2);
            var y2 = y - Math.ceil(width / 2);
            var distance = Math.ceil(Math.sqrt(x2 * x2 + y2 * y2));
            var circlewall = Math.ceil(width / 2 * 0.8);
            var circleWidth = Math.ceil(width / 20);
            ys = [];
            for (var j = 0; j < circleWidth; j++) {
                ys.push(y - Math.ceil(circleWidth / 2 * 0.9) - +circleWidth + j);
            }
            if ((circlewall - circleWidth) < distance && distance < circlewall) {
                setColor("white");
            }
            else {
                setColor(color);
            }
            imgData.data[pos++] = colorR;
            imgData.data[pos++] = colorG;
            imgData.data[pos++] = colorB;
            imgData.data[pos++] = colorA;
        }
    }

    return imgData;
}

function drawStartField(color, width, text) {
    var imgData = ctx.createImageData(width, width),
        pos = 0;
    setColor(color);
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < width; y++) {
            imgData.data[pos++] = colorR;
            imgData.data[pos++] = colorG;
            imgData.data[pos++] = colorB;
            imgData.data[pos++] = colorA;
        }
    }
    return imgData;
}

function drawStartPlaces(startX, startY, radius) {
	ctx.strokeStyle="white";

    ctx.beginPath();
	ctx.arc(startX,startY,radius,0,2*Math.PI);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc(startX+3*radius,startY,radius,0,2*Math.PI);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc(startX,startY+3*radius,radius,0,2*Math.PI);
	ctx.stroke();
	
	ctx.beginPath();	
	ctx.arc(startX+3*radius,startY+3*radius,radius,0,2*Math.PI);
	ctx.stroke();
}

function drawCenterTile(width) {
    var imgData = ctx.createImageData(width, width);
    var pos = 0;
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < width; y++) {
            if (x > y - 1 && x < width - y) {
                setColor("red");
            }
            else if (x < y && x > width - y - 1) {
                setColor("blue");
            }
            else if (x > y - 1 && x < width) {
                setColor("green");
            }
            else {
                setColor("yellow");
            }
            imgData.data[pos++] = colorR;
            imgData.data[pos++] = colorG;
            imgData.data[pos++] = colorB;
            imgData.data[pos++] = colorA;
        }
    }

    return imgData;
}

function setColor(color) {
    switch (color) {
        case "blue": colorR = 150, colorG = 150, colorB = 255, colorA = 255; break;
        case "red": colorR = 255, colorG = 0, colorB = 0, colorA = 255; break;
        case "green": colorR = 51, colorG = 180, colorB = 51, colorA = 255; break;
        case "yellow": colorR = 255, colorG = 204, colorB = 0, colorA = 255; break;
        case "white": colorR = 255, colorG = 255, colorB = 255, colorA = 255; break;
        case "gray": colorR = 200, colorG = 200, colorB = 200, colorA = 255; break;
        default: colorR = 0, colorG = 0, colorB = 0, colorA = 0; break;
    }
}

function drawDot(X, Y, x, y) {
    var round = 2;
    for (i = 0; i < X.length; i++) {
        if (X[i] >= x - round && X[i] <= x + round && Y[i] >= y - round && Y[i] <= y + round) {
            return true;
        }
    }

    //if (X >= x - round && X <= x + round && Y >= y - round && Y <= y + round) {
    //    return true;
    //}
    return false;
}

function drawDice(width, value) {
    var imgData = ctx.createImageData(width, width);
    var pos = 0;
    var X = [];
    var Y = [];
    switch (value) {
        case 1:
            X.push(Math.ceil(width / 2));
            Y.push(Math.ceil(width / 2));
            break;
        case 2:
            X.push(Math.ceil(width / 3));
            Y.push(Math.ceil(width / 2));
            X.push(Math.ceil(width - width / 3));
            Y.push(Math.ceil(width / 2));
            break;
        case 3:
            X.push(Math.ceil(width - width / 4));
            Y.push(Math.ceil(width / 4));
            X.push(Math.ceil(width / 2));
            Y.push(Math.ceil(width / 2));
            X.push(Math.ceil(width / 4));
            Y.push(Math.ceil(width - width / 4));
            break;
        case 4:
            X.push(Math.ceil(width / 4));
            Y.push(Math.ceil(width / 4));

            X.push(Math.ceil(width - width / 4));
            Y.push(Math.ceil(width / 4));

            X.push(Math.ceil(width / 4));
            Y.push(Math.ceil(width - width / 4));

            X.push(Math.ceil(width - width / 4));
            Y.push(Math.ceil(width - width / 4));

            break;
        case 5:
            X.push(Math.ceil(width / 4));
            Y.push(Math.ceil(width / 4));

            X.push(Math.ceil(width - width / 4));
            Y.push(Math.ceil(width / 4));

            X.push(Math.ceil(width / 4));
            Y.push(Math.ceil(width - width / 4));

            X.push(Math.ceil(width - width / 4));
            Y.push(Math.ceil(width - width / 4));

            X.push(Math.ceil(width / 2));
            Y.push(Math.ceil(width / 2));
            break;
        case 6:
            X.push(Math.ceil(width / 4));
            Y.push(Math.ceil(width / 4));

            X.push(Math.ceil(width - width / 4));
            Y.push(Math.ceil(width / 4));

            X.push(Math.ceil(width - width / 4));
            Y.push(Math.ceil(width / 2));

            X.push(Math.ceil(width / 4));
            Y.push(Math.ceil(width / 2));

            X.push(Math.ceil(width / 4));
            Y.push(Math.ceil(width - width / 4));

            X.push(Math.ceil(width - width / 4));
            Y.push(Math.ceil(width - width / 4));
            break;
    }
    for (var y = 0; y < width; y++) {
        for (var x = 0; x < width; x++) {

            setColor("white");
            if (drawDot(X, Y, x, y)) {
                setColor("black");
            }
            imgData.data[pos++] = colorR;
            imgData.data[pos++] = colorG;
            imgData.data[pos++] = colorB;
            imgData.data[pos++] = colorA;
        }
    }
    return imgData;
}
