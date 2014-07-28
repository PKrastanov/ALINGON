var Draw = (function () {
init();
})();

function init() {
    initPlayGround();
}
function initPlayGround() {
    document.getElementById("playGround").style.display = "";
    maindiv = document.getElementById("main");
    canvas = document.getElementById("gameboard");
    ctx = canvas.getContext("2d");

    ctx.font = "20px helvetica"
    ctx.globalAlpha = 1.0;
    canvas.setStyle = function (styleMap) {
        var styleString = new String();
        for (i in styleMap) {
            styleString += i + ':' + styleMap[i] + '; ';
        }
        canvas.setAttribute('style', styleString);
    }
    var canvasStyle = {
        'background': '#fff',
        'border': '1px solid grey'
    };
    canvas.setStyle(canvasStyle);
    drawTheBoard();
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
}


function createMyMap() {
    var mapxy = new Array();
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
function resizeboard() {
    refreshBoard();
    drawTheBoard();
}
function drawARegularTile(color, width) {
    var imgData = ctx.createImageData(width, width);
    var pos = 0;
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < width; y++) {
            var x2 = x - Math.ceil(width / 2);
            var y2 = y - Math.ceil(width / 2);
            var distance = Math.ceil(Math.sqrt(x2 * x2 + y2 * y2));
            var circlewall = Math.ceil(width / 2 * 0.8);
            var circleWidth = Math.ceil(width / 20);
            ys = new Array();
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
    var imgData = ctx.createImageData(width, width);
    var pos = 0;
    setColor(color);
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < width; y++) {
            var x2 = x - Math.ceil(width / 2);
            var y2 = y - Math.ceil(width / 2);
            imgData.data[pos++] = colorR;
            imgData.data[pos++] = colorG;
            imgData.data[pos++] = colorB;
            imgData.data[pos++] = colorA;
        }
    }
    return imgData;
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
