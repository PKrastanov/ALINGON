var Draw = (function () {
 var my_canvas = document.getElementById("canvas");
 var context = my_canvas.getContext("2d");
 context.strokeRect(0, 0, 500, 500);

 context.fillStyle = "green";
 context.font = "30px Calibri";
 context.fillText("This is our game board", 15, 175);


})();