var currPos = 0;
function stepDown() {
    var doc = document.getElementById("token");
    var curr = Number(doc.style.top.replace(/\D/g, ''))
    doc.style.top = (curr + 20) + 'px';
    currPos++;
}
function stepUp() {
    var doc = document.getElementById("token");
    var curr = Number(doc.style.top.replace(/\D/g, ''))
    doc.style.top = (curr - 20) + 'px';
    currPos++;
}
function stepLeft() {
    var doc = document.getElementById("token");
    var curr = Number(doc.style.left.replace(/\D/g, ''))
    doc.style.left = (curr - 20) + 'px';
    currPos++;
}
function stepRight() {
    var doc = document.getElementById("token");
    var curr = Number(doc.style.left.replace(/\D/g, ''))
    doc.style.left = (curr + 20) + 'px';
    currPos++;
}
var steps = new Array;
function push6Steps(value) {
    for (i = 0; i < 6; i++) steps.push(value);

}
function push2Steps(value) {
    for (i = 0; i < 2; i++) steps.push(value);
}
push6Steps(stepDown);
push6Steps(stepLeft);
push2Steps(stepDown);
push6Steps(stepRight);
push6Steps(stepDown);
push2Steps(stepRight);
push6Steps(stepUp);
push6Steps(stepLeft);
push2Steps(stepUp);
push6Steps(stepLeft);
push6Steps(stepUp);
steps.push(stepLeft);
push6Steps(stepDown);

function randomMove() {
    var num = Math.floor((Math.random() * 5) + 1);
    alert("You roll "+num);
    var position = currPos;
    for (i = currPos; i < position+num; i++) {
        steps[i]();
    }
}